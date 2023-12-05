<template>
  <div class="card-about">
    <h1>Sobre mi</h1>
    <p>
      Mi enfoque principal es entregar soluciones tecnológicas de alta calidad
      que no solo cumplan con las expectativas de los usuarios, sino que las
      superen.
    </p>
    <p>
      Siempre estoy orientado hacia la mejora profesional y personal, disfruto
      compartiendo mis conocimientos con mis compañeros, ya que el poder de
      trabajar juntos en una misma dirección hace que alcanzar los objetivos y
      metas sea de manera más efectiva.
    </p>
    <h2>Lo que hago</h2>
    <div class="cards">
      <div class="card">
        <Icon
          name="material-symbols-light:developer-mode-tv-outline-sharp"
          size="50px"
          class="icon"
        />
        <h3>Desarrollo Frontend</h3>
        Me enfoco en crear interfaces web seguras, eficientes y atractivas.
        Escribo código estándar y bien documentado para aplicaciones escalables,
        priorizando la experiencia del usuario y la seguridad.
      </div>
      <div class="card">
        <Icon name="grommet-icons:services" size="50px" class="icon" />
        <h3>Desarrollo Backend</h3>
        Me especializo en la construcción de sistemas potentes y adaptables, mi
        enfoque se orienta hacia la creación de código meticuloso y bien
        documentado, enfocado en la seguridad y eficiencia de las aplicaciones.
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
    line-height: 1.3;
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
