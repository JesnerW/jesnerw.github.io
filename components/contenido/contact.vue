<template>
  <div class="card-contact">
    <div class="sub-title">
      <Icon name="fluent:contact-card-28-regular" size="30px" class="icon" />
      <h2>Contact</h2>
    </div>
    <div class="form">
      <p>
        Estoy buscando oportunidades para colaborar con
        empresas/agencias/individuos, no solo trabajar para ellos. Quiero
        aportar mi experiencia en un grupo colectivo donde podamos trabajar
        juntos para resolver problemas comerciales reales de una manera que
        optimice toda nuestra experiencia y conocimientos respectivos.
      </p>
      <p>No dude en comunicarse a través de este formulario.</p>
      <div class="inputs">
        <input
          @input="form.from_name = $event.target.value"
          type="text"
          required
          placeholder="Nombre"
          class="input"
        />
        <input
          @input="form.email_id = $event.target.value"
          type="text"
          required
          placeholder="Correo electrónico"
          class="input"
        />
      </div>
      <textarea
        @input="form.message = $event.target.value"
        required
        placeholder="Mensaje"
        class="input"
        style="height: 145px"
      />
    </div>
    <button @click="sendEmail">
      <Icon name="mingcute:send-fill" size="25px" class="icon" />
      Enviar mensaje
    </button>
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
const form = ref({
  from_name: "",
  email_id: "",
  message: "",
});
var data = {
  service_id: config.public.serviceId,
  template_id: config.public.templateId,
  user_id: config.public.publicKey,
  template_params: form.value,
};
const URL_POST = "https://api.emailjs.com/api/v1.0/email/send";
async function sendEmail() {
  await axios.post(URL_POST, data);
}
</script>

<style scoped>
button {
  margin-top: 20px;
  background: var(--background-button);
  color: var(--color-text-button);
  border-radius: 20px;
  padding: 13px 25px 15px 25px;
  border: none;
  font-size: 20px;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
}
.input {
  font-weight: 300;
  color: white;
  padding: 15px 20px;
  background-color: rgba(0, 0, 0, 0.378);
  border-radius: 15px;
  border: 1px solid var(--color-text);
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #8f54a0 #ffffff;
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 0px;
  }
}
.card-contact {
  font-weight: 300;
  color: white;
  line-height: 1.3;
  box-sizing: border-box;
  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & p {
      font-size: 20px;
      color: var(--color-text);
    }
  }
  .inputs {
    display: flex;
    gap: 25px;
  }
  .sub-title {
    margin: 12px 0;
    display: flex;
    gap: 10px;
    & h2 {
      font-weight: 600;
      color: var(--color-title);
      font-size: 28px;
    }
    .icon {
      margin-top: 3px;
      color: var(--color-icon);
    }
  }
}
</style>
