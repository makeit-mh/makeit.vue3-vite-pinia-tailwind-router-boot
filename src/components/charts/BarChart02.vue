<script>
import { onMounted, onUnmounted, ref } from "vue";
import {
  BarController, BarElement, Chart, Legend, LinearScale, TimeScale, Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { formatValue } from "~/utils/Utils";

Chart.register(BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend);

export default {
  name: "BarChart02",
  props: ["data", "width", "height"],
  setup(props) {
    const canvas = ref(null);
    let chart = null;

    onMounted(() => {
      const ctx = canvas.value;
      chart = new Chart(ctx, {
        type: "bar",
        data: props.data,
        options: {
          layout: {
            padding: {
              top: 12,
              bottom: 16,
              left: 20,
              right: 20,
            },
          },
          scales: {
            y: {
              stacked: true,
              grid: {
                drawBorder: false,
              },
              beginAtZero: true,
              ticks: {
                maxTicksLimit: 5,
                callback: value => formatValue(value),
              },
            },
            x: {
              stacked: true,
              type: "time",
              time: {
                parser: "MM-DD-YYYY",
                unit: "month",
                displayFormats: {
                  month: "MMM YY",
                },
              },
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                autoSkipPadding: 48,
                maxRotation: 0,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                title: () => false, // Disable tooltip title
                label: context => formatValue(context.parsed.y),
              },
            },
          },
          interaction: {
            intersect: false,
            mode: "nearest",
          },
          animation: {
            duration: 200,
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
