<template>
  <div class="c-nav" :class="otherPages ? '--other-pages' : ''">
    <nuxt-link
      to="/"
      v-if="otherPages"
      class="c-nav__logo --other-pages"
    ></nuxt-link>
    <nuxt-link
      to="/"
      v-else
      class="c-nav__logo"
      :class="toggleMode ? '--red' : '--black'"
    ></nuxt-link>
    <label v-if="!otherPages" class="c-switch">
      <input v-model="toggleMode" type="checkbox" />
      <span class="c-slider"></span>
    </label>
    <div class="c-nav-links">
      <nuxt-link
        to="/about"
        class="c-nav-links__links"
        :class="otherPages ? '--other-pages' : ''"
        >About</nuxt-link
      >
      <nuxt-link
        v-if="false"
        to="/store"
        class="c-nav-links__links"
        :class="otherPages ? '--other-pages' : ''"
        >Merch Store</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    otherPages: {
      type: Boolean,
      default: false
    }
  },
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
