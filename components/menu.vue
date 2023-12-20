<template>
  <div class="menu">
    <div
      class="option"
      :class="menuActive.about ? 'active' : ''"
      @click="about"
    >
      <Icon name="ep:user" size="40px" class="icon" />
      <p>{{ EN ? "About" : "Sobre mi" }}</p>
    </div>
    <div
      class="option"
      :class="menuActive.experience ? 'active' : ''"
      @click="experiencia"
    >
      <Icon name="radix-icons:file-text" size="40px" class="icon" />
      <p>{{ EN ? "Experience" : "Experiencia" }}</p>
    </div>
    <div
      class="option"
      :class="menuActive.projects ? 'active' : ''"
      @click="projects"
    >
      <Icon name="carbon:ibm-cloud-projects" size="40px" class="icon" />
      <p>{{ EN ? "Projects" : "Proyectos" }}</p>
    </div>
    <div
      class="option"
      :class="menuActive.contact ? 'active' : ''"
      @click="contact"
    >
      <Icon name="streamline:contact-phonebook-2" size="40px" class="icon" />
      <p>{{ EN ? "Contact" : "Contacto" }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const EN = ref(true);
const props = defineProps(["Language"]);
const emit = defineEmits(["contact", "about", "experiencia", "projects"]);

watch(props, () => {
  EN.value = props.Language;
});

const menu = {
  about: true,
  experience: false,
  projects: false,
  contact: false,
};

const menuActive = ref(menu);

function defaultMenu() {
  menuActive.value.about = false;
  menuActive.value.experience = false;
  menuActive.value.projects = false;
  menuActive.value.contact = false;
}

function about() {
  defaultMenu();
  menuActive.value.about = true;
  emit("about");
}
function experiencia() {
  defaultMenu();
  menuActive.value.experience = true;
  emit("experiencia");
}
function projects() {
  defaultMenu();
  menuActive.value.projects = true;
  emit("projects");
}
function contact() {
  defaultMenu();
  menuActive.value.contact = true;
  emit("contact");
}
</script>

<style scoped>
.menu {
  color: var(--text-menu);
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--background-option-menu);
    border: 2px var(--border-option-menu) solid;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      border: 2px var(--border-menu-hover) solid;

      & p {
        color: var(--text-menu-hover);
      }
      .icon {
        color: var(--icon-menu-hover);
      }
    }
    & p {
      font-family: var(--family-text);
      font-weight: 400;
      font-size: 18px;
      color: var(--text-menu);
      text-transform: uppercase;
    }
    .icon {
      color: var(--text-menu);
    }
  }
  .active {
    border: 2px var(--border-menu-active) solid;
    background-color: var(--background-menu-active);
    & :is(p, .icon) {
      color: var(--text-menu-active);
    }
    &:hover {
      & :is(p, .icon) {
        color: var(--text-menu-active);
      }
    }
  }
}
</style>
