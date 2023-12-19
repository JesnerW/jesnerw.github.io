<template>
  <div class="card-project">
    <div class="sub-title">
      <Icon name="octicon:project-symlink-24" size="30px" class="icon" />
      <h2>Projects</h2>
    </div>
    <div class="list-projects">
      <div class="project">In Development</div>
      <div class="project">In Development</div>
      <div class="project">In Development</div>
      <div class="project">In Development</div>
      <div class="project">In Development</div>
      <div class="project">In Development</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sub-title {
  margin: 12px 0;
  display: flex;
  gap: 10px;
  & h2 {
    font-weight: 600;
    color: var(--section-modal-project);
    font-size: 28px;
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
    font-size: 35px;
    color: var(--text-project);
  }
}
</style>
