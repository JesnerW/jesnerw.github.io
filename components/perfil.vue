<template>
  <div class="perfil">
    <div class="photo">
      <img :src="perfilIMG" alt="" />
    </div>
    <div class="info">
      <div class="info-1">
        <h1>{{ info.name }}</h1>
        <p>{{ info.profession }}</p>
        <div class="social-icon">
          <Icon
            name="uiw:linkedin"
            size="25px"
            @click="redirection(social.LinkedIn)"
            class="icon"
          />
          <Icon
            name="bi:github"
            size="25px"
            @click="redirection(social.GitHub)"
            class="icon"
          />
          <Icon
            name="cib:hackerrank"
            size="25px"
            @click="redirection(social.Hackerrank)"
            class="icon"
          />
        </div>
      </div>
      <div class="separador"></div>
      <div class="info-2">
        <div class="email">
          <h4>Correo electrónico</h4>
          <p>{{ info.email }}</p>
        </div>
        <div class="location">
          <h4>Ubicación</h4>
          <p>{{ info.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import perfilIMG from "@/assets/photo-perfil.jpg";
const social = {
  LinkedIn: "https://www.linkedin.com/in/jesnerw",
  GitHub: "https://github.com/JesnerW",
  Hackerrank: "https://www.hackerrank.com/profile/jesner631",
};

const info = {
  name: "Jesner Ramirez Cueva",
  profession: "Full Stack Developer",
  email: "jesner631@gmail.com",
  location: "Peru, Barranca",
};

function redirection(url: string) {
  window.open(url, "_blank");
}
</script>

<style scoped>
.perfil {
  display: flex;
  gap: 20px;
  background-color: var(--background-cards);
  border-radius: 20px;
  height: 160px;
  width: 100%;
  padding: 30px 30px;
  box-sizing: border-box;
  letter-spacing: 0.8px;
  .photo {
    position: relative;
    top: -70px;
    width: 150px;
    height: 150px;
    border: 4px var(--background-cards) solid;
    overflow: hidden;
    border-radius: 20%;
    & img {
      width: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 178px);
    .info-1 {
      flex: 1;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: var(--color-text);
      & h1 {
        font-family: var(--family-text);
        color: var(--color-name);
        font-weight: 700;
        font-size: 40px;
        text-transform: uppercase;
        line-height: 0.8;
      }
      & p {
        font-size: 20px;
        font-family: var(--family-text);
        color: var(--color-subtitle-perfil);
        font-weight: 300;
        margin-top: -4px;
      }
      .social-icon {
        display: flex;
        gap: 10px;
        .icon {
          cursor: pointer;
          transition: 0.3s;
          color: var(--color-social);
          &:hover {
            color: var(--color-social-hover);
          }
        }
      }
    }
    .separador {
      width: 1px;
      background-color: var(--color-line-separator-perfil);
      margin: 0 25px;
    }
    .info-2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & :is(.email, .location) {
        & h4 {
          font-size: 20px;
          margin-bottom: 4px;
          color: var(--color-subtitle-perfil);
          font-family: var(--family-text);
          text-transform: uppercase;
          font-weight: 400;
          line-height: 0.9;
        }
        & p {
          font-size: 20px;
          color: var(--color-text-perfil);
          font-family: var(--family-text);
          font-weight: 300;
          line-height: 0.9;
        }
      }
    }
  }
}
</style>
