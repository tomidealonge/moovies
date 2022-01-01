<template>
  <div class="c-movie">
    <div class="c-movie-preview">
      <div class="c-movie-preview-icon">
        <div class="c-movie-preview-icon__inner"></div>
      </div>
      <div class="c-movie-tweet-icon">
        <div class="c-movie-tweet-icon__inner"></div>
      </div>
      <div class="c-movie-preview__cover"></div>
    </div>
    <div class="c-movie-text-block">
      <h1 class="c-movie-text-block__title">{{ movie.title }}</h1>
      <p class="c-movie-text-block__body">
        {{ movie.description }}
        <br />
        <br />
        <em>-{{ movie.author }}</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {
        return {
          title: "The Blacklist",
          description:
            "I Had Bullets, He Had Words. But When He Was Done Talking For The First Time I Truly Understood Which Of Those Was More Powerful.",
          author: "Raymond Reddington"
        };
      }
    }
  }
};
</script>
