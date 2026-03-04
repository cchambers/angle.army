<script setup>
definePageMeta({
  layout: false,
});

onMounted(() => {
  navigateTo("https://discord.gg/HypMUgBqZ3", {
    external: true,
  });
});
</script>

<template>
  <div>
    <h3>Loading Discord Invite!</h3>
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
