<script>
import { ref } from "vue";

import SearchModal from "~/components/controls/ModalSearch.vue";
import Notifications from "~/components/controls/DropdownNotifications.vue";
import Help from "~/components/controls/DropdownHelp.vue";
import UserMenu from "~/components/controls/DropdownProfile.vue";

export default {
  name: "AppHeader",
  components: {
    SearchModal,
    Notifications,
    Help,
    UserMenu,
  },
  props: ["sidebarOpen"],
  emits: ["toggleSidebar"],
  setup() {
    const searchModalOpen = ref(false);
    return {
      searchModalOpen,
    };
  },
};
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-gray-200 bg-white">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="-mb-px flex h-16 items-center justify-between">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button class="text-gray-500 hover:text-gray-600 lg:hidden" aria-controls="sidebar" :aria-expanded="sidebarOpen" @click.stop="$emit('toggleSidebar')">
            <span class="sr-only">Open sidebar</span>
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <button
            class="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition duration-150 hover:bg-gray-200"
            :class="{ 'bg-gray-200': searchModalOpen }"
            aria-controls="search-modal"
            @click.stop="searchModalOpen = true"
          >
            <span class="sr-only">Search</span>
            <svg class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-current text-gray-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
              <path class="fill-current text-gray-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
          </button>
          <SearchModal id="search-modal" search-id="search" :modal-open="searchModalOpen" @open-modal="searchModalOpen = true" @close-modal="searchModalOpen = false" />
          <Notifications align="right" />
          <Help align="right" />
          <ThemeChange />
          <!-- Divider -->
          <hr class="h-6 w-px bg-gray-200">
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>
