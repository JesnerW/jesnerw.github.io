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
          v-model="form.from_name"
          type="text"
          required
          placeholder="Nombre"
          class="input"
        />
        <input
          v-model="form.email_id"
          type="text"
          required
          placeholder="Correo electrónico"
          class="input"
        />
      </div>
      <textarea
        v-model="form.message"
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

    <div class="content-alert" :class="showAlert ? 'alert-enter' : ''">
      <div class="alert" :class="showAlert ? 'alert-enter' : ''">
        {{ messageAlert }}
        <button @click="showAlert = false">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const config = useRuntimeConfig();
const showAlert = ref(false);
const form = ref({
  from_name: "",
  email_id: "",
  message: "",
});
const messageAlert = ref("");

var data = {
  service_id: config.public.serviceId,
  template_id: config.public.templateId,
  user_id: config.public.publicKeyoi,
  template_params: form.value,
};

const URL_POST = "https://api.emailjs.com/api/v1.0/email/send";

async function sendEmail() {
  try {
    await axios.post(URL_POST, data);
    AlertSuccess();
  } catch (error) {
    AlertError();
  }
}

function limpiarCampos() {
  form.value.from_name = "";
  form.value.email_id = "";
  form.value.message = "";
}

function AlertSuccess() {
  limpiarCampos();
  messageAlert.value = "Mensaje enviado satisfactoriamente";
  showAlert.value = true;
}

function AlertError() {
  limpiarCampos();
  messageAlert.value =
    "Hubo un problema al enviar el mensaje, intente usar otro método de contacto por favor";
  showAlert.value = true;
}
</script>

<style scoped>
.alert-enter {
  opacity: 1 !important;
  z-index: 10 !important;
}
.alert-out {
  opacity: 0 !important;
  z-index: -999 !important;
}
.content-alert {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.1s ease-in-out;
  .alert {
    background: white;
    color: black;
    font-size: 20px;
    width: 300px;
    height: 150px;
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    transition: 1s ease-in-out;
    text-align: center;
    padding: 20px;
  }
}
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
  background-color: var(--color-background-input);
  border-radius: 15px;
  border: 1px solid var(--color-text-contact);
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
  &:focus-visible {
    outline: 1px solid var(--dorado);
    background-color: transparent;
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
