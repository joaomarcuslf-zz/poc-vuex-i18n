<template>
  <router-link tag="li" :to="path" exact>
    <a class="navbar-item">
      {{ text }}
    </a>
  </router-link>
</template>

<script>
export default {
  name: "Navlink",
  props: {
    path: String,
    text: String
  }
};
</script>
