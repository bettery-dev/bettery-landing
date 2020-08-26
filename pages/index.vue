<template>
  <div>
    <article class="container">
      <div class="wrapper">
        <step1 />
        <step2 />
        <step3 />
      </div>

      <step4 />

      <footer class="wrapper">
        <subscribe />
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  components: {
    step1: () => import('~/components/steps/step1'),
    step2: () => import('~/components/steps/step2'),
    step3: () => import('~/components/steps/step3'),
    step4: () => import('~/components/steps/step4'),
    Subscribe: () => import('~/components/Subscribe/index')
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/var';

h2 {
  margin-bottom: 32px;

  @media #{$tablet} {
    margin-bottom: 16px;
  }
}

p {
  margin-bottom: 0;
}
</style>
