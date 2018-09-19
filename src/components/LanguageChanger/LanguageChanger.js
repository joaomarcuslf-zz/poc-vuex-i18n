import { mapState, mapActions } from "vuex";

export default {
  name: "locale-changer",
  data() {
    return {
      langs: require("@/languages/index.json")
    };
  },
  computed: mapState({
    selectedLanguage: state => state.language
  }),
  methods: mapActions(["setLanguage"])
};
