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
            size="27px"
            @click="redirection(social.LinkedIn)"
            class="icon"
          />
          <Icon
            name="bi:github"
            size="27px"
            @click="redirection(social.GitHub)"
            class="icon"
          />
          <Icon
            name="cib:hackerrank"
            size="27px"
            @click="redirection(social.Hackerrank)"
            class="icon"
          />
        </div>
      </div>
      <div class="separador"></div>
      <div class="info-2">
        <div class="email">
          <h4>email</h4>
          <p>{{ info.email }}</p>
        </div>
        <div class="location">
          <h4>location</h4>
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
  name: "Jesner Wilian Ramirez Cueva",
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
  background-color: var(--backgroud-cards);
  border-radius: 20px;
  height: 160px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  letter-spacing: 0.8px;
  color: white;
  .photo {
    position: relative;
    top: -70px;
    width: 150px;
    height: 150px;
    border: 4px var(--backgroud-cards) solid;
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
      & p {
        font-weight: 200;
        margin-bottom: 8px;
        color: var(--color-text);
      }
      .social-icon {
        display: flex;
        gap: 10px;
        .icon {
          cursor: pointer;
          transition: 0.3s;
          color: var(--color-text);
          &:hover {
            color: rgb(254, 32, 32);
          }
        }
      }
    }
    .separador {
      width: 1px;
      background-color: var(--color-separator);
      margin: 0 25px;
    }
    .info-2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & :is(.email, .location) {
        & h4 {
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 5px;
          color: var(--color-text);
        }
        & p {
          font-weight: 200;
          color: white;
        }
      }
    }
  }
}
</style>
