<template>
  <div class="menu">
    <div class="option" @click="about">
      <Icon name="ep:user" size="40px" class="icon" />
      <p>Sobre mi</p>
    </div>
    <div class="option" @click="experiencia">
      <Icon name="radix-icons:file-text" size="40px" class="icon" />
      <p>experiencia</p>
    </div>
    <div class="option" @click="projects">
      <Icon name="carbon:ibm-cloud-projects" size="40px" class="icon" />
      <p>Proyectos</p>
    </div>
    <div class="option" @click="contact">
      <Icon name="streamline:contact-phonebook-2" size="40px" class="icon" />
      <p>Contacto</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["contact", "about", "experiencia", "projects"]);
function about() {
  emit("about");
}
function experiencia() {
  emit("experiencia");
}
function projects() {
  emit("projects");
}
function contact() {
  emit("contact");
}
</script>

<style scoped>
.menu {
  color: white;
  padding: 25px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  .option {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--backgroud-option);
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      & p {
        color: rgb(0, 255, 0);
      }
      & path {
        fill: red;
        stroke: red;
      }
    }
    & svg {
      & path {
        fill: white;
        stroke: white;
      }
    }
    & p {
      text-transform: uppercase;
    }
  }
}
</style>
