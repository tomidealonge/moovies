<template>
  <div class="c-overlay">
    <WordsComponent headerColor="black" position="header" :words="bodyWords" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyWords: [
        "Major J Gatsby",
        "The Green Goblin",
        "The Sopranos",
        "The Irishman",
        "Spiderman",
        "Khal Drogo"
      ]
    };
  }
};
</script>
