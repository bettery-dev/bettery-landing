<template>
  <article class="container">
    <section class="step1" ref="step1">
      <div>
        <div class="image">
          <div class="image-scroll">
            <img
              v-scroll="imageScroll"
              srcset="~/assets/img/step1_iPhone.png 1x, ~/assets/img/step1_iPhone@2x.png 2x"
              src="~/assets/img/step1_iPhone.png"
              alt=""
              :style="`transform: translate3d(0, ${yPhone}px, 0)`"
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
          Можно искать Путь самому, а можно обратиться к профессионалам. Освой полезные привычки и навыки, чтобы стать
          более энергичным и здоровым, лучше спать, осознанно питаться.
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
          Ответь на несколько вопросов, и алгоритм Bettery подберет только те привычки, которые тебе нужны прямо сейчас.
          Заверши челлендж успешно, и Bettery предложит новый. Продолжай работать над текущей привычкой сколько хочешь.
          Становись профи, мастером и даже гуру.
        </p>
      </div>
    </section>
    <section class="step4" ref="step4">
      <div class="bg">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
      </div>
      <div ref="list" class="list">
        <div
          class="list-items"
          ref="list-items"
          v-scroll="listScroll"
          :style="`transform: translate3d(${move}px, 0, 0)`"
        >
          <div>
            <h2>Измени свою жизнь</h2>
            <p>
              Дорогу осилит идущий. Двигаясь маленькими шагами, ты быстро пойдёшь по своему Пути. Начни сегодня. Bettery
              всегда будет рядом, чтобы узнать, как у тебя дела. Мы будем заботливо менять Путь, учитывая твой прогресс
              и новые потребности. Знай: лучшая версия себя не за горами!
            </p>
          </div>
          <div>
            <img
              @load="onLoadImg"
              srcset="~/assets/img/image_5.png 1x, ~/assets/img/image_5@2x.png 2x"
              src="~/assets/img/image_5.png"
              alt=""
            />
          </div>
          <div>
            <img
              @load="onLoadImg"
              srcset="~/assets/img/image_6.png 1x, ~/assets/img/image_6@2x.png 2x"
              src="~/assets/img/image_6.png"
              alt=""
            />
          </div>
          <div>
            <img
              @load="onLoadImg"
              srcset="~/assets/img/image_7.png 1x, ~/assets/img/image_7@2x.png 2x"
              src="~/assets/img/image_7.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <footer>
      <subscribe />
    </footer>
  </article>
</template>

<script>
import isMobile from 'ismobilejs'
import { scroller } from 'vue-scrollto/src/scrollTo'
import Subscribe from '~/components/Subscribe/index'

export default {
  data: () => ({
    move: 0,
    yPhone: 0,
    itemsWidth: 0,
    loadImages: 0
  }),
  components: {
    Subscribe
  },
  beforeMount() {
    window.addEventListener('resize', this.onResize)
    window.addEventListener('orientationchange', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('orientationchange', this.onResize)
  },
  methods: {
    imageScroll(evt, el) {
      if (!this.$refs.step1) return
      if (!isMobile(window.navigator).phone) return

      const height = this.$refs.step1.clientHeight - el.clientHeight - 160
      const Ymove = window.scrollY
      this.yPhone = height < Ymove ? height : Ymove < 0 ? 0 : Ymove
    },
    onLoadImg() {
      this.loadImages++
      if (this.loadImages >= 3) this.onResize()
    },
    listScroll(evt, el) {
      if (!this.$refs.list) return
      if (isMobile(window.navigator).phone) return

      const list = this.$refs.list.getBoundingClientRect()

      if (window.innerWidth > this.itemsWidth) {
        this.move = (this.itemsWidth - list.width) / -2
        return
      }

      const Yoffset = 48
      const offsetTop = this.$refs.step4.offsetTop
      const Ystart = offsetTop - window.innerHeight + list.height + Yoffset
      const Yend = offsetTop - Yoffset

      const Ypercent = (Yend - window.scrollY) / (Yend - Ystart)

      let Xmove
      const Xend = this.itemsWidth - list.width
      Xmove = Ypercent > 1 ? 1 : Ypercent < 0 ? 0 : Ypercent
      this.move = Xend * (Xmove - 1)
    },
    scrollTo() {
      const firstScrollTo = scroller()
      firstScrollTo('#step2', {
        offset: -200
      })
    },
    onResize() {
      this.move = 0
      this.itemsWidth = Array.from(this.$refs['list-items'].children)
        .map(item => item.getBoundingClientRect().width)
        .reduce((acc, cur) => acc + cur)
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/pages/index.scss" scoped />
