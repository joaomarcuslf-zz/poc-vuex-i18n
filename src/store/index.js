import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

import * as actions from "@/store/actions";
import * as mutations from "@/store/mutations";

export default new Vuex.Store({
  plugins: [createLogger()],
  state: {
    language: "pt"
  },
  mutations,
  actions
});
