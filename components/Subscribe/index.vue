<template>
  <div class="subscribe">
    <div v-if="!isSuccess" class="start">
      <h2>Каким будет твой первый челлендж?</h2>
      <p>В октябре 2020 на лучших экранах России.</p>

      <form :action="formURL" @submit.prevent="onSubmit" method="post" :class="{ error: !validate }">
        <input
          v-model="email"
          @input="validate = true"
          @keydown.delete="onDelete"
          type="text"
          placeholder="Введи е-мейл"
        />
        <button type="submit" :disabled="!validate">Узнать</button>
      </form>

      <div class="isNotValid" v-show="!validate">
        Проверь, пожалуйста, адрес электронной почты. С ним что-то не так.
      </div>
    </div>
    <div v-else class="success">
      <h2>Лучшая жизнь не за горами!</h2>
      <p>
        Спасибо за интерес к Bettery!<br />
        Мы отправили тебе письмо с подарком.
      </p>
      <p>А пока можешь выпить стаканчик воды. 😎</p>
      <div class="email">{{ email }}</div>
    </div>
  </div>
</template>

<script>
import { isValidEmail } from '~/helpers/inputValidations'

export default {
  data: () => ({
    formURL: '/',
    isSuccess: false,
    email: null,
    validate: true
  }),
  methods: {
    onDelete() {
      this.validate = true
    },
    async onSubmit() {
      this.validate = isValidEmail(this.email)
      if (!this.validate) return

      const data = {
        email: this.email,
        list: 'Bettery'
      }

      try {
        await fetch(process.env.BASE_URL + '/api/subscribe', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        this.validate = true
        this.isSuccess = true
      } catch (e) {
        this.validate = false
        this.isSuccess = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/var';

.subscribe {
  position: relative;
  z-index: 1;

  color: $dark;
  text-align: center;

  background: $yellow;
  border-radius: 48px;
  box-shadow: 0 0 1px 1px $yellow;

  max-width: 864px;
  margin: auto;

  padding: 48px;

  @media #{$laptop} {
    max-width: 576px;
  }
  @media #{$tablet} {
    max-width: 500px;
    padding: 24px;
    border-radius: 24px;
  }
}

h2 {
  @include h2;

  padding: 0 48px;

  margin-bottom: 32px;

  @media #{$laptop} {
    padding: 0;
    margin-bottom: 16px;
  }
}
p {
  @include text;

  margin-bottom: 32px;

  @media #{$laptop} {
    margin-bottom: 16px;
  }
}
.email {
  color: $dark;
  @include input;
  opacity: 0.5;
}

form {
  position: relative;
}

input {
  color: $white;
  @include input;
  font-weight: bold;

  border: 0;
  background: $dark;

  width: 100%;
  height: 96px;

  padding: 0 48px;

  border-radius: 48px;

  outline: 0;

  &::placeholder {
    color: $white;
    opacity: 0.25;
    text-align: center;
  }

  @media #{$laptop} {
    height: 48px;
    margin-bottom: 16px;
    text-align: center;
  }
}

button {
  cursor: pointer;

  top: 0;
  right: 12px;
  bottom: 0;
  position: absolute;

  color: $dark;
  @include input;
  font-weight: bold;

  background: $white;

  height: 72px;

  margin: auto;
  padding: 0 24px;

  outline: 0;
  border: 0;
  border-radius: 48px;

  &:disabled {
    cursor: default;

    color: rgba($dark, 0.2);
  }

  @media #{$laptop} {
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    position: relative;

    height: 48px;
  }
}

.isNotValid {
  @include text;

  margin-top: 10px;
}

form.error input {
  color: $error;
}
</style>
