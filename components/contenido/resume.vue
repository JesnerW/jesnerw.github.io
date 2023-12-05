<template>
  <div class="card-resume">
    <div class="card-experience">
      <div class="sub-title">
        <Icon name="ph:briefcase" size="30px" class="icon" />
        <h2>Experiencia</h2>
      </div>
      <div class="list circle">
        <h3>Desarrollador Frontend</h3>
        <p>Enero 2023 - <span>Present</span></p>
        <p>Freelance</p>
      </div>
    </div>
    <div class="card-education">
      <div class="sub-title">
        <Icon name="cil:education" size="30px" class="icon" />
        <h2>Educación</h2>
      </div>
      <div class="list line circle">
        <h3>Soy Henry</h3>
        <p>Mayo 2022 - Diciembre 2022</p>
        <p>Desarrollador Full Stack</p>
      </div>
      <div class="list circle">
        <h3>Universidad San Pedro</h3>
        <p>Enero 2012 - Diciembre 2018</p>
        <p>Ingeniería de Sistemas</p>
      </div>
    </div>
    <div class="card-skill">
      <div class="sub-title">
        <Icon name="iconoir:developer" size="30px" class="icon" />
        <h2>Skill</h2>
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

<script setup lang="ts"></script>

<style scoped>
.container-skill {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 20px 5px 10px 5px;
  padding: 10px 10px;
  border-radius: 20px;
  border: 1px var(--color-separator) solid;
  gap: 5px 15px;
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
    font-weight: 200;
    box-sizing: border-box;
    border: 1px transparent solid;
    border-radius: 10px;
    padding: 10px 0;
    transition: ease-in-out 0.2s;
    &:hover {
      border: 1px var(--color-text) solid;
    }
    & > img {
      width: 55px;
    }
  }
}
.icon {
  color: rgb(255, 255, 255);
}
.sub-title {
  margin: 12px 0;
  display: flex;
  gap: 10px;
}
.line {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-color: var(--color-text);
    width: 1px;
    height: 100%;
    top: 6px;
    left: 15px;
  }
}
.circle {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background-color: var(--color-text);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    top: 6px;
    left: 10px;
  }
}
.list {
  padding-left: 40px;
  line-height: 1.5;

  & p {
    font-weight: 200;
    color: var(--color-text);
  }
}
.card-resume {
  color: white;
  box-sizing: border-box;
  letter-spacing: 0.4px;
}
</style>
