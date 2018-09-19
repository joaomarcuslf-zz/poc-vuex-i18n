import { mapState, mapActions } from "vuex";

export default {
  name: "locale-changer",
  data() {
    return {
      langs: [
        {
          code: "pt",
          label: "Português"
        },
        {
          code: "en",
          label: "English"
        }
      ]
    };
  },
  computed: mapState({
    selectedLanguage: state => state.language
  }),
  methods: mapActions(["setLanguage"])
};
