<template>
  <div class="card-resume">
    <div class="card-experience">
      <div class="sub-title">
        <Icon name="ph:briefcase" size="30px" class="icon" />
        <h2>{{ EN ? "Experience" : "Experiencia" }}</h2>
      </div>
      <div class="list circle">
        <h3>
          {{ EN ? "Frontend Developer" : "Desarrollador Frontend" }}
        </h3>
        <p>
          {{ EN ? "January" : "Enero" }} 2023 -
          <span>{{ EN ? "Present" : "Presente" }}</span>
        </p>
        <p>Freelance</p>
      </div>
    </div>
    <div class="card-education">
      <div class="sub-title">
        <Icon name="cil:education" size="30px" class="icon" />
        <h2>{{ EN ? "Education" : "Educación" }}</h2>
      </div>
      <div class="list line circle">
        <h3>Soy Henry</h3>
        <p>
          {{ EN ? "May" : "Mayo" }} 2022 -
          {{ EN ? "December" : "Diciembre" }} 2022
        </p>
        <p>{{ EN ? "Full Stack Developer" : "Desarrollador Full Stack" }}</p>
      </div>
      <div class="list circle">
        <h3>Universidad San Pedro</h3>
        <p>
          {{ EN ? "January" : "Enero" }} 2012 -
          {{ EN ? "December" : "Diciembre" }} 2018
        </p>
        <p>{{ EN ? "Systems Engineering" : "Ingeniería de Sistemas" }}</p>
      </div>
    </div>
    <div class="card-skill">
      <div class="sub-title">
        <Icon name="iconoir:developer" size="30px" class="icon" />
        <h2>{{ EN ? "Skill" : "Habilidades técnicas" }}</h2>
      </div>
      <div class="container-skill">
        <div class="skill">
          <Icon name="vscode-icons:file-type-html" size="55px" />
          <p>HTML5</p>
        </div>
        <div class="skill">
          <Icon name="vscode-icons:file-type-css" size="55px" />
          <p>CSS</p>
        </div>
        <div class="skill">
          <Icon name="logos:javascript" size="55px" />
          <p>JavaScript</p>
        </div>
        <div class="skill">
          <Icon name="vscode-icons:file-type-typescript-official" size="55px" />
          <p>TypeScript</p>
        </div>
        <div class="skill">
          <Icon name="vscode-icons:file-type-node" size="55px" />
          <p>NodeJs</p>
        </div>
        <div class="skill">
          <Icon name="devicon:vuejs" size="55px" />
          <p>VueJs</p>
        </div>
        <div class="skill">
          <Icon name="logos:react" size="55px" />
          <p>ReactJs</p>
        </div>
        <div class="skill">
          <Icon name="devicon:angular" size="55px" />
          <p>AngularJs</p>
        </div>
        <div class="skill">
          <Icon name="logos:nuxt-icon" size="55px" />
          <p>NuxtJs</p>
        </div>
        <div class="skill">
          <Icon name="logos:nextjs-icon" size="55px" />
          <p>NextJs</p>
        </div>
        <div class="skill">
          <Icon name="devicon:git" size="55px" />
          <p>Git</p>
        </div>
        <div class="skill">
          <Icon name="logos:github-octocat" size="55px" />
          <p>GitHub</p>
        </div>
        <div class="skill">
          <Icon name="logos:python" size="55px" />
          <p>Python</p>
        </div>
        <div class="skill">
          <Icon name="logos:redux" size="55px" />
          <p>Redux</p>
        </div>
        <div class="skill">
          <Icon name="logos:pinia" size="55px" />
          <p>Pinia</p>
        </div>
        <div class="skill">
          <Icon name="skill-icons:expressjs-light" size="55px" />
          <p>ExpressJs</p>
        </div>
        <div class="skill">
          <Icon name="logos:graphql" size="55px" />
          <p>GraphQL</p>
        </div>
        <div class="skill">
          <Icon name="logos:postgresql" size="55px" />
          <p>PostgreSQL</p>
        </div>
        <div class="skill">
          <Icon name="dashicons:rest-api" size="55px" />
          <p>API REST</p>
        </div>
        <div class="skill">
          <Icon name="logos:jest" size="55px" />
          <p>Jest</p>
        </div>
        <div class="skill">
          <Icon name="logos:swagger" size="55px" />
          <p>Swagger</p>
        </div>
        <div class="skill">
          <Icon name="logos:jira" size="55px" />
          <p>Jira</p>
        </div>
        <div class="skill">
          <Icon name="logos:sequelize" size="55px" />
          <p>Sequelize</p>
        </div>
        <div class="skill">
          <Icon name="devicon:figma" size="55px" />
          <p>Figma</p>
        </div>
      </div>
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
.container-skill {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 20px 5px 10px 5px;
  padding: 10px 10px;
  border-radius: 20px;
  border: 2px var(--line-box-skill) solid;
  gap: 5px 15px;
  .skill {
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    font-weight: 300;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
    box-sizing: border-box;
    border: 2px transparent solid;
    border-radius: 10px;
    padding: 10px 0;
    transition: cubic-bezier(0, 0, 0, 1) 2s;
    color: var(--text-experience);
    &:hover {
      border: 2px var(--line-a-skill) solid;
    }
    & > img {
      width: 55px;
    }
  }
}

.sub-title {
  margin: 12px 0;
  display: flex;
  gap: 10px;
  & h2 {
    font-weight: 600;
    color: var(--section-modal-experience);
    font-size: 28px;
  }
  .icon {
    margin-top: 2px;
    color: var(--color-icon);
  }
}
.line {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-color: var(--line-progress);
    width: 1px;
    height: 100%;
    top: 11px;
    left: 15px;
  }
}
.circle {
  position: relative;
  &::before {
    z-index: 1;
    position: absolute;
    content: "";
    background-color: var(--circle-progress);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    top: 11px;
    left: 10px;
  }
}
.list {
  padding-left: 40px;
  line-height: 1.5;
  & h3 {
    font-weight: 400;
    font-size: 22px;
    color: var(--text-experience);
  }
  & p {
    font-weight: 300;
    font-size: 20px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);

    color: var(--text-experience);
  }
}
.card-resume {
  box-sizing: border-box;
  letter-spacing: 0.4px;
}
</style>
