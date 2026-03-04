<script setup>
definePageMeta({
  layout: false,
});

onMounted(() => {
  navigateTo("https://glib-nonadjunctively-emiko.ngrok-free.dev/", {
    external: true,
  });
});
</script>

<template>
  <div>
    <h3>Forwarding to app…</h3>
  </div>
</template>

<style scoped>
div {
  padding-top: 30%;
  background: #222;
  color: #f1f1f1;
  text-align: center;
  font-family: sans-serif;
}
</style>
