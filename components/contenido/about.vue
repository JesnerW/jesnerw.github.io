<template>
  <div class="card-about">
    <div class="sub-title">
      <Icon name="mdi:about" size="30px" class="icon" />
      <h2>{{ EN ? "About" : "Sobre mi" }}</h2>
    </div>
    <p>
      {{
        EN
          ? "My main goal is to deliver high quality technology solutions that not only meet but exceed user expectations."
          : "Mi objetivo principal es ofrecer soluciones tecnológicas de alta calidad que no solo cumplan con las expectativas de los usuarios, sino que las superen."
      }}
    </p>
    <p>
      {{
        EN
          ? "I always focus on work and personal improvement, and I enjoy interacting with my colleagues, since the ability to collaborate in the same direction contributes to achieve objectives and goals more effectively."
          : "Siempre me enfoco en la mejora laboral y personal, y disfruto de la interacción con mis colegas, dado que la capacidad de colaborar en una misma dirección contribuye a alcanzar los objetivos y metas de manera más efectiva."
      }}
    </p>
    <div class="sub-title">
      <Icon name="eos-icons:job" size="30px" class="icon" />
      <h2>
        {{ EN ? "What I'm Doing" : "Lo que hago" }}
      </h2>
    </div>
    <div class="cards">
      <div class="card">
        <Icon
          name="material-symbols-light:developer-mode-tv-outline-sharp"
          size="50px"
          class="icon"
        />
        <h3>{{ EN ? "Frontend Development" : "Desarrollo Frontend" }}</h3>
        <p>
          {{
            EN
              ? "I focus on creating secure, efficient and attractive web interfaces. I write standard and well-documented code for scalable applications, prioritizing user experience and security."
              : "Me enfoco en crear interfaces web seguras, eficientes y atractivas. Escribo código estándar y bien documentado para aplicaciones escalables, priorizando la experiencia del usuario y la seguridad."
          }}
        </p>
      </div>
      <div class="card">
        <Icon name="grommet-icons:services" size="50px" class="icon" />
        <h3>{{ EN ? "Backend Development" : "Desarrollo Backend" }}</h3>
        <p>
          {{
            EN
              ? "I specialize in building powerful and adaptable systems, my approach is oriented towards the creation of meticulous and ell-documented code, focused on the security and efficiency of the applications."
              : "Me especializo en la construcción de sistemas potentes y adaptables, mi enfoque se orienta hacia la creación de código meticuloso y bien documentado, enfocado en la seguridad y eficiencia de las aplicaciones."
          }}
        </p>
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
.card-about {
  box-sizing: border-box;
  letter-spacing: 0.4px;
  & > p {
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    font-size: var(--font-size-p-content);
    margin: 15px 0;
    font-weight: 300;
    line-height: 1.3;
    color: var(--text-about);
  }
  .sub-title {
    margin: 12px 0;
    display: flex;
    gap: 10px;
    & h2 {
      font-weight: 600;
      color: var(--title-about);
      font-size: var(--font-size-h2);
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
    margin-bottom: 30px;
    .card {
      line-height: 1.3;
      font-weight: 200;
      border: 2px var(--line-box-about) solid;
      border-radius: 25px;
      text-align: center;
      padding: 25px;
      transition: 0.5s ease;
      &:hover {
        border: 2px var(--line-box-about-hover) solid;
      }
      .icon {
        color: var(--color-icon);
      }
      & h3 {
        margin: 10px 0;
        font-weight: 500;
        font-size: var(--font-size-h3);
        color: var(--title-about);
      }
      & p {
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
        color: var(--text-about);
        font-size: var(--font-size-p-content);
      }
    }
  }
}
@media (width < 992px) {
  .card-about {
    .cards {
      flex-direction: column;
    }
  }
}
</style>
