<template>
  <div class="c-movie">
    <div
      @mouseenter="hoverPreview($event)"
      @mouseleave="previewHoverOut($event)"
      class="c-movie-preview"
    >
      <div class="c-movie-preview__gif">
        <img
          :src="require(`@/assets/gifs/${movie.gif}.gif`)"
          :alt="movie.title"
        />
      </div>
      <div @click="openCinema" class="c-movie-preview-icon">
        <div class="c-movie-preview-icon__inner"></div>
      </div>
      <ShareNetwork
        class="c-movie-tweet-icon"
        network="twitter"
        :title="
          `I just saw this scene from ${movie.title} on moovies, check it out`
        "
        url="https://moovies.tomidealonge.com"
      >
        <div class="c-movie-tweet-icon__inner"></div>
      </ShareNetwork>
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
          gif: "blacklist",
          title: "The Blacklist",
          description:
            "I Had Bullets, He Had Words. But When He Was Done Talking For The First Time I Truly Understood Which Of Those Was More Powerful.",
          author: "Raymond Reddington",
          video: "https://www.youtube.com/watch?v=rDuetklFtDQ"
        };
      }
    }
  },

  computed: {
    siteURL() {
      return process.env.SITE_URL;
    }
  },

  data() {
    return {
      cinemaOpen: false,
      words: ["Tomide", "Joshua", "The Irishman", "Spiderman", "Khal Drogo"]
    };
  },

  methods: {
    hoverPreview(e) {
      e.target.classList.add("--hover");
    },

    previewHoverOut(e) {
      e.target.classList.remove("--hover");
    },

    openCinema() {
      this.$emit("openCinema");
    }
  }
};
</script>
