<template>
  <div class="overflow">
    <div class="wrapper">
      <nuxt />

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
