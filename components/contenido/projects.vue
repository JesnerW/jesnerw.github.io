<template>
  <div class="card-project">
    <div class="sub-title">
      <Icon name="octicon:project-symlink-24" size="30px" class="icon" />
      <h2>{{ EN ? "Projects" : "Proyectos" }}</h2>
    </div>
    <div class="list-projects">
      <div class="project">{{ EN ? "In development" : "En desarrollo" }}</div>
      <div class="project">{{ EN ? "In development" : "En desarrollo" }}</div>
      <div class="project">{{ EN ? "In development" : "En desarrollo" }}</div>
      <div class="project">{{ EN ? "In development" : "En desarrollo" }}</div>
      <div class="project">{{ EN ? "In development" : "En desarrollo" }}</div>
      <div class="project">{{ EN ? "In development" : "En desarrollo" }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const EN = ref(true);
const props = defineProps(["Language"]);
watch(props, () => {
  EN.value = props.Language;
});
</script>

<style scoped>
.sub-title {
  margin: 12px 0;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  .project {
    width: 100%;
    height: 220px;
    border-radius: 15px;
    background-color: var(--box-project);
    /* style text center */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-card-Projects);
    color: var(--text-project);
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
