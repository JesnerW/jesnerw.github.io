<template>
  <div class="perfil">
    <div class="photo">
      <NuxtImg
        src="/photo-perfil.jpg"
        width="150"
        height="150"
        alt="foto de perfil"
      />
    </div>
    <div class="info">
      <div class="info-1">
        <h1>{{ name }}</h1>
        <p>{{ EN ? professionEN : professionES }}</p>
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
          <p class="subtitle">{{ EN ? "E-mail" : "Correo electrónico" }}</p>
          <p>{{ email }}</p>
        </div>
        <div class="location">
          <p class="subtitle">{{ EN ? "Location" : "Ubicación" }}</p>
          <p>{{ location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const EN = ref(true);
const props = defineProps(["Language"]);
//Data
const name = ref("Jesner Ramirez Cueva");
const email = ref("jesner631@gmail.com");
const location = ref("Peru");
const professionES = ref("Desarrollador Full Stack");
const professionEN = ref("Full Stack Developer");

const social = {
  LinkedIn: "https://www.linkedin.com/in/jesnerw",
  GitHub: "https://github.com/JesnerW",
  Hackerrank: "https://www.hackerrank.com/profile/jesner631",
};
watch(props, () => {
  EN.value = props.Language;
});
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
  box-shadow: 1px 2px 4px 0px var(--shadow-cards);

  .photo {
    position: relative;
    top: -70px;
    width: 150px;
    height: 150px;
    border: 4px var(--background-cards) solid;
    box-shadow: 0px -3px 10px -2px var(--shadow-cards);
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
        color: var(--name-perfil);
        font-weight: 700;
        font-size: var(--font-size-h1);
        text-transform: uppercase;
        line-height: 0.8;
      }
      & p {
        font-size: var(--font-size-p-stack);
        font-family: var(--family-text);
        color: var(--subtitle-text-perfil);
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
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
        .subtitle {
          font-size: var(--font-size-h4);
          margin-bottom: 4px;
          color: var(--subtitle-perfil);
          font-family: var(--family-text);
          text-transform: uppercase;
          font-weight: 400;
          line-height: 0.9;
        }
        & p {
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
          font-size: var(--font-size-p-h4);
          color: var(--subtitle-text-perfil);
          font-family: var(--family-text);
          font-weight: 300;
          line-height: 0.9;
        }
      }
    }
  }
}
@media (width < 1060px) {
  .perfil {
    .info {
      .info-2 {
        flex: 0.8;
      }
    }
  }
}

@media (width < 992px) {
  .perfil {
    flex-direction: column;
    align-items: center;
    height: auto;
    .info {
      gap: 20px;
      margin-top: -70px;
      flex-direction: column;
      width: 100%;
      .info-1 {
        text-align: center;
        align-items: center;
        gap: 15px;
      }
      .info-2 {
        gap: 15px;
      }
      .separador {
        width: 100%;
        height: 1px;
        margin: 0px;
      }
    }
  }
}
</style>
