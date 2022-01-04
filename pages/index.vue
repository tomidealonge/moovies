<template>
  <div class="c-home">
    <CinemaComponent :openCinema="openCinema" @toggleCinema="toggleCinema" />
    <NavComponent @changeToggle="toggleMode" />
    <header class="c-header">
      <WordsComponent
        :words="headerWords"
        position="header"
        :headerColor="toggleState"
      />
      <div class="c-header__inner" :class="toggleState">
        <div class="c-hero">
          <div class="c-hero__title">
            Experience
            <br />
            <span class="c-red-text">Nostalgia</span>
          </div>
          <p class="c-hero__subtext">
            Bringing back the best scenes from your favorite movies, series & TV
            shows
          </p>
        </div>
        <div class="c-movie-stripe">
          <Splide class="c-movie-stripe__holder" :options="options">
            <SplideSlide>
              <div class="c-movie-stripe__movie --got">
                <div class="c-movie-stripe__movie-preview">
                  <img src="@/assets/gifs/bane.gif" alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="c-movie-stripe__movie --blacklist">
                <div class="c-movie-stripe__movie-preview">
                  <img src="@/assets/gifs/ned-stack.gif" alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="c-movie-stripe__movie --great-gatsby">
                <div class="c-movie-stripe__movie-preview">
                  <img src="@/assets/gifs/originals.gif" alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="c-movie-stripe__movie --got">
                <div class="c-movie-stripe__movie-preview">
                  <img src="@/assets/gifs/nairobi.gif" alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="c-movie-stripe__movie --power">
                <div class="c-movie-stripe__movie-preview">
                  <img src="@/assets/gifs/ragnar.gif" alt="" />
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <!-- <div class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide c-movie-stripe__movie --got">
                  <div class="c-movie-stripe__movie-preview"></div>
                  <div class="c-movie-stripe__movie-cover"></div>
                </li>
                <li class="splide__slide c-movie-stripe__movie --got">
                  <div class="c-movie-stripe__movie-preview"></div>
                  <div class="c-movie-stripe__movie-cover"></div>
                </li>
                <li class="splide__slide c-movie-stripe__movie --got">
                  <div class="c-movie-stripe__movie-preview"></div>
                  <div class="c-movie-stripe__movie-cover"></div>
                </li>
                <li class="splide__slide c-movie-stripe__movie --got">
                  <div class="c-movie-stripe__movie-preview"></div>
                  <div class="c-movie-stripe__movie-cover"></div>
                </li>
                <li class="splide__slide c-movie-stripe__movie --got">
                  <div class="c-movie-stripe__movie-preview"></div>
                  <div class="c-movie-stripe__movie-cover"></div>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </header>
    <main class="c-main">
      <WordsComponent @openCinema="toggleCinema" :words="bodyWords" />
      <MovieComponent @openCinema="toggleCinema" :movie="movie[0]" />
      <MovieComponent @openCinema="toggleCinema" :movie="movie[1]" />
      <MovieComponent @openCinema="toggleCinema" :movie="movie[2]" />
      <MovieComponent @openCinema="toggleCinema" :movie="movie[3]" />
      <MovieComponent @openCinema="toggleCinema" :movie="movie[4]" />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openCinema: false,
      options: {
        type: "loop",
        focus: "center",
        autoplay: true,
        width: "100%",
        padding: "30%",
        gap: "4rem",
        interval: 4000,
        throttle: 500,
        updateOnMove: true,
        arrows: false,
        pagination: false
      },
      toggleState: "--black",
      movie: [
        {
          gif: "blacklist",
          title: "The Blacklist",
          description:
            "I Had Bullets, He Had Words. But When He Was Done Talking For The First Time I Truly Understood Which Of Those Was More Powerful.",
          author: "Raymond Reddington"
        },
        {
          gif: "got",
          title: "Dark Knight Rises",
          description:
            "Oh, you think darkness is your ally. But you merely adopted the dark; I was born in it, molded by it. I didn't see the light until I was already a man, by then it was nothing to me but blinding! The shadows betray you because they belong to me.",
          author: "Bane"
        },
        {
          gif: "great-gatsby",
          title: "Game of Thrones",
          description:
            "A day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth. And you will know the debt is paid.",
          author: "Tyrone Lannister"
        },
        {
          gif: "got",
          title: "Peaky Blinders",
          description:
            "Men don’t have the strategic intelligence to conduct a war between families. Men are less good at keeping secrets out of their lies.",
          author: "Tommy Shelby"
        },
        {
          gif: "blacklist",
          title: "The Great Gatsby",
          description:
            "Let us learn to show our friendship for a man when he is alive and not after he is dead.",
          author: "Gatsby"
        }
      ],
      headerWords: [
        "Tomide",
        "Joshua",
        "The Irishman",
        "Spiderman",
        "Khal Drogo"
      ],
      bodyWords: [
        "Game of Thrones",
        "Peaky Blinders",
        "The Good Doctor",
        "The Boondocks",
        "The Dark Knight Rises"
      ]
    };
  },

  methods: {
    toggleCinema() {
      this.openCinema = !this.openCinema;
    },
    toggleMode(mode) {
      mode ? (this.toggleState = "--red") : (this.toggleState = "--black");
    }
  }
};
</script>
