<template>
  <div
    ref="wordsWrapper"
    class="c-words"
    :class="[`--${position}`, headerColor]"
  >
    <marquee-text
      :repeat="5"
      :duration="50"
      :reverse="index % 2 === 0 ? true : false"
      v-for="(words, index) in words"
      :key="index"
    >
      {{ words }}
    </marquee-text>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      default: []
    },
    position: {
      type: String,
      default: ""
    },
    headerColor: {
      type: String,
      default: ""
    }
  }
};
</script>
