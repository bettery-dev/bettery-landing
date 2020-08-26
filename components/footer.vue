<template>
  <div class="wrapper">
    <footer class="footer">
      <a href="/"><img src="~/assets/img/logo_footer.svg" alt=""/></a>

      <!--<menu>
        <nuxt-link to="/privacy">Правила</nuxt-link>
        <nuxt-link to="/rules">Приватность</nuxt-link>
        <nuxt-link to="/">Помощь</nuxt-link>
      </menu>-->

      <div class="copyright">Bettery.app © 2020</div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/css/var';

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: $white;
  @include footer;

  min-height: 140px;

  margin-top: 206px;

  @media #{$tablet} {
    flex-direction: column;

    border-top: 1px solid rgba($white, 0.2);

    margin-top: 70px;
    padding-top: 23px;
    padding-bottom: 47px;
  }
}
.footer menu {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 0;
}
.footer menu a {
  color: rgba($white, 0.5);
  text-decoration: none;

  &:hover {
    color: rgba($white, 1);
  }

  margin-left: 48px;
  @media #{$tablet} {
    margin-left: 24px;
  }

  &:first-child {
    margin-left: 0;
  }
}

.copyright {
  color: rgba($white, 0.5);
  @include copyright;
}
</style>
