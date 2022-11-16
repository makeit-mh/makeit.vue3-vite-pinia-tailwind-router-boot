<script setup lang="ts">
import { logLabeled } from "./utils/logger";
import AppNavbar from "./components/layout/Navbar/index.vue";
import AppSidebar from "./components/layout/Sidebar/index.vue";
import AppFooter from "./components/layout/Footer/index.vue";
import AppPanel from "./components/layout/Panel/index.vue";
logLabeled("App boosted!  ⸜(๑'ᵕ'๑)⸝⋆*", "log", "", "color: #66cc11");

const sidebarOpen = ref(false);
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <AppSidebar :sidebar-open="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <!-- Content area -->
    aaaaaaaaaaaaaaaaa

    <!-- Site header -->
    <AppNavbar :sidebar-open="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />cccc
    <AppPanel>
      dddd
    </AppPanel>
    <RouterView />
    <AppFooter />
  </div>
</template>
