<template>
  <section class="step4" ref="step4">
    <div class="bg">
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
    </div>
    <div class="list">
      <div class="list-items" ref="list-items">
        <div>
          <h2>Измени свою жизнь</h2>
          <p>
            Дорогу осилит идущий. Двигаясь маленькими шагами, ты быстро пойдёшь по своему Пути. Начни сегодня. Bettery
            всегда будет рядом, чтобы узнать, как у тебя дела. Мы будем заботливо менять Путь, учитывая твой прогресс и
            новые потребности. Знай: лучшая версия себя не за горами!
          </p>
        </div>
        <div>
          <img
            srcset="~/assets/img/image_5.png 1x, ~/assets/img/image_5@2x.png 2x"
            src="~/assets/img/image_5.png"
            alt=""
          />
        </div>
        <div>
          <img
            srcset="~/assets/img/image_6.png 1x, ~/assets/img/image_6@2x.png 2x"
            src="~/assets/img/image_6.png"
            alt=""
          />
        </div>
        <div>
          <img
            srcset="~/assets/img/image_7.png 1x, ~/assets/img/image_7@2x.png 2x"
            src="~/assets/img/image_7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'step4'
}
</script>

<!--<style lang="scss" src="@/assets/css/steps/4.scss" scoped />-->

<style lang="scss">
@import '~@/assets/css/var';

.step4 {
  position: relative;
  margin-bottom: 215px;

  @media #{$tablet} {
    margin-bottom: 143px;
  }
  @media #{$mobile} {
    margin-bottom: 133px;
  }
}
.step4 .bg {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 0;
}
.step4 .bg1 {
  left: 61px;
  bottom: -305px;
  position: absolute;

  width: 362px;
  height: 358px;

  background: url('~@/assets/img/Vector.svg') no-repeat;

  @media #{$tablet} {
    left: auto;
    bottom: -165px;
    right: 145px;

    background-size: contain;

    width: 268px;
    height: 253px;
  }

  @media #{$mobile} {
    display: none;
  }
}
.step4 .bg2 {
  top: -290px;
  left: 0;
  right: 0;
  position: absolute;

  margin: auto;

  width: 412px;
  height: 367px;

  transform: translate3d(100px, 0, 0);

  background: url('~@/assets/img/Vector-1.svg') no-repeat;

  @media #{$tablet} {
    top: -115px;
    left: -15px;
    right: auto;

    background-size: contain;

    width: 268px;
    height: 228px;

    transform: translate3d(0, 0, 0);
  }

  @media #{$mobile} {
    left: 0;
    right: 0;
  }
}
.step4 .bg3 {
  right: -104px;
  bottom: -121px;
  position: absolute;

  width: 418px;
  height: 418px;

  background: url('~@/assets/img/Vector-2.svg') no-repeat;

  @media #{$tablet} {
    top: -104px;
    left: auto;
    right: -121px;

    background-size: contain;

    width: 268px;
    height: 256px;
  }

  @media #{$mobile} {
    display: none;
  }
}

.step4 .list {
  text-align: center;
}

.step4 .list-items {
  position: relative;
  z-index: 1;

  display: inline-block;
  white-space: nowrap;
  text-align: left;

  margin: auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  padding-left: 48px;
  padding-right: 48px;

  @media #{$mobile} {
    margin: 0;
    padding-left: 24px;
    padding-right: 24px;
  }
}
.step4 .list-items > div {
  display: inline-block;
  vertical-align: top;
  white-space: normal;

  margin-left: 48px;

  @media #{$laptop} {
    margin-left: 24px;
  }

  &:first-child {
    margin-left: 0;
  }

  img {
    @media #{$laptop} {
      height: 460px;
    }
  }
}
.step4 .list-items > div:first-child {
  max-width: 576px;
  background: $mind;
  padding: 48px;
  border-radius: 48px;

  @media #{$laptop} {
    max-width: 280px;
  }

  @media #{$tablet} {
    max-width: 215px;
    padding: 24px;
    border-radius: 24px;
  }
}
</style>
