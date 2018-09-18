<template>
  <nav id="navbar" class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-brand">
          <div class="navbar-item">
            <a class="has-dropdown is-hoverable">
              <h2 class="subtitle has-text-centered">
                {{ $t("message.hello") }} <a href="https://github.com/joaomarcuslf">@joaomarcuslf</a>
              </h2>
            </a>
          </div>

          <div class="navbar-item">
            <LanguageChanger />
          </div>

          <span class="navbar-burger burger" data-target="navbarMenu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>

      <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <div class="tabs is-right">
            <ul>
              <Navlink
                path="/"
                v-bind:text="$t('button.index')"
              />

              <Navlink
                path="/about"
                v-bind:text="$t('button.about')"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageChanger from "@/components/LanguageChanger";
import Navlink from "@/components/Navlink";

export default {
  name: "Navbar",
  components: {
    LanguageChanger,
    Navlink
  },
  data() {
    return { showNav: false };
  }
};
</script>
