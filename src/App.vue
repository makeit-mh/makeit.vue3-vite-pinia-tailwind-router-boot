<script setup lang="ts">
import { logLabeled } from "./utils/logger";
import AppNavbar from "./components/layout/Navbar/index.vue";
import AppSidebar from "./components/layout/Sidebar/index.vue";
import AppFooter from "./components/layout/Footer/index.vue";
logLabeled("App boosted!!!", "log", "", "color: #66cc11");

const sidebarOpen = ref(false);
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <AppSidebar :sidebar-open="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <AppHeader :sidebar-open="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <main>
        <div class="max-w-9xl px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
