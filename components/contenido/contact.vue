<template>
  <div class="card-contact">
    <div class="sub-title">
      <Icon name="fluent:contact-card-28-regular" size="30px" class="icon" />
      <h2>{{ EN ? "Contact" : "Contacto" }}</h2>
    </div>
    <div class="form">
      <p>
        {{
          EN
            ? "I am looking for opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my experience into a collective group where we can work together to solve real business  together to solve real business problems in a way that optimizes all of our respective optimizes all of our respective experience and expertise."
            : "Estoy buscando oportunidades para colaborar con empresas / agencias / individuos, no solo trabajar para ellos. Quiero aportar mi experiencia en un grupo colectivo donde podamos trabajar juntos para resolver problemas comerciales reales de una manera que optimice toda nuestra experiencia y conocimientos respectivos."
        }}
      </p>
      <p>
        {{
          EN
            ? "Don't hesitate to get in touch through this form."
            : "No dude en comunicarse a través de este formulario."
        }}
      </p>
      <div class="inputs">
        <div class="pack">
          <input
            v-model="name.value.value"
            type="text"
            required
            :placeholder="EN ? 'Name' : 'Nombre'"
            class="input"
          />
          <span>{{ name.errorMessage.value }}</span>
        </div>
        <div class="pack">
          <input
            v-model="email.value.value"
            type="text"
            required
            :placeholder="EN ? 'E-mail' : 'Correo electrónico'"
            class="input"
          />
          <span>{{ email.errorMessage.value }}</span>
        </div>
      </div>
      <div class="pack">
        <textarea
          v-model="message.value.value"
          required
          :placeholder="EN ? 'Message' : 'Mensaje'"
          class="input"
          style="height: 145px"
        />
        <span>{{ message.errorMessage.value }}</span>
      </div>
    </div>
    <div class="submit">
      <button @click="sendEmail" :disabled="!isFormValid">
        <Icon name="mingcute:send-fill" size="25px" class="icon" />
        {{ EN ? "Send message" : "Enviar mensaje" }}
      </button>
      <span v-show="!isFormValid">{{
        EN
          ? "*Complete the form before submitting"
          : "*Complete el formulario antes de enviar"
      }}</span>
    </div>

    <div class="content-alert" :class="showAlert ? 'alert-enter' : ''">
      <div class="alert" :class="showAlert ? 'alert-enter' : ''">
        {{ messageAlert }}
        <button @click="showAlert = false">
          {{ EN ? "Close" : "Cerrar" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useField, configure } from "vee-validate";
import * as yup from "yup";

configure({
  validateOnInput: true,
  validateOnChange: true,
});

const EN = ref(true);
const props = defineProps(["Language"]);
const emit = defineEmits(["limpiar-campos"]);

const config = useRuntimeConfig();
const showAlert = ref(false);
const messageAlert = ref("");

watch(props, () => {
  EN.value = props.Language;
});

/*YUP Schema*/
const nameSchema = yup.string().required(() => {
  if (EN.value) {
    return "*Required field";
  } else {
    return "*Campo requerido";
  }
});
const emailSchema = yup
  .string()
  .email(() => {
    if (EN.value) {
      return "*Enter a valid email address";
    } else {
      return "*Escriba un correo valido";
    }
  })
  .required(() => {
    if (EN.value) {
      return "*Required field";
    } else {
      return "*Campo requerido";
    }
  });
const messageSchema = yup.string().required(() => {
  if (EN.value) {
    return "*Required field";
  } else {
    return "*Campo requerido";
  }
});
/*Vee-Validate*/
const name = useField("name", nameSchema);
const email = useField("email", emailSchema);
const message = useField("message", messageSchema);

const isFormValid = computed(
  () => name.meta.valid && email.meta.valid && message.meta.valid
);
const URL_POST = "https://api.emailjs.com/api/v1.0/email/send";

async function sendEmail() {
  const value = {
    name: name.value.value,
    email: email.value.value,
    message: message.value.value,
  };

  const valideSchema = yup.object({
    name: nameSchema,
    email: emailSchema,
    message: messageSchema,
  });

  const isValid = await valideSchema.isValid(value);

  if (isValid) {
    var data = {
      service_id: config.public.serviceId,
      template_id: config.public.templateId,
      user_id: config.public.publicKey,
      template_params: {
        from_name: value.name,
        email_id: value.email,
        message: value.message,
      },
    };
    try {
      await axios.post(URL_POST, data);
      AlertSuccess();
    } catch (error) {
      AlertError();
    }
  } else {
    name.validate();
    email.validate();
    message.validate();
  }
}

function limpiarCampos() {
  name.resetField();
  email.resetField();
  message.resetField();
}

function AlertSuccess() {
  limpiarCampos();
  messageAlert.value = EN.value
    ? "Message sent successfully"
    : "Mensaje enviado satisfactoriamente";
  showAlert.value = true;
}

function AlertError() {
  limpiarCampos();
  messageAlert.value = EN
    ? "There was a problem sending the message, please try another method of contact."
    : "Hubo un problema al enviar el mensaje, intente usar otro método de contacto por favor";
  showAlert.value = true;
}
onMounted(() => {
  emit("limpiar-campos", limpiarCampos);
});
</script>

<style scoped>
.submit {
  display: flex;
  gap: 10px;
  align-items: center;
  & > span {
    margin-top: 27px;
    color: var(--text-required);
    text-shadow: 0 0 1px var(--text-required-shadow);
  }
}
.pack {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  & span {
    position: absolute;
    left: 10px;
    bottom: -25px;
    color: var(--text-required);
    text-shadow: 0 0 1px var(--text-required-shadow);
  }
}
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
  margin-top: 25px;
  background: var(--background-button);
  color: var(--text-button);
  border-radius: 20px;
  padding: 13px 25px 15px 25px;
  border: none;
  font-size: var(--font-size-p-formulario);
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  &:disabled {
    /* Estilos cuando está deshabilitado */
    opacity: 0.6; /* Cambia la opacidad del botón */
    cursor: not-allowed; /* Cambia el cursor al no permitido */
    /* Agrega otros estilos que desees cuando el botón esté deshabilitado */
  }
}
.input {
  font-weight: 300;
  color: var(--text-general);
  padding: 15px 20px;
  background-color: var(--background-input);
  border-radius: 15px;
  border: 1px solid var(--border-input);
  font-size: var(--font-size-p-formulario);

  box-sizing: border-box;
  width: 100%;
  resize: none;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);

  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #8f54a0 #ffffff;
  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 0px;
  }
  &:focus-visible {
    outline: 1px solid var(--outline-input);
    background-color: transparent;
  }
}
.card-contact {
  font-weight: 300;
  color: var(--text-general);
  line-height: 1.3;
  box-sizing: border-box;
  .form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & p {
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
      font-size: var(--font-size-p-formulario);
      color: var(--text-general);
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
      color: var(--section-modal-contact);
      font-size: var(--font-size-h2);
    }
    .icon {
      margin-top: 3px;
      color: var(--color-icon);
    }
  }
}

@media (width < 600px) {
  .input {
    padding: 10px 15px;
  }
  button {
    padding: 8px 20px 10px 20px;
  }
}
</style>
