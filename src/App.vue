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
        <div class="has-text-centered">
          <ul>
            <li>{{ $t('message.footer') }}</li>
            <li>{{ getLastDate() }}</li>
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

import moment from "@/helpers/moment";

export default {
  name: "app",
  components: {
    Navbar
  },
  methods: {
    getLastDate: function() {
      return moment(this.$i18n.locale)
        .format(this.$t("date.format"))
        .toString();
    }
  }
};
</script>
