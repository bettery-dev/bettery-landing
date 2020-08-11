<template>
  <article class="container">
    <section class="step1">
      <div>
        <div class="image">
          <img
            srcset="~/assets/img/step1_iPhone.png 1x, ~/assets/img/step1_iPhone@2x.png 2x"
            src="~/assets/img/step1_iPhone.png"
            alt=""
          />
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
          <div class="scroll">
            <div class="scroll-arrow"></div>
            <span>Начни свой Путь прямо сейчас!</span>
          </div>
        </div>
      </div>
    </section>
    <section class="step2">
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
        <div class="bg1"></div>
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
    <section class="step4">
      <div class="bg">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="bg3"></div>
      </div>
      <div ref="list" class="list">
        <div class="list-items" ref="list-items" :style="`transform: translate3d(${move}px, 0, 0)`">
          <div @click="onItem(0)">
            <h2>Измени свою жизнь</h2>
            <p>
              Дорогу осилит идущий. Двигаясь маленькими шагами, ты быстро пойдёшь по своему Пути. Начни сегодня. Bettery
              всегда будет рядом, чтобы узнать, как у тебя дела. Мы будем заботливо менять Путь, учитывая твой прогресс
              и новые потребности. Знай: лучшая версия себя не за горами!
            </p>
          </div>
          <div @click="onItem(1)">
            <img
              srcset="~/assets/img/image_5.png 1x, ~/assets/img/image_5@2x.png 2x"
              src="~/assets/img/image_5.png"
              alt=""
            />
          </div>
          <div @click="onItem(2)">
            <img
              srcset="~/assets/img/image_6.png 1x, ~/assets/img/image_6@2x.png 2x"
              src="~/assets/img/image_6.png"
              alt=""
            />
          </div>
          <div @click="onItem(3)">
            <img
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
import Subscribe from '~/components/Subscribe/index'

export default {
  data: () => ({
    W: null,
    LIST: null,
    ITEMS: [],
    move: 0
  }),
  components: {
    Subscribe
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
    window.addEventListener('orientationchange', this.onResize)
  },
  methods: {
    onResize() {
      this.move = 0

      this.$nextTick()

      this.W = window.innerWidth
      this.LIST = this.$refs.list.getBoundingClientRect().x

      this.ITEMS = Array.from(this.$refs['list-items'].children).map(item => ({
        x: item.getBoundingClientRect().x,
        width: item.getBoundingClientRect().width
      }))
    },
    onItem(n) {
      if (n === 0) return (this.move = 0)

      const { x, width } = this.ITEMS[n]

      this.move = this.W / 2 - (x + width / 2)
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/pages/index.scss" scoped />
