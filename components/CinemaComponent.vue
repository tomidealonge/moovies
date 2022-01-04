<template>
  <div class="c-cinema" :class="openCinema ? '--open' : ''">
    <WordsComponent headerColor="black" position="header" :words="words" />
    <div @click="closeCinema" class="c-cinema__close"></div>
    <ShareNetwork
      class="c-cinema-tweet-icon"
      network="twitter"
      :title="`I just saw this scene of ${title} from moovies, check it out`"
      url="https://testlink.com"
    >
      <div class="c-cinema-tweet-icon__inner"></div>
    </ShareNetwork>
    <div ref="video" class="c-cinema__video">
      <iframe :src="video"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openCinema: {
      type: Boolean,
      default: false
    },
    video: {
      type: String,
      default: "https://www.youtube.com/embed/QbFQ9bR_IbE"
    },
    title: {
      type: String,
      default: ""
    }
  },

  watch: {
    openCinema(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.$refs.video.classList.add("--open");
        }, 200);
        return;
      } else {
        this.$refs.video.classList.remove("--open");
      }
    }
  },

  data() {
    return {
      words: ["Tomide", "Joshua", "The Irishman", "Spiderman", "Khal Drogo"]
    };
  },

  methods: {
    closeCinema() {
      this.$emit("toggleCinema");
    }
  }
};
</script>
