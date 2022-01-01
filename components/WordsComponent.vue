<template>
  <div
    ref="wordsWrapper"
    class="c-words"
    :class="[`--${position}`, headerColor]"
  ></div>
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
  },

  methods: {
    compileWords() {
      const wordsWrapper = this.$refs.wordsWrapper;
      this.words.forEach(word => {
        const div = document.createElement("div");
        div.className = "c-words__word";
        div.textContent = word;
        wordsWrapper.append(div);
      });
    }
  },

  mounted() {
    this.compileWords();
  }
};
</script>
