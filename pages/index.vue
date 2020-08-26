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
import step1 from '~/components/steps/step1'
import step2 from '~/components/steps/step2'
import step3 from '~/components/steps/step3'
import step4 from '~/components/steps/step4'
import Subscribe from '~/components/Subscribe/index'

export default {
  components: {
    step1,
    step2,
    step3,
    step4,
    Subscribe
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
