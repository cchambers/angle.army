<script setup>
onMounted(() => {
  navigateTo("https://www.youtube.com/channel/UC-y_T4dJf9l9I4f-ZUb59pg/live", {
    external: true,
  });
});
</script>

<template>
  <div>
    <h3>Off to youtube!</h3>
    <!-- Logo or something -->
  </div>
</template>

<style lang="scss">
body {
  padding-top: 30%;
  background: #222;
  color: #f1f1f1;
  text-align: center;
  font-family: sans-serif;
}
</style>
