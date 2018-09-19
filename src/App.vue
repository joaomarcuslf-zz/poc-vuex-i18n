<template>
  <section id="app" class="hero is-fullheight is-default is-bold is-dark">
    <div class="hero-head">
      <Navbar />
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-view />
      </div>
    </div>

    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li><a>{{ $t('message.footer') }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import "../node_modules/bulma/css/bulma.css";
.hero-body {
  margin-top: 20px;
}
</style>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
