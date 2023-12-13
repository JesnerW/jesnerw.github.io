<template>
  <div class="card-about">
    <div class="sub-title">
      <Icon name="mdi:about" size="30px" class="icon" />
      <h2>Sobre mi</h2>
    </div>
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
    <div class="sub-title">
      <Icon name="eos-icons:job" size="30px" class="icon" />
      <h2>Lo que hago</h2>
    </div>
    <div class="cards">
      <div class="card">
        <Icon
          name="material-symbols-light:developer-mode-tv-outline-sharp"
          size="50px"
          class="icon"
        />
        <h3>Desarrollo Frontend</h3>
        <p>
          Me enfoco en crear interfaces web seguras, eficientes y atractivas.
          Escribo código estándar y bien documentado para aplicaciones
          escalables, priorizando la experiencia del usuario y la seguridad.
        </p>
      </div>
      <div class="card">
        <Icon name="grommet-icons:services" size="50px" class="icon" />
        <h3>Desarrollo Backend</h3>
        <p>
          Me especializo en la construcción de sistemas potentes y adaptables,
          mi enfoque se orienta hacia la creación de código meticuloso y bien
          documentado, enfocado en la seguridad y eficiencia de las
          aplicaciones.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card-about {
  box-sizing: border-box;
  letter-spacing: 0.4px;
  & > p {
    font-size: 20px;
    margin: 15px 0;
    font-weight: 300;
    line-height: 1.3;
    color: var(--color-text-about);
  }
  .sub-title {
    margin: 12px 0;
    display: flex;
    gap: 10px;
    & h2 {
      font-weight: 600;
      color: var(--color-title-about);
      font-size: 28px;
    }
    .icon {
      margin-top: 2px;
      color: var(--color-icon);
    }
  }
  .cards {
    display: flex;
    gap: 25px;
    margin-top: 15px;
    .card {
      line-height: 1.3;
      font-weight: 200;
      border: 2px var(--color-line-box-about) solid;
      border-radius: 25px;
      text-align: center;
      padding: 25px;
      transition: 0.5s ease;
      &:hover {
        border: 2px var(--color-line-box-about-hover) solid;
      }
      .icon {
        color: var(--color-icon);
      }
      & h3 {
        margin: 10px 0;
        font-weight: 500;
        font-size: 24px;
        color: var(--color-title-about);
      }
      & p {
        color: var(--color-text-about);
        font-size: 20px;
      }
    }
  }
}
</style>
