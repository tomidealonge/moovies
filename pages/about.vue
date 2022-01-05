<template>
  <div class="c-about">
    <NavComponent :otherPages="true" />
    <main class="c-main">
      <WordsComponent :words="bodyWords" />
      <div class="c-main__inner">
        <div class="c-main__main-text">
          So might we suggest a trusty classic?
        </div>
        <div class="c-main__sub-text">
          One of the many great films—from comedies to dramas and thrillers—that
          formed the foundation of modern cinema and has stood the test of time.
          The kind of film that might earn you some pub trivia points in the
          future, since pub trivia will come back soon, and you're going to need
          to brush up. Although Netflix’s offering of classics is small in
          number, it is mighty in cultural significance. Our main aim is
          bringing bringing back to you the best scenes from your favorite
          movies, series & TV shows, you know, that nostalgic feeling.
        </div>
      </div>
    </main>
    <FooterComponent />
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
