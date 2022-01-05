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
        "Tomide",
        "Joshua",
        "The Irishman",
        "Wakanda",
        "Khal Drogo",
        "Last Kingdom",
        "Superman",
        "End Game",
        "Spiderman"
      ]
    };
  }
};
</script>
