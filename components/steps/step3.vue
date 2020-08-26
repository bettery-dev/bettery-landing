<template>
  <section class="step3">
    <div class="bg">
      <img src="~/assets/img/Illustration.svg" alt="Illustration" />
    </div>
    <div class="content">
      <h2>Собери коллекцию привычек</h2>
      <p>
        Ответь на несколько вопросов, и алгоритм Bettery подберет только те привычки, которые тебе нужны прямо сейчас.
        Заверши челлендж успешно, и Bettery предложит новый. Продолжай работать над текущей привычкой сколько хочешь.
        Становись профи, мастером и даже гуру.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'step3'
}
</script>

<!--<style lang="scss" src="@/assets/css/steps/3.scss" scoped />-->

<style lang="scss">
@import '~@/assets/css/var';

.step3 {
  position: relative;

  display: flex;
  justify-content: space-between;
  margin-bottom: 291px;

  padding-right: 48px;

  @media #{$tablet} {
    padding-right: 72px;
    margin-bottom: 144px;
  }

  @media #{$mobile} {
    flex-direction: column;
    margin-bottom: 133px;
    padding-right: 0;
  }
}
.step3 > div {
  width: 50%;

  @media #{$tablet} {
    max-width: 476px;
    margin: auto;
  }

  @media #{$mobile} {
    width: 100%;
  }
}
.step3 .bg {
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding-right: 58px;

  @media #{$mobile} {
    margin-bottom: 37px;
    padding-right: 0;
  }
}
.step3 .content {
  position: relative;
  z-index: 1;

  max-width: 576px;
  background: $health;

  padding: 48px;
  border-radius: 48px;

  @media #{$tablet} {
    padding: 24px;
    border-radius: 24px;
  }
}
</style>
