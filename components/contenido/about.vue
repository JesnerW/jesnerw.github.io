<template>
  <div class="card-about">
    <h1>Sobre mi</h1>
    <p>
      Mi enfoque principal es entregar soluciones tecnológicas de alta calidad
      que no solo cumplan con las expectativas de los usuarios, sino que las
      superen. Siempre estoy orientado hacia la mejora profesional y personal,
      disfruto compartiendo mis conocimientos con mis compañeros ya que el poder
      de trabajar juntos en una misma dirección hace que alcanzar los objetivos
      y metas sea de manera más efectiva.
    </p>
    <h2>Que estoy haciendo</h2>
    <div class="cards">
      <div class="card">
        <Icon
          name="material-symbols-light:developer-mode-tv-outline-sharp"
          size="50px"
          class="icon"
        />
        <h3>Desarrollo Frontend</h3>
        Desarrollar aplicaciones web seguras, eficientes y escalables y sistemas
        de gestión basados ​​en web mediante la escritura de códigos estándar,
        bien documentados y eficientes.
      </div>
      <div class="card">
        <Icon name="grommet-icons:services" size="50px" class="icon" />
        <h3>Desarrollo Backend</h3>
        Desarrollar aplicaciones web seguras, eficientes y escalables y sistemas
        de gestión basados ​​en web mediante la escritura de códigos estándar,
        bien documentados y eficientes.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-about {
  color: white;
  box-sizing: border-box;
  letter-spacing: 0.4px;
  & p {
    margin: 15px 0;
    font-weight: 200;
    line-height: 1.5;
  }
  .cards {
    display: flex;
    gap: 25px;
    margin-top: 15px;
    .card {
      line-height: 1.3;
      font-weight: 200;
      border: 1px var(--backgroud-option) solid;
      border-radius: 25px;
      text-align: center;
      padding: 25px;
      & svg {
        & path {
          stroke: white;
        }
      }
      & h3 {
        margin: 10px 0;
      }
    }
  }
}
</style>
