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
          name="email"
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
    track() {
      this.$gtm.push({ event: 'subscribe' });
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
        console.log('tracking user subscribed');
        this.track();

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

<style lang="scss" src="./_.scss" scoped />
