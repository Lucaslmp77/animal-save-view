<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/">
          <a class="navbar-item">
            <img src="../../assets/Logo.png" />
          </a>
        </router-link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
          :class="burguerClass"
          @click="toggleBurguer"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample columns is-5"
        class="navbar-menu"
        :class="menuClass"
      >
        <div class="navbar-end">
          <router-link to="/"> Home </router-link>
          <a @click="scrollToAboutUs"> Quem Somos </a>
          <a @click="scrollToPartners"> Parceiros </a>
          <router-link to="/register-occurences">
            Registro Publico
          </router-link>
        </div>
        <div class="navbar-end" id="divTres">
          <div class="navbar-item" id="divDois">
            <div class="buttons">
              <router-link to="/register">
                <button>Registrar</button>
              </router-link>
              <router-link to="/login">
                <button>Entrar</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Home />
    <div id="about-us-section">
      <AboutUs />
    </div>
    <div id="partners-section">
      <Partners />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Home from "@/views/LandingPage/Home.vue";
import AboutUs from "@/views/LandingPage/AboutUs.vue";
import Partners from "@/views/LandingPage/Partners.vue";
import Footer from "@/views/LandingPage/Footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home,
    AboutUs,
    Partners,
    Footer,
  },
})
export default class Header extends Vue {
  burguerActive = false;

  get burguerClass(): string {
    return this.burguerActive ? "navbar-burger is-active" : "navbar-burguer";
  }

  get menuClass(): string {
    return this.burguerActive ? "navbar-menu is-active" : "navbar-menu";
  }

  toggleBurguer(): void {
    this.burguerActive = !this.burguerActive;
  }

  scrollToAboutUs(event: MouseEvent): void {
    event.preventDefault();
    const target = document.querySelector("#about-us-section") as HTMLElement;
    target.scrollIntoView({ behavior: "smooth" });
  }

  scrollToPartners(event: MouseEvent): void {
    event.preventDefault();
    const target = document.querySelector("#partners-section") as HTMLElement;
    target.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
<style lang="scss" scoped>
@import "~bulma/bulma.sass";
@import url("https://fonts.googleapis.com/css2?family=Concert+One&family=Poppins:ital,wght@0,200;0,400;0,600;1,100&display=swap");

/*
  #EBE3CC - Branco quase rosa
  #002D4C - Azul escuro cor da logo
  #FBBD08 - Amarelo queimado
*/

nav {
  padding: 15px 20px;
  background-color: #ebe3cc !important;

  .navbar-item {
    img {
      max-height: 3em;
      width: 200px;
    }
  }

  h1 {
    font-size: 26px;
    font-weight: 800;
    color: black;
  }

  .navbar-end {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    gap: 70px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 33px;
  }

  a {
    font-weight: bold;
    color: #002d4c;

    &.router-link-exact-active {
      color: #fbbd08;
    }
  }

  .navbar-end {
    .navbar-item {
      .buttons {
        gap: 30px;
      }
    }

    button {
      background: #ebe3cc !important;
      border-radius: 15px;
      border: 3px solid #002d4c;
      width: 132px;
      height: 42px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 33px;
      color: #002d4c;
      cursor: pointer;
    }

    .buttons :hover {
      transform: scale(1.05);
      transition: all 0.2s;
      cursor: pointer;
    }
  }
}

@media (max-width: 1024px) {
  nav {
    padding: 0px;
    background-color: #ebe3cc !important;

    .navbar-item {
      img {
        max-height: 3em;
        width: 200px;
      }
    }

    h1 {
      font-size: 26px;
      font-weight: 800;
      color: black;
    }

    .navbar-menu {
      padding: 0;
      background-color: #ebe3cc;
    }

    .navbar-end {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 1em;
      margin-top: 1.2em;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 200;
      font-size: 1.4em;
      line-height: 1em;
      background-color: #ebe3cc !important;
    }

    a {
      font-weight: bold;
      color: #002d4c;

      &.router-link-exact-active {
        color: #fbbd08;
      }
    }

    .navbar-end {
      .navbar-item {
        .buttons {
          gap: 30px;
        }
      }

      button {
        background: #ebe3cc !important;
        border-radius: 15px;
        border: 3px solid #002d4c;
        width: 132px;
        height: 42px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        color: #002d4c;
        cursor: pointer;
        margin-bottom: 2em;
      }
    }
  }
}
</style>
