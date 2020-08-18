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
          required
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
    onSubmit() {
      this.validate = isValidEmail(this.email)
      if (!this.validate) return

      // TODO: Need AJAX
      this.validate = true
      this.isSuccess = true
    }
  }
}
</script>

<style lang="scss" src="./_.scss" scoped />
