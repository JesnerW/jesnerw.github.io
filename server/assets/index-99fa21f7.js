import __nuxt_component_0 from "./Icon-8e097054.js";
import { defineComponent, mergeProps, unref, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, a as useRuntimeConfig, e as useState } from "../server.mjs";
import "./index-284d9526.js";
import "klona";
import "hookable";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
const perfilIMG = "" + __buildAssetsURL("photo-perfil.d859e91a.jpg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "perfil",
  __ssrInlineRender: true,
  setup(__props) {
    const social = {
      LinkedIn: "https://www.linkedin.com/in/jesnerw",
      GitHub: "https://github.com/JesnerW",
      Hackerrank: "https://www.hackerrank.com/profile/jesner631"
    };
    const info = {
      name: "Jesner Ramirez Cueva",
      profession: "Full Stack Developer",
      email: "jesner631@gmail.com",
      location: "Peru, Barranca"
    };
    function redirection(url) {
      window.open(url, "_blank");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "perfil" }, _attrs))} data-v-97c48ddb><div class="photo" data-v-97c48ddb><img${ssrRenderAttr("src", unref(perfilIMG))} alt="" data-v-97c48ddb></div><div class="info" data-v-97c48ddb><div class="info-1" data-v-97c48ddb><h1 data-v-97c48ddb>${ssrInterpolate(info.name)}</h1><p data-v-97c48ddb>${ssrInterpolate(info.profession)}</p><div class="social-icon" data-v-97c48ddb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uiw:linkedin",
        size: "25px",
        onClick: ($event) => redirection(social.LinkedIn),
        class: "icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "bi:github",
        size: "25px",
        onClick: ($event) => redirection(social.GitHub),
        class: "icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "cib:hackerrank",
        size: "25px",
        onClick: ($event) => redirection(social.Hackerrank),
        class: "icon"
      }, null, _parent));
      _push(`</div></div><div class="separador" data-v-97c48ddb></div><div class="info-2" data-v-97c48ddb><div class="email" data-v-97c48ddb><h4 data-v-97c48ddb>Correo electrónico</h4><p data-v-97c48ddb>${ssrInterpolate(info.email)}</p></div><div class="location" data-v-97c48ddb><h4 data-v-97c48ddb>Ubicación</h4><p data-v-97c48ddb>${ssrInterpolate(info.location)}</p></div></div></div></div>`);
    };
  }
});
const perfil_vue_vue_type_style_index_0_scoped_97c48ddb_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/perfil.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-97c48ddb"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "menu",
  __ssrInlineRender: true,
  emits: ["contact", "about", "experiencia", "projects"],
  setup(__props, { emit: __emit }) {
    const menu = {
      about: true,
      experience: false,
      projects: false,
      contact: false
    };
    const menuActive = ref(menu);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-010eb52c><div class="${ssrRenderClass([unref(menuActive).about ? "active" : "", "option"])}" data-v-010eb52c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ep:user",
        size: "40px",
        class: "icon"
      }, null, _parent));
      _push(`<p data-v-010eb52c>Sobre mi</p></div><div class="${ssrRenderClass([unref(menuActive).experience ? "active" : "", "option"])}" data-v-010eb52c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "radix-icons:file-text",
        size: "40px",
        class: "icon"
      }, null, _parent));
      _push(`<p data-v-010eb52c>experiencia</p></div><div class="${ssrRenderClass([unref(menuActive).projects ? "active" : "", "option"])}" data-v-010eb52c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "carbon:ibm-cloud-projects",
        size: "40px",
        class: "icon"
      }, null, _parent));
      _push(`<p data-v-010eb52c>Proyectos</p></div><div class="${ssrRenderClass([unref(menuActive).contact ? "active" : "", "option"])}" data-v-010eb52c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "streamline:contact-phonebook-2",
        size: "40px",
        class: "icon"
      }, null, _parent));
      _push(`<p data-v-010eb52c>Contacto</p></div></div>`);
    };
  }
});
const menu_vue_vue_type_style_index_0_scoped_010eb52c_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-010eb52c"]]);
const about_vue_vue_type_style_index_0_scoped_be803a28_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-about" }, _attrs))} data-v-be803a28><div class="sub-title" data-v-be803a28>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:about",
    size: "30px",
    class: "icon"
  }, null, _parent));
  _push(`<h2 data-v-be803a28>Sobre mi</h2></div><p data-v-be803a28> Mi enfoque principal es entregar soluciones tecnológicas de alta calidad que no solo cumplan con las expectativas de los usuarios, sino que las superen. </p><p data-v-be803a28> Siempre estoy orientado hacia la mejora profesional y personal, disfruto compartiendo mis conocimientos con mis compañeros, ya que el poder de trabajar juntos en una misma dirección hace que alcanzar los objetivos y metas sea de manera más efectiva. </p><div class="sub-title" data-v-be803a28>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "eos-icons:job",
    size: "30px",
    class: "icon"
  }, null, _parent));
  _push(`<h2 data-v-be803a28>Lo que hago</h2></div><div class="cards" data-v-be803a28><div class="card" data-v-be803a28>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "material-symbols-light:developer-mode-tv-outline-sharp",
    size: "50px",
    class: "icon"
  }, null, _parent));
  _push(`<h3 data-v-be803a28>Desarrollo Frontend</h3><p data-v-be803a28> Me enfoco en crear interfaces web seguras, eficientes y atractivas. Escribo código estándar y bien documentado para aplicaciones escalables, priorizando la experiencia del usuario y la seguridad. </p></div><div class="card" data-v-be803a28>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "grommet-icons:services",
    size: "50px",
    class: "icon"
  }, null, _parent));
  _push(`<h3 data-v-be803a28>Desarrollo Backend</h3><p data-v-be803a28> Me especializo en la construcción de sistemas potentes y adaptables, mi enfoque se orienta hacia la creación de código meticuloso y bien documentado, enfocado en la seguridad y eficiencia de las aplicaciones. </p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contenido/about.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-be803a28"]]);
const resume_vue_vue_type_style_index_0_scoped_13b0b4e9_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-resume" }, _attrs))} data-v-13b0b4e9><div class="card-experience" data-v-13b0b4e9><div class="sub-title" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:briefcase",
    size: "30px",
    class: "icon"
  }, null, _parent));
  _push(`<h2 data-v-13b0b4e9>Experiencia</h2></div><div class="list circle" data-v-13b0b4e9><h3 data-v-13b0b4e9>Desarrollador Frontend</h3><p data-v-13b0b4e9>Enero 2023 - <span data-v-13b0b4e9>Present</span></p><p data-v-13b0b4e9>Freelance</p></div></div><div class="card-education" data-v-13b0b4e9><div class="sub-title" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "cil:education",
    size: "30px",
    class: "icon"
  }, null, _parent));
  _push(`<h2 data-v-13b0b4e9>Educación</h2></div><div class="list line circle" data-v-13b0b4e9><h3 data-v-13b0b4e9>Soy Henry</h3><p data-v-13b0b4e9>Mayo 2022 - Diciembre 2022</p><p data-v-13b0b4e9>Desarrollador Full Stack</p></div><div class="list circle" data-v-13b0b4e9><h3 data-v-13b0b4e9>Universidad San Pedro</h3><p data-v-13b0b4e9>Enero 2012 - Diciembre 2018</p><p data-v-13b0b4e9>Ingeniería de Sistemas</p></div></div><div class="card-skill" data-v-13b0b4e9><div class="sub-title" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "iconoir:developer",
    size: "30px",
    class: "icon"
  }, null, _parent));
  _push(`<h2 data-v-13b0b4e9>Skill</h2></div><div class="container-skill" data-v-13b0b4e9><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "vscode-icons:file-type-html",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>HTML5</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "vscode-icons:file-type-css",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>CSS</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:javascript",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>JavaScript</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "vscode-icons:file-type-typescript-official",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>TypeScript</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "vscode-icons:file-type-node",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>NodeJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "devicon:vuejs",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>VueJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:react",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>ReactJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "devicon:angular",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>AngularJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:nuxt-icon",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>NuxtJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:nextjs-icon",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>NextJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "devicon:git",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Git</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:github-octocat",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>GitHub</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:python",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Python</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:redux",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Redux</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:pinia",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Pinia</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "skill-icons:expressjs-light",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>ExpressJs</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:graphql",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>GraphQL</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:postgresql",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>PostgreSQL</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "dashicons:rest-api",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>API REST</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:jest",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Jest</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:swagger",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Swagger</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:jira",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Jira</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:sequelize",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Sequelize</p></div><div class="skill" data-v-13b0b4e9>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "devicon:figma",
    size: "55px"
  }, null, _parent));
  _push(`<p data-v-13b0b4e9>Figma</p></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contenido/resume.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-13b0b4e9"]]);
const contact_vue_vue_type_style_index_0_scoped_7c8abe78_lang = "";
const _sfc_main$1 = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const form = ref({
      from_name: "",
      email_id: "",
      message: ""
    });
    ({
      service_id: config.public.serviceId,
      template_id: config.public.templateId,
      user_id: config.public.publicKey,
      template_params: form.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-contact" }, _attrs))} data-v-7c8abe78><div class="sub-title" data-v-7c8abe78>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:contact-card-28-regular",
        size: "30px",
        class: "icon"
      }, null, _parent));
      _push(`<h2 data-v-7c8abe78>Contact</h2></div><div class="form" data-v-7c8abe78><p data-v-7c8abe78> Estoy buscando oportunidades para colaborar con empresas/agencias/individuos, no solo trabajar para ellos. Quiero aportar mi experiencia en un grupo colectivo donde podamos trabajar juntos para resolver problemas comerciales reales de una manera que optimice toda nuestra experiencia y conocimientos respectivos. </p><p data-v-7c8abe78>No dude en comunicarse a través de este formulario.</p><div class="inputs" data-v-7c8abe78><input type="text" required placeholder="Nombre" class="input" data-v-7c8abe78><input type="text" required placeholder="Correo electrónico" class="input" data-v-7c8abe78></div><textarea required placeholder="Mensaje" class="input" style="${ssrRenderStyle({ "height": "145px" })}" data-v-7c8abe78></textarea></div><button data-v-7c8abe78>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:send-fill",
        size: "25px",
        class: "icon"
      }, null, _parent));
      _push(` Enviar mensaje </button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contenido/contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c8abe78"]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cursorX = ref(0);
    const cursorY = ref(0);
    const showContent = ref({
      about: true,
      experience: false,
      contact: false
    });
    useColorMode();
    function contact() {
      showContent.value = { about: false, experience: false, contact: true };
    }
    function experiencia() {
      showContent.value = { about: false, experience: true, contact: false };
    }
    function about() {
      showContent.value = { about: true, experience: false, contact: false };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_Perfil = __nuxt_component_1;
      const _component_Menu = __nuxt_component_2;
      const _component_ContenidoAbout = __nuxt_component_3;
      const _component_ContenidoResume = __nuxt_component_4;
      const _component_ContenidoContact = __nuxt_component_5;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "cursor-container" }, _attrs))} data-v-5858d2bb><div class="cursor-light" style="${ssrRenderStyle({ left: unref(cursorX) + "px", top: unref(cursorY) + "px" })}" data-v-5858d2bb></div><div class="options" data-v-5858d2bb><div class="language linea" data-v-5858d2bb><div class="button-left" data-v-5858d2bb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "circle-flags:es-variant",
        size: "27px",
        class: "icon"
      }, null, _parent));
      _push(`</div><div class="button-right" data-v-5858d2bb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "circle-flags:us-um",
        size: "27px",
        class: "icon"
      }, null, _parent));
      _push(`</div></div><div class="theme linea" data-v-5858d2bb><div class="button-left" data-v-5858d2bb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "circum:sun",
        size: "27px",
        class: "icon"
      }, null, _parent));
      _push(`</div><div class="button-right" data-v-5858d2bb>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:baseline-dark-mode",
        size: "27px",
        class: "icon"
      }, null, _parent));
      _push(`</div></div></div><div class="container" data-v-5858d2bb>`);
      _push(ssrRenderComponent(_component_Perfil, null, null, _parent));
      _push(`<div class="content" data-v-5858d2bb>`);
      _push(ssrRenderComponent(_component_Menu, {
        class: "menu",
        onAbout: about,
        onContact: contact,
        onExperiencia: experiencia
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContenidoAbout, {
        style: unref(showContent).about ? null : { display: "none" },
        class: "contenido"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContenidoResume, {
        style: unref(showContent).experience ? null : { display: "none" },
        class: "contenido"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContenidoContact, {
        style: unref(showContent).contact ? null : { display: "none" },
        class: "contenido"
      }, null, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_5858d2bb_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5858d2bb"]]);
export {
  index as default
};
//# sourceMappingURL=index-99fa21f7.js.map
