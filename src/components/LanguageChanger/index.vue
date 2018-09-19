<template>
  <div class="select locale-changer">
    <select @change="setLanguage">
      <option
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang.code"
        :selected="lang.code === selectedLanguage"
      >
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script src="./LanguageChanger.js">
</script>
<style src="./LanguageChanger.css">
</style>
