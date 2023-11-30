<template>
  <main>
    <div class="fondo"><img :src="headerIMG" alt="" /></div>
    <div class="container">
      <Perfil />
      <div class="content">
        <Menu class="menu" @about="about" @contact="contact" @resume="resume" />
        <ContenidoAbout v-show="showContent.about" class="contenido" />
        <ContenidoResume v-show="showContent.resume" class="contenido" />
        <ContenidoContact v-show="showContent.contact" class="contenido" />
      </div>
      <!-- <footer></footer> -->
    </div>
  </main>
</template>

<script setup lang="ts">
import headerIMG from "@/assets/header_bg_1x.png";
const showContent = ref({
  about: true,
  resume: false,
  contact: false,
});
function contact() {
  showContent.value = { about: false, resume: false, contact: true };
}
function resume() {
  showContent.value = { about: false, resume: true, contact: false };
}
function about() {
  showContent.value = { about: true, resume: false, contact: false };
}
</script>

<style scoped>
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
  top: 170px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .content {
    display: flex;
    gap: 30px;
    .menu {
      background-color: var(--backgroud-cards);
      width: 15%;
      border-radius: 20px;
    }
    .contenido {
      width: 85%;
      height: 100%;
      border-radius: 20px;
      background-color: var(--backgroud-cards);
      margin-bottom: 40px;
      padding: 30px;
      box-sizing: border-box;
    }
  }
}
.fondo {
  position: absolute;
  height: 250px;
  overflow: hidden;
  & img {
    margin-top: -225px;
    width: 100%;
  }
}
</style>
