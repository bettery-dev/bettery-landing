<template>
  <div>
    <article class="container">
      <div class="wrapper">
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
                Приложение разработано практикующими психологами и тренерами, чтобы ты мог успешно развиваться в трёх
                сферах: здоровье, сознание, эффективность. Получи свой индивидуальный Путь развития — новая
                привычка-челлендж каждую неделю!
              </p>
              <a href="#" class="scroll" @click.prevent="scrollTo">
                <i class="scroll-arrow"></i><span>Начни свой Путь прямо сейчас!</span>
              </a>
            </div>
          </div>
        </section>
        <section id="step2" class="step2">
          <div class="bg">
            <div class="bg1"></div>
            <div class="bg2"></div>
            <div class="bg3"></div>
          </div>
          <div class="content">
            <h2>Раскрой свой потенциал</h2>
            <p>
              Можно искать Путь самому, а можно обратиться к профессионалам. Освой полезные привычки и навыки, чтобы
              стать более энергичным и здоровым, лучше спать, осознанно питаться.
            </p>
          </div>
        </section>
        <section class="step3">
          <div class="bg">
            <img src="~/assets/img/Illustration.svg" alt="Illustration" />
          </div>
          <div class="content">
            <h2>Собери коллекцию привычек</h2>
            <p>
              Ответь на несколько вопросов, и алгоритм Bettery подберет только те привычки, которые тебе нужны прямо
              сейчас. Заверши челлендж успешно, и Bettery предложит новый. Продолжай работать над текущей привычкой
              сколько хочешь. Становись профи, мастером и даже гуру.
            </p>
          </div>
        </section>
      </div>

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
                Дорогу осилит идущий. Двигаясь маленькими шагами, ты быстро пойдёшь по своему Пути. Начни сегодня.
                Bettery всегда будет рядом, чтобы узнать, как у тебя дела. Мы будем заботливо менять Путь, учитывая твой
                прогресс и новые потребности. Знай: лучшая версия себя не за горами!
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

      <footer class="wrapper">
        <subscribe />
      </footer>
    </article>
  </div>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'
import Subscribe from '~/components/Subscribe/index'

export default {
  data: () => ({
    move: 0,
    scrollY: 0,
    itemsWidth: 0,
    step1ImageLoad: false,
    isDrag: false,
    dragX: 0,
    dragPosition: 0
  }),
  components: {
    Subscribe
  },
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

<style lang="scss" src="@/assets/css/pages/index.scss" scoped />
