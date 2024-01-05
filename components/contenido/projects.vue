<template>
  <div class="card-project">
    <div>
      <div class="sub-title">
        <Icon name="octicon:project-symlink-24" size="30px" class="icon" />
        <h2>{{ EN ? "Web projects" : "Proyectos web" }}</h2>
      </div>
      <div class="list-projects">
        <div class="card" v-for="item in listProjectsDynamic">
          <div class="imagen" @click="showPage(item.url)">
            <img :src="item.img" :alt="EN ? item.titleEN : item.titleES" />
          </div>
          <div class="description">
            <section>
              <Icon name="mingcute:up-line" size="30px" class="icon" />
              <h3>{{ EN ? item.titleEN : item.titleES }}</h3>
              <div class="actions">
                <button @click="openGitHub(item.urlGitHub)">
                  <Icon name="mdi:github" size="25px" class="iconAction" />
                  GitHub
                </button>
                <button @click="openPage(item.url)">
                  <Icon
                    name="mdi:view-arrow-right-outline"
                    size="25px"
                    class="iconAction"
                  />
                  {{ EN ? "Visit page" : "Visitar pagina" }}
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="sub-title">
        <Icon name="mdi:design" size="30px" class="icon" />
        <h2>
          {{
            EN ? "Design and style challenges" : "Desafíos de diseño y estilos"
          }}
        </h2>
      </div>
      <div class="list-projects">
        <div class="card" v-for="item in listProjectsFromDesign">
          <div class="imagen" @click="showPage(item.url)">
            <img :src="item.img" :alt="EN ? item.titleEN : item.titleES" />
          </div>
          <div class="description">
            <section>
              <Icon name="mingcute:up-line" size="30px" class="icon" />
              <h3>{{ EN ? item.titleEN : item.titleES }}</h3>
              <div class="actions">
                <button @click="openGitHub(item.urlGitHub)">
                  <Icon name="mdi:github" size="25px" class="iconAction" />
                  GitHub
                </button>
                <button @click="openPage(item.url)">
                  <Icon
                    name="mdi:view-arrow-right-outline"
                    size="25px"
                    class="iconAction"
                  />
                  {{ EN ? "Visit page" : "Visitar pagina" }}
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <ContenidoModal
      v-show="showModal"
      :url="urlIframe"
      @cerrar-modal="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import {
  listProjectsFromDesign,
  listProjectsDynamic,
} from "@/data/list_projects";
const EN = ref(true);
const showModal = ref(false);
const urlIframe = ref("");
const props = defineProps(["Language"]);

watch(props, () => {
  EN.value = props.Language;
});
function closeModal() {
  showModal.value = false;
  urlIframe.value = "";
  document.body.style.overflow = "";
}
function showPage(url: string) {
  urlIframe.value = url;
  showModal.value = true;
  document.body.style.overflow = "hidden";
}
function openGitHub(url: string) {
  window.open(url);
}
function openPage(url: string) {
  window.open(url);
}
</script>

<style scoped>
.sub-title {
  display: flex;
  gap: 10px;
  & h2 {
    font-weight: 600;
    color: var(--section-modal-project);
    font-size: var(--font-size-h2);
  }
  .icon {
    margin-top: 2px;
    color: var(--color-icon);
  }
}
.list-projects {
  margin-top: 20px;
  padding-right: 5px;
  margin-right: -5px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 2px;
  max-height: 513px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 20px;
  }
  .card {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px var(--box-border-project) solid;
    background-color: var(--box-project);
    padding-bottom: 48px;
    .imagen {
      display: flex;
      width: 100%;
      font-size: var(--font-size-card-Projects);
      color: var(--text-project);
      position: relative;
      cursor: pointer;
      overflow: hidden;
      transition: ease-in-out 0.3s;
      background-color: transparent;
      &:hover {
        &::after {
          content: url("https://api.iconify.design/material-symbols/preview.svg?width=50&height=50&color=white");
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        & img {
          transform: scale(1.03);
        }
      }
      & img {
        width: 100%;
        transition: ease-in-out 0.2s;
      }
    }
    .description {
      position: absolute;
      background-color: var(--background-description-project);
      width: 100%;
      height: 108px;
      bottom: -60px;
      border-radius: 15px;
      transition: height ease-in-out 0.5s;
      text-align: center;
      color: var(--text-project);
      &::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        display: block;
        right: -25px;
        border-radius: 15px;
        box-shadow: inset -25px -25px var(--background-description-project);
      }
      &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        display: block;
        left: -25px;
        border-radius: 15px;
        box-shadow: inset 25px -25px var(--background-description-project);
      }
      &:hover {
        height: 155px;
      }
      & section {
        margin-top: -2px;
        z-index: 1;
        position: relative;
        & h3 {
          margin-top: -10px;
          text-align: center;
          font-weight: 300;
          text-shadow: 0 0 1px var(--text-shadow-project-h3);
        }
        .actions {
          margin-top: 8px;
          display: flex;
          gap: 6px;
          justify-content: center;
          & button {
            border: 1px solid var(--border-button-project);
            font-size: 14.5px;
            cursor: pointer;
            display: flex;
            gap: 4px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            padding: 3px 6px;
            background: var(--background-button-project);
            font-weight: 300;
            text-shadow: 0 0 1px var(--text-shadow-project-button);
            color: var(--text-project);
            transition: ease-in-out 0.3s;
            &:hover {
              background: var(--background-button-hover-project);
              color: var(--text-button-hover-project);
              text-shadow: 0 0 1px var(--text-shadow-project-hover-button);
              .iconAction {
                color: var(--hover-icon-project);
              }
            }
          }
        }
      }
    }
  }
}
@media (width < 992px) {
  .list-projects {
    grid-template-columns: 1fr 1fr;
    .project {
      height: 200px;
    }
  }
}
@media (width < 500px) {
  .list-projects {
    .project {
      height: 160px;
    }
  }
}
@media (width < 400px) {
  .list-projects {
    .project {
      height: 140px;
    }
  }
}
</style>
