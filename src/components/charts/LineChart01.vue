<script>
import { onMounted, onUnmounted, ref } from "vue";
import {
  Chart, Filler, LineController, LineElement, LinearScale, PointElement, TimeScale, Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { formatValue, tailwindConfig } from "../utils/Utils";

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

export default {
  name: "LineChart01",
  props: ["data", "width", "height"],
  setup(props) {
    const canvas = ref(null);
    let chart = null;

    onMounted(() => {
      const ctx = canvas.value;
      chart = new Chart(ctx, {
        type: "line",
        data: props.data,
        options: {
          chartArea: {
            backgroundColor: tailwindConfig().theme.colors.gray[50],
          },
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              display: false,
              beginAtZero: true,
            },
            x: {
              type: "time",
              time: {
                parser: "MM-DD-YYYY",
                unit: "month",
              },
              display: false,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: () => false, // Disable tooltip title
                label: context => formatValue(context.parsed.y),
              },
            },
            legend: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
            mode: "nearest",
          },
          maintainAspectRatio: false,
          resizeDelay: 200,
        },
      });
    });

    onUnmounted(() => chart.destroy());

    return {
      canvas,
    };
  },
};
</script>

<template>
  <canvas ref="canvas" :data="data" :width="width" :height="height" />
</template>
