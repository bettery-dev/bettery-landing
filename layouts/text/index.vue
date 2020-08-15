<template>
  <div class="overflow">
    <div class="wrapper">
      <header class="text-header">
        <a href="/" class="logo">
          <img src="./logo.svg" alt="Bettery.app" />
        </a>
      </header>

      <article class="text-article">
        <menu>
          <nuxt-link to="/">← на главную</nuxt-link>
        </menu>

        <nuxt />
      </article>

      <v-footer />
    </div>
  </div>
</template>

<script>
import VFooter from '~/components/footer'
export default {
  components: { VFooter }
}
</script>

<style lang="scss" src="./_.scss" />
