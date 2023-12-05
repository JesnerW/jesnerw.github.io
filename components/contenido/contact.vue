<template>
  <div class="card-contact">
    <h1>Contact</h1>
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
      <Icon name="mingcute:send-fill" size="30px" class="icon" />
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
  background: rgb(0, 26, 255);
  color: white;
  border-radius: 20px;
  padding: 15px 30px;
  border: none;
  font-size: 18px;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
}
.input {
  font-weight: 300;
  color: white;
  padding: 15px 20px;
  background-color: rgba(0, 0, 0, 0.378);
  border-radius: 15px;
  border: 1px solid var(--color-text);
  font-size: 18px;
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
  }
  .inputs {
    display: flex;
    gap: 25px;
  }
}
</style>
