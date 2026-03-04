export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/app" || to.path === "/app/") {
    return navigateTo("https://glib-nonadjunctively-emiko.ngrok-free.dev/", {
      external: true,
    });
  }
});
