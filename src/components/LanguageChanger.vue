<template>
  <div class="select locale-changer">
    <select>
      <option
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang.code"
        :selected="lang.code === selectedLanguage"
        v-on:click="setLanguage(lang.code)"
      >
        {{ lang.label }}
      </option>
    </select>

    {{selectedLanguage}}
  </div>
</template>

<script>
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
</script>
