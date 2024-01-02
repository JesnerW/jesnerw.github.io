<template>
  <div class="modal" @click="closeModal">
    <div class="iframe-container">
      <iframe
        border="0"
        loading="lazy"
        :src="url"
        title="Página web incrustada"
        style="overflow: hidden"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["url"]);
const url = ref("");

const emit = defineEmits(["cerrarModal"]);

function closeModal() {
  emit("cerrarModal");
}
watch(props, () => {
  url.value = props.url;
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
}
.iframe-container {
  position: relative;
  height: 80vh;
  width: 80vw;
  overflow-x: hidden;
  overflow-y: hidden;
}
iframe {
  position: absolute;
  overflow-x: hidden;
  background-color: white;
  top: 0;
  border: 0;
  width: 100%;
  height: calc(100% + 17px);
}
</style>
