<template>
  <section class="step1" ref="step1">
    <div>
      <div class="image">
        <div class="image-scroll">
          <img
            v-scroll="imageScroll"
            v-show="step1ImageLoad"
            @load="onStep1ImageLoad"
            @touchend="dragStop"
            @touchstart="dragStart"
            @touchmove.prevent="dragMove"
            srcset="~/assets/img/step1_iPhone.png 1x, ~/assets/img/step1_iPhone@2x.png 2x"
            src="~/assets/img/step1_iPhone.png"
            alt=""
            :style="`transform: translate3d(${dragX}px, ${scrollY}px, 0)`"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="content">
        <a href="/" class="logo">
          <img src="~/assets/img/logo.svg" alt="Bettery.app" />
        </a>
        <h1>Твой личный коуч для лучшей жизни</h1>
        <p>
          Приложение разработано практикующими психологами и тренерами, чтобы ты мог успешно развиваться в трёх сферах:
          здоровье, сознание, эффективность. Получи свой индивидуальный Путь развития — новая привычка-челлендж каждую
          неделю!
        </p>
        <a href="#" class="scroll" @click.prevent="scrollTo">
          <i class="scroll-arrow"></i><span>Начни свой Путь прямо сейчас!</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'
export default {
  name: 'step1',
  data: () => ({
    move: 0,
    scrollY: 0,
    itemsWidth: 0,
    step1ImageLoad: false,
    isDrag: false,
    dragX: 0,
    dragPosition: 0
  }),
  methods: {
    animate({ timing, draw, duration, delay }) {
      let start = performance.now()

      const animate = time => {
        let timeFraction = (time - start) / duration
        if (timeFraction > 1) timeFraction = 1
        let progress = timing(timeFraction)
        draw(progress)
        if (timeFraction < 1) requestAnimationFrame(animate)
      }

      if (delay) {
        setTimeout(() => {
          start = performance.now()
          requestAnimationFrame(animate)
        }, delay)
      } else {
        requestAnimationFrame(animate)
      }
    },
    dragStart($event) {
      this.isDrag = window.innerWidth < 750
      this.dragPosition = $event.touches[0].pageX
    },
    dragMove($event) {
      if (!this.isDrag) return
      this.dragX = $event.touches[0].pageX - this.dragPosition
    },
    dragStop() {
      this.isDrag = false
      const move = this.dragX

      this.animate({
        delay: 700,
        duration: 700,
        timing: x => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)),
        draw: progress => (this.dragX = move - move * progress)
      })
    },
    onStep1ImageLoad() {
      this.step1ImageLoad = true
    },
    imageScroll(evt, el) {
      if (!this.$refs.step1) return
      if (window.innerWidth > 549) return

      const height = this.$refs.step1.clientHeight - el.clientHeight - 160
      const Ymove = window.scrollY
      this.scrollY = height < Ymove ? height : Ymove < 0 ? 0 : Ymove
    },
    scrollTo() {
      const firstScrollTo = scroller()
      firstScrollTo('#step2', {
        offset: -150
      })
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/var';

.step1 {
  position: relative;
  display: flex;

  margin-bottom: 177px;
  padding-bottom: 114px;

  @media #{$tablet} {
    display: block;
    margin-left: -24px;
    margin-right: -24px;
    margin-bottom: 143px;
  }

  @media #{$mobile} {
    margin-bottom: 198px;
  }
}
.step1 > div {
  width: 50%;
  padding-right: 50px;

  @media #{$tablet} {
    width: 100%;
    padding: 0;
  }

  &:last-child > div {
    padding-left: 50px;

    @media #{$tablet} {
      padding: 0;
    }
  }
}

.step1 .image {
  padding: 0 85px;
  text-align: center;
  background: $yellow;

  border-radius: 0 0 48px 48px;

  @media #{$laptop} {
    padding: 0 70px;
  }

  @media #{$tablet} {
    min-height: 148px;
    border-radius: 0 0 24px 24px;
  }
}

.step1 .image-scroll {
  @media #{$tablet} {
    top: 33px;
    right: 96px;
    bottom: auto;
    position: absolute;
  }
  @media #{$mobile} {
    right: -87px;
  }
}

.step1 .image img {
  position: relative;
  z-index: 1;

  width: auto;
  max-width: 100%;
  margin-top: 76px;
  margin-bottom: -138px;

  box-shadow: 0 8px 32px rgba(16, 19, 64, 0.5);

  border-radius: 56px;

  @media #{$laptop} {
    border-radius: 35px;
  }

  @media #{$tablet} {
    top: 0;
    position: sticky;

    margin: 0;

    max-height: 464px;
  }
}

.step1 .content {
  padding-top: 82px;

  @media #{$tablet} {
    margin-left: 96px;
    margin-top: 33px;
    max-width: 285px;
  }
  @media #{$mobile} {
    width: 50%;
    margin-left: 24px;
  }
}
.step1 .content .logo {
  display: flex;
  margin-left: -16px;
  margin-bottom: 58px;

  @media #{$tablet} {
    display: block;
    top: 56px;
    left: 96px;
    right: auto;
    position: absolute;

    width: 154px;
    height: 56px;

    margin: 0;
  }
  @media #{$mobile} {
    left: 24px;
  }
}
.step1 .content .logo img {
  @media #{$tablet} {
    margin: 0;
    text-align: left;
    justify-self: flex-start;

    width: auto;
    max-width: 100%;
  }
}

.step1 .content h1 {
  @include h1;
  margin-bottom: 32px;

  @media #{$tablet} {
    margin-bottom: 24px;
  }
}
.step1 .content p {
  @include text;
  margin-bottom: 48px;

  @media #{$tablet} {
    margin-bottom: 90px;
  }
}

@keyframes bounce {
  from {
    transform: translate3d(0, -3px, 0);
  }
  to {
    transform: translate3d(0, 7px, 0);
  }
}
.step1 .content .scroll {
  display: flex;
  align-items: center;

  color: $white;
  @include scrolltext;

  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media #{$laptop} {
    line-height: 2;
  }

  @media #{$tablet} {
    left: 0;
    right: 0;
    position: absolute;

    @include text;
    flex-direction: column-reverse;
  }
}

.step1 .content .scroll .scroll-arrow {
  flex: 0 0 auto;
  position: relative;

  width: 48px;
  height: 48px;

  background: rgba($white, 0.25);

  overflow: hidden;
  border-radius: 50%;

  @media #{$mobile}, #{$tablet} {
    width: 24px;
    height: 24px;
    background: $white;
  }

  &::after {
    top: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;

    content: '';

    background: url('~@/assets/img/arrow.svg') 50% no-repeat;

    animation: bounce 0.6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @media #{$mobile}, #{$tablet} {
      background-size: 12px;
      animation: none;
    }
  }
}
.step1 .content .scroll span {
  margin-left: 24px;

  @media #{$mobile}, #{$tablet} {
    margin-left: 0;
    margin-bottom: 12px;
  }
}
</style>
