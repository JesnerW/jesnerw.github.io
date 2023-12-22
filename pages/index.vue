<template>
  <main @mousemove="trackCursor">
    <div class="cursor-container">
      <div
        class="cursor-light"
        :style="{
          left: cursorX + 'px',
          top: cursorY + 'px',
          opacity: cursorVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }"
      ></div>
    </div>

    <div class="options">
      <div class="language linea">
        <div
          class="button-left"
          :class="{ active: !EN && !loading }"
          @click="languageMode('ES')"
        >
          <Icon name="circle-flags:es-variant" size="27px" class="icon" />
        </div>
        <div
          class="button-right"
          :class="{ active: EN && !loading }"
          @click="languageMode('EN')"
        >
          <Icon name="circle-flags:us-um" size="27px" class="icon" />
        </div>
      </div>
      <div class="theme linea">
        <div
          class="button-left"
          :class="{
            active: !$colorMode.unknown && $colorMode.value === 'light',
          }"
          @click="themeMode('light')"
        >
          <Icon name="circum:sun" size="27px" class="icon-light" />
        </div>
        <div
          class="button-right"
          :class="{
            active: !$colorMode.unknown && $colorMode.value === 'dark',
          }"
          @click="themeMode('dark')"
        >
          <Icon name="ic:baseline-dark-mode" size="27px" class="icon-dark" />
        </div>
      </div>
    </div>
    <div class="container">
      <Perfil :-language="EN" />
      <div class="content">
        <Menu
          class="menu"
          @about="about"
          @contact="contact"
          @experiencia="experiencia"
          @projects="projects"
          :-language="EN"
        />
        <ContenidoAbout
          v-show="showContent.about"
          class="contenido"
          :-language="EN"
        />
        <ContenidoExperience
          v-show="showContent.experience"
          class="contenido"
          :-language="EN"
        />
        <ContenidoProjects
          v-show="showContent.projects"
          class="contenido"
          :-language="EN"
        />
        <ContenidoContact
          v-show="showContent.contact"
          class="contenido"
          :-language="EN"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const EN = ref(); //mode english
const loading = ref(true);
const colorMode = useColorMode();
const cursorX = ref(0);
const cursorY = ref(0);
const cursorVisible = ref(false);

const trackCursor = (event: MouseEvent) => {
  if (window.innerWidth < 800) {
    cursorVisible.value = false;
  } else {
    cursorX.value = event.clientX;
    cursorY.value = event.clientY;
    cursorVisible.value = true;
  }
};
onMounted(() => {
  const Language = window.localStorage.getItem("LANG");
  if (!Language) {
    EN.value = true;
    window.localStorage.setItem("LANG", "EN");
  } else {
    if (Language === "EN") {
      EN.value = true;
    } else if (Language === "ES") {
      EN.value = false;
    } else {
      EN.value = true;
      window.localStorage.setItem("LANG", "EN");
    }
  }

  window.addEventListener("mouseout", () => {
    cursorVisible.value = false;
  });

  loading.value = false;

  useHead({
    title: `Jesner Ramirez - ${EN.value ? "About" : "Sobre mi"}`,
    htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
  });
});
const showContent = ref({
  about: true,
  experience: false,
  projects: false,
  contact: false,
});

function contact() {
  showContent.value = {
    about: false,
    experience: false,
    contact: true,
    projects: false,
  };
  useHead({
    title: `Jesner Ramirez - ${EN.value ? "Contact" : "Contacto"}`,
    htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
  });
}
function experiencia() {
  showContent.value = {
    about: false,
    experience: true,
    contact: false,
    projects: false,
  };
  useHead({
    title: `Jesner Ramirez - ${EN.value ? "Experience" : "Experiencia"}`,
    htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
  });
}
function projects() {
  showContent.value = {
    about: false,
    experience: false,
    contact: false,
    projects: true,
  };
  useHead({
    title: `Jesner Ramirez - ${EN.value ? "Projects" : "Proyectos"}`,
    htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
  });
}
function about() {
  showContent.value = {
    about: true,
    experience: false,
    contact: false,
    projects: false,
  };
  useHead({
    title: `Jesner Ramirez - ${EN.value ? "About" : "Sobre mi"}`,
    htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
  });
}
function themeMode(mode: string) {
  colorMode.preference = mode;
}
function languageMode(mode: string) {
  if (mode === "EN") {
    EN.value = true;
    window.localStorage.setItem("LANG", "EN");
  } else {
    EN.value = false;
    window.localStorage.setItem("LANG", "ES");
  }

  if (showContent.value.about) {
    useHead({
      title: `Jesner Ramirez - ${EN.value ? "About" : "Sobre mi"}`,
      htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
    });
  } else if (showContent.value.experience) {
    useHead({
      title: `Jesner Ramirez - ${EN.value ? "Experience" : "Experiencia"}`,
      htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
    });
  } else if (showContent.value.projects) {
    useHead({
      title: `Jesner Ramirez - ${EN.value ? "Projects" : "Proyectos"}`,
      htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
    });
  } else if (showContent.value.contact) {
    useHead({
      title: `Jesner Ramirez - ${EN.value ? "Contact" : "Contacto"}`,
      htmlAttrs: { lang: `${EN.value ? "EN" : "ES"}` },
    });
  }
}
</script>
<style>
@import url("../assets/css/main.css");
</style>
<style scoped>
main {
  margin: 0 25px 0 30px;
}
.cursor-container {
  position: fixed;
  height: 100vh;
  width: 100%;
}

.cursor-light {
  position: fixed;
  box-shadow: 0 0 100px 35px rgb(42 211 0 / 72%);
  border-radius: 50%;
  pointer-events: none;
  z-index: -50;
  mix-blend-mode: screen;
}
.options {
  position: absolute;
  right: 0px;
  top: 15px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  .linea {
    display: flex;
  }
  & :is(.button-left, .button-right) {
    padding: 12px 18px;
    cursor: pointer;
    background-color: var(--background-button-mode);
  }
  .button-left {
    border-radius: 30px 0 0 30px;
  }
  .button-right {
    border-radius: 0 30px 30px 0;
  }
  .icon-dark {
    color: var(--icon-dark);
  }
  .icon-light {
    color: var(--icon-light);
  }
  .active {
    background-color: var(--background-color);
    border: 4px var(--border-color) solid;
    box-shadow: 0 0 4px var(--border-color);
    padding: 8px 14px;
  }
}
main {
  position: relative;
}
footer {
  height: 150px;
  width: 100%;
}
.container {
  position: absolute;
  right: 0;
  left: 0;
  top: 78px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .content {
    display: grid;
    grid-template-columns: 162px 1fr;
    gap: 30px;
    .menu {
      background-color: var(--background-cards);
      border-radius: 20px;
    }
    .contenido {
      border-radius: 20px;
      background-color: var(--background-cards);
      margin-bottom: 40px;
      padding: 18px 30px 30px 30px;
      box-sizing: border-box;
    }
  }
}
@media (width < 740px) {
  .options {
    justify-content: space-between;
  }
}
@media (width < 700px) {
  main {
    margin: 0 10px 0 15px;
  }
}
@media (width < 800px) {
  .container {
    .content {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
}
@media (width < 600px) {
  .container {
    .content {
      .contenido {
        padding: 8px 20px 20px 20px;
      }
    }
  }
}
@media (width < 700px) {
  .container {
    gap: 15px;
    .content {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
}
@media (width < 450px) {
  .container {
    top: 115px;
  }
}
</style>
