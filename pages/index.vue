<template>
  <div class="c-home">
    <CinemaComponent :openCinema="openCinema" :video="chosenVideo" @toggleCinema="toggleCinema" />
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
        </div>
      </div>
    </header>
    <main class="c-main">
      <WordsComponent @openCinema="toggleCinema" :words="bodyWords" />
      <MovieComponent v-for="movie in movies" :key="movie.title" @openCinema="toggleCinema(movie)" :movie="movie" />
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
        pagination: false,
        breakpoints: {
          768: {
            padding: "10%",
            gap: "0px",
            fixedWidth: "100%"
          }
        }
      },
      toggleState: "--black",
      movies: [
        {
          gif: "django",
          video: 'https://www.youtube.com/embed/B9tF3KgEdAI',
          title: "Django",
          description:
            "[pulls out a second revolver] I count two guns, n*gger.",
          author: "Django"
        },
        {
          gif: "bane",
          video: 'https://www.youtube.com/embed/rDuetklFtDQ',
          title: "Dark Knight Rises",
          description:
            "Oh, you think darkness is your ally. But you merely adopted the dark; I was born in it, molded by it. I didn't see the light until I was already a man, by then it was nothing to me but blinding! The shadows betray you because they belong to me.",
          author: "Bane"
        },
        {
          gif: "got",
          title: "Game of Thrones",
          video:"https://www.youtube.com/embed/TCcDm2fGKXI",
          description:
            "A day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth. And you will know the debt is paid.",
          author: "Tyrone Lannister"
        },
        {
          gif: "scarface",
          video: 'https://www.youtube.com/embed/a_z4IuxAqpE',
          title: "Scarface",
          description:
            "Say hello to my little friend",
          author: "Tony Montana"
        },
        {
          gif: "godfather",
          title: "The Godfather",
          video:'https://www.youtube.com/embed/fmX2VzsB25s',
          description:
            "I'm gonna make him an offer he can't refuse",
          author: "Don Vito Corleone"
        },
        {
          gif: "titanic",
          title: "The Titanic",
          video:'https://www.youtube.com/embed/9KQm_7Lpt5E',
          description:
            "I'm flying, Jack",
          author: "Rose"
        },
        {
          gif: "notebook",
          title: "The Notebook",
          video:'https://www.youtube.com/embed/E1I0hAxGFXw',
          description:
            "So it's not gonna be easy. It's gonna be really hard. We're gonna have to work at this every day, but I want to do that because I want you. I want all of you, for ever, you and me, every day.",
          author: "Noah"
        },
        {
          gif: "endgame",
          title: "Avengers: Endgame",
          video:'https://www.youtube.com/embed/TWB31WFomz4',
          description:
            "And I am Iron Man",
          author: "Tony"
        },
        {
          gif: "vikings",
          title: "Vikings",
          video:'https://www.youtube.com/embed/pGm72WAsFfE',
          description:
            "What kind of King abandons his people? What kind of father abandons his sons? So... WHO wants to be King? Don’t you know how this works? If you want to be King, you must kill me.",
          author: "Ragnar"
        },
        {
          gif: "hsm",
          title: "High School Musical",
          video:'https://www.youtube.com/embed/4cO5tkkUSB8',
          description:
            "No, Here's to Right now",
          author: "Troy"
        },
        {
          gif: "originals",
          title: "The originals",
          video:'https://www.youtube.com/embed/8BDsO3jM8K0',
          description:
            "Lets end the charade shall we, Vampires of New Orleans, do recall that I am an original. A hybrid. I cannot be killed. Eternity is an awfully long time. How long you think Marcel will stay in power? What if, one of you lot, were to release me knowing that I would be eternally in your debt.",
          author: "Klaus"
        },
      ],
      headerWords: [
        "Tomide",
        "Joshua",
        "The Irishman",
        "Wakanda",
        "Khal Drogo",
        "Last Kingdom",
        "Superman",
        "End Game",
        "Spiderman"
      ],
      bodyWords: [
        "Game of Thrones",
        "Peaky Blinders",
        "The Good Doctor",
        "The Boondocks",
        "The Dark Knight Rises",
        "Last Kingdom",
        "Wakanda",
        "Superman",
        "End Game",
        "Spiderman"
      ],
      chosenVideo: ''
    };
  },

  computed: {
    mediaQuery() {
      return window.matchMedia("(max-width: 600px)").matches;
    }
  },

  methods: {
    toggleCinema(movie = {}) {
      this.openCinema = !this.openCinema;
      this.chosenVideo = movie?.video
    },
    toggleMode(mode) {
      mode ? (this.toggleState = "--red") : (this.toggleState = "--black");
    }
  }
};
</script>
