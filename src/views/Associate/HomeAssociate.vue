<template>
  <main>
    <header>
      <div id="container-title" class="panel is-primary">
        <router-link to="/" id="logo" class="message_image">
          <img src="../../assets/Logo.png" alt="Logo do animal-save" />
        </router-link>
        <div id="dropdown" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Minha conta </a>
          <div class="navbar-dropdown">
            <a @click="clickUpdate" class="navbar-item"> Meus dados </a>
            <router-link to="/">
              <a id="sair" class="navbar-item"> Sair </a>
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <section class="container-content">
      <section class="container-stamp">
        <div class="card-silver">
          <div class="card-content">
            <div class="content-stamp">
              <div class="stamp-header">
                <h1>Silver</h1>
              </div>
              <div class="content-button-price">
                <button class="button-silver-price">R$ 9,90</button>
              </div>
              <div class="stamp-text">
                <p>• Lorem, ipsum dolor sit amet</p>
                <p>• Perspiciatis ipsa ipsum suscipit</p>
              </div>
              <div class="content-button-sign">
                <button class="button-sign">Assinar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-gold">
          <div class="card-content">
            <div class="content-stamp">
              <div class="stamp-header">
                <h1>Gold</h1>
              </div>
              <div class="content-button-price">
                <button class="button-gold-price">R$ 49,90</button>
              </div>
              <div class="stamp-text">
                <p>• Lorem, ipsum dolor sit amet</p>
                <p>• Perspiciatis ipsa ipsum suscipit</p>
                <p>• Lorem, ipsum dolor sit amet</p>
                <p>• Perspiciatis ipsa ipsum suscipit</p>
              </div>
              <div class="content-button-sign">
                <button class="button-sign">Assinar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-diamond">
          <div class="card-content">
            <div class="content-stamp">
              <div class="stamp-header">
                <h1>Diamond</h1>
              </div>
              <div class="content-button-price">
                <button class="button-diamond-price">R$ 99,90</button>
              </div>
              <div class="stamp-text">
                <p>• Lorem, ipsum dolor sit amet</p>
                <p>• Perspiciatis ipsa ipsum suscipit</p>
                <p>• Lorem, ipsum dolor sit amet</p>
                <p>• Perspiciatis ipsa ipsum suscipit</p>
                <p>• Lorem, ipsum dolor sit amet</p>
                <p>• Perspiciatis ipsa ipsum suscipit</p>
                <p>• Lorem, ipsum dolor sit amet</p>
              </div>
              <div class="content-button-sign">
                <button class="button-sign">Assinar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script lang="ts" scoped>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import router from "@/router";

@Component
export default class HomeAssociate extends Vue {
  public clickUpdate() {
    var id = Number(this.$route.params.id);
    router.push({ path: `/associado/update/${id}` });
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ebe3cc;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

#container-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

#logo {
  background-color: #ebe3cc;
  border: none;
  transition: transform 0.2s;
  cursor: pointer;
}

#dropdown {
  font-weight: 600;
  font-size: 20px;
  color: black;
}

.navbar-item {
  font-size: 16px;
}

#sair {
  color: red;
}

#title {
  font-size: 24px;
  background-color: hsl(147, 100%, 41%);
}

#content {
  width: 100%;
}

.panel-tabs {
  display: flex;
  font-size: 24px;
  font-weight: 500;
}

span {
  color: black;
}

.panel-tabs a.is-active span {
  color: hsl(113, 100%, 41%);
}

.container-content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-stamp {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  gap: 40px;
}

.card-silver {
  height: 400px;
  width: 300px;
  border-radius: 5px;
}

.card-gold {
  height: 480px;
  width: 300px;
  border-radius: 5px;
}

.card-diamond {
  height: 580px;
  width: 300px;
  border-radius: 5px;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
}

.stamp-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 32px;
  font-weight: 600;
  color: black;
}

.content-button-price {
  padding-top: 20px;
  padding-bottom: 30px;
}

.button-silver-price {
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 300px;
  height: 80px;
  border-radius: 70px 0 0 70px;
  margin-left: -55px;
  border: 4px solid #c9c8c8;

  font-family: "Poppins";
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  color: rgb(92, 92, 92);
  background: linear-gradient(to right, rgb(255, 255, 255), transparent);
}

.stamp-text {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;

  font-size: 16px;
  color: black;
}

.content-button-sign {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 65px;
}

.button-sign {
  width: 220px;
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-size: 24px;
  font-weight: 600;
  color: #002d4c;
}

.button-sign:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: rgb(103, 193, 103);
}

.button-gold-price {
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 300px;
  height: 80px;
  border-radius: 70px 0 0 70px;
  margin-left: -55px;
  border: 4px solid rgb(255, 196, 0);

  font-family: "Poppins";
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  color: rgb(92, 92, 92);
  background: linear-gradient(to right, rgb(255, 255, 255), transparent);
}

.button-diamond-price {
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 300px;
  height: 80px;
  border-radius: 70px 0 0 70px;
  margin-left: -55px;
  border: 4px solid #0c8da6;

  font-family: "Poppins";
  font-style: normal;
  font-size: 36px;
  font-weight: 600;
  color: rgb(92, 92, 92);
  background: linear-gradient(to right, rgb(255, 255, 255), transparent);
}

.card-silver {
  background-color: #c9c8c8;
}

.card-gold {
  background: rgb(255, 196, 0);
}

.card-diamond {
  background-color: #0c8da6;
}

@media (max-width: 1057px) {
  header {
    padding-top: 60px;
  }

  .container-stamp {
    margin-top: 900px;
    flex-direction: column;
  }
}
</style>
