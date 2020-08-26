<template>
  <section id="step2" class="step2">
    <div class="bg">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
    </div>
    <div class="content">
      <h2>Раскрой свой потенциал</h2>
      <p>
        Можно искать Путь самому, а можно обратиться к профессионалам. Освой полезные привычки и навыки, чтобы стать
        более энергичным и здоровым, лучше спать, осознанно питаться.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'step2'
}
</script>

<!--<style lang="scss" src="@/assets/css/steps/2.scss" scoped />-->

<style lang="scss">
@import '~@/assets/css/var';

.step2 {
  position: relative;

  display: flex;
  justify-content: center;
  margin-bottom: 291px;

  @media #{$tablet} {
    margin-bottom: 245px;
  }
}
.step2 .bg {
  top: 0;
  left: -48px;
  right: -48px;
  bottom: 0;
  position: absolute;
  z-index: 0;

  @media #{$tablet} {
    left: -24px;
    right: -24px;
  }
}
.step2 .bg1 {
  top: -75px;
  left: 1080px;
  position: absolute;

  width: 1135px;
  height: 96px;

  background: url('~@/assets/img/Group_54.svg') 0 50% no-repeat;

  @media #{$laptop} {
    top: -96px;
    left: 54.0364583333333%;
    right: auto;
    bottom: auto;

    width: 567px;
    height: 48px;
    background-size: contain;
  }
  @media #{$mobile} {
    left: 87px;
  }
}
.step2 .bg2 {
  top: 147px;
  left: -243px;
  position: absolute;

  width: 552px;
  height: 110px;

  background: url('~@/assets/img/Group_53.svg') 100% 50% no-repeat;

  @media #{$laptop} {
    top: auto;
    left: -1px;
    right: auto;
    bottom: -96px;

    width: 249px;
    height: 48px;
    background-size: contain;
  }
}
.step2 .bg3 {
  top: auto;
  left: 997px;
  right: auto;
  bottom: -188px;
  position: absolute;

  width: 751px;
  height: 96px;

  background: url('~@/assets/img/Group_52.svg') 0 50% no-repeat;

  @media #{$laptop} {
    left: 67.578125%;
    bottom: -192px;

    width: 371px;
    height: 48px;
    background-size: contain;
  }
  @media #{$mobile} {
    left: 191px;
  }
}
.step2 .content {
  position: relative;
  z-index: 1;

  max-width: 576px;
  background: $energy;
  padding: 48px;
  border-radius: 48px;

  @media #{$tablet} {
    position: static;
    max-width: 476px;
    padding: 24px;
    border-radius: 24px;
  }
}
</style>
