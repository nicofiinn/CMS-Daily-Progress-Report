<template>
  <div class="wrapper">
    <Navbar />
    <Sidebar />

    <div class="content-wrapper">
      <router-view />
    </div>

    <aside class="control-sidebar control-sidebar-dark"></aside>
  </div>
</template>

  <script>
import Navbar from "./inc/Navbar.vue";
import Sidebar from "./inc/Sidebar.vue";
export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>