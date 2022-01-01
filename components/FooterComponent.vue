<template>
  <div class="c-footer">
    <div class="c-end-note">
      <div class="c-end-note__heading">
        You've gotten to the end of this experience.
      </div>
      <div class="c-end-note__sub-text">Made with ❤️ from Lagos, Nigeria</div>
    </div>
    <div class="c-cred">
      <div class="c-cred__heading">
        Say <span class="red-underline">hello</span> to the creators
      </div>
      <div class="creators">
        <div class="creators__creator">
          <div class="creators__name">Designed by Josh</div>
          <a
            @mouseover="setActiveLinkJosh($event)"
            @mouseleave="removeInactiveLinkJosh"
            href="https://www.linkedin.com/in/joshua-oladiti-217286160/"
            target="_blank"
            class="creators__social-link --linkedin josh"
          ></a>
          <a
            @mouseover="setActiveLinkJosh($event)"
            @mouseleave="removeInactiveLinkJosh"
            href="https://www.behance.net/oladitij37378f"
            target="_blank"
            class="creators__social-link josh --behance"
          ></a>
          <a
            @mouseover="setActiveLinkJosh($event)"
            @mouseleave="removeInactiveLinkJosh"
            href="https://dribbble.com/joshuaoladiti"
            target="_blank"
            class="creators__social-link josh --dribble"
          ></a>
          <a
            @mouseover="setActiveLinkJosh($event)"
            @mouseleave="removeInactiveLinkJosh"
            href="https://twitter.com/__el_josh"
            target="_blank"
            class="creators__social-link josh --twitter"
          ></a>
        </div>
        <div class="creators__creator">
          <div class="creators__name">Developed by Tomide</div>
          <a
            @mouseover="setActiveLinkTomide($event)"
            @mouseleave="removeInactiveLinkTomide"
            href="https://www.linkedin.com/in/akintomide-alonge-6a2a7013b/"
            target="_blank"
            class="creators__social-link tomide --linkedin"
          ></a>
          <a
            @mouseover="setActiveLinkTomide($event)"
            @mouseleave="removeInactiveLinkTomide"
            href="https://twitter.com/tomidealonge"
            target="_blank"
            class="creators__social-link tomide --twitter"
          ></a>
          <a
            @mouseover="setActiveLinkTomide($event)"
            @mouseleave="removeInactiveLinkTomide"
            href="https://github.com/tomidealonge"
            target="_blank"
            class="creators__social-link tomide --github"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveLinkTomide(e) {
      const links = document.querySelectorAll(".tomide");
      links.forEach(link => link.classList.add("--inactive"));
      e.target.classList.remove("--inactive");
    },
    setActiveLinkJosh(e) {
      const links = document.querySelectorAll(".josh");
      links.forEach(link => link.classList.add("--inactive"));
      e.target.classList.remove("--inactive");
    },
    removeInactiveLinkTomide(e) {
      const links = document.querySelectorAll(".tomide");
      links.forEach(link => link.classList.remove("--inactive"));
    },
    removeInactiveLinkJosh(e) {
      const links = document.querySelectorAll(".josh");
      links.forEach(link => link.classList.remove("--inactive"));
    }
  }
};
</script>
