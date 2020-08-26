<template>
  <div class="overflow">
    <nuxt />

    <v-footer />
  </div>
</template>

<script>
export default {
  components: {
    VFooter: () => import('~/components/footer')
  }
}
</script>
