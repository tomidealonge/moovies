<template>
  <div class="c-nav" :class="toggleMode ? '--red' : '--black'">
    <div class="c-nav__logo" :class="toggleMode ? '--red' : '--black'"></div>
    <label class="c-switch">
      <input v-model="toggleMode" type="checkbox" />
      <span class="c-slider"></span>
    </label>
    <div class="c-nav-links">
      <nuxt-link to="/about" class="c-nav-links__links">About</nuxt-link>
      <nuxt-link to="/store" class="c-nav-links__links">Merch Store</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMode: false
    };
  },

  watch: {
    toggleMode(newValue) {
      this.$emit("changeToggle", newValue);
    }
  }
};
</script>
