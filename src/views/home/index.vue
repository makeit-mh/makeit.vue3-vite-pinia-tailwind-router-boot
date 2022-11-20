<script>
import { ref } from "vue";
import WelcomeBanner from "./components/WelcomeBanner.vue";
import DashboardAvatars from "./components/DashboardAvatars.vue";
import DashboardCard01 from "./components/DashboardCard01.vue";
import DashboardCard02 from "./components/DashboardCard02.vue";
import DashboardCard03 from "./components/DashboardCard03.vue";
import DashboardCard04 from "./components/DashboardCard04.vue";
import DashboardCard05 from "./components/DashboardCard05.vue";
import DashboardCard06 from "./components/DashboardCard06.vue";
import DashboardCard07 from "./components/DashboardCard07.vue";
import DashboardCard08 from "./components/DashboardCard08.vue";
import DashboardCard09 from "./components/DashboardCard09.vue";
import DashboardCard10 from "./components/DashboardCard10.vue";
import DashboardCard11 from "./components/DashboardCard11.vue";
import DashboardCard12 from "./components/DashboardCard12.vue";
import DashboardCard13 from "./components/DashboardCard13.vue";
import Banner from "./components/Banner.vue";
import Datepicker from "~/components/controls/Datepicker.vue";
import FilterButton from "~/components/controls/DropdownFilter.vue";
import AppHeader from "~/components/layout/Navbar/index.vue";
import AppSidebar from "~/components/layout/Sidebar/index.vue";

export default {
  name: "Dashboard",
  components: {
    WelcomeBanner,
    DashboardAvatars,
    FilterButton,
    Datepicker,
    DashboardCard01,
    DashboardCard02,
    DashboardCard03,
    DashboardCard04,
    DashboardCard05,
    DashboardCard06,
    DashboardCard07,
    DashboardCard08,
    DashboardCard09,
    DashboardCard10,
    DashboardCard11,
    DashboardCard12,
    DashboardCard13,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
    };
  },
};
</script>

<template>
  <main>
    <div class="max-w-9xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
      <!-- Welcome banner -->
      <WelcomeBanner />

      <!-- Dashboard actions -->
      <div class="mb-8 sm:flex sm:items-center sm:justify-between">
        <!-- Left: Avatars -->
        <DashboardAvatars />

        <!-- Right: Actions -->
        <div class="grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
          <!-- Filter button -->
          <FilterButton align="right" />
          <!-- Datepicker built with flatpickr -->
          <Datepicker align="right" />
          <!-- Add view button -->
          <button class="btn bg-indigo-500 text-white hover:bg-indigo-600">
            <svg class="h-4 w-4 shrink-0 fill-current opacity-50" viewBox="0 0 16 16">
              <path
                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
              />
            </svg>
            <span class="xs:block ml-2 hidden">Add view</span>
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-12 gap-6">
        <!-- Line chart (Acme Plus) -->
        <DashboardCard01 />
        <!-- Line chart (Acme Advanced) -->
        <DashboardCard02 />
        <!-- Line chart (Acme Professional) -->
        <DashboardCard03 />
        <!-- Bar chart (Direct vs Indirect) -->
        <DashboardCard04 />
        <!-- Line chart (Real Time Value) -->
        <DashboardCard05 />
        <!-- Doughnut chart (Top Countries) -->
        <DashboardCard06 />
        <!-- Table (Top Channels) -->
        <DashboardCard07 />
        <!-- Line chart (Sales Over Time) -->
        <DashboardCard08 />
        <!-- Stacked bar chart (Sales VS Refunds) -->
        <DashboardCard09 />
        <!-- Card (Customers)  -->
        <DashboardCard10 />
        <!-- Card (Reasons for Refunds)   -->
        <DashboardCard11 />
        <!-- Card (Recent Activity) -->
        <DashboardCard12 />
        <!-- Card (Income/Expenses) -->
        <DashboardCard13 />
      </div>
    </div>
  </main>
</template>
