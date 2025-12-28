<script setup lang="ts">
import { Line } from 'vue-chartjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { useSimulationStore } from '../stores/simulation';
import { reactive, computed, watch } from 'vue';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const simulationStore = useSimulationStore();

// reactive wrapper for chartData
const chartData = computed(() => {
    const prices = simulationStore.getSimulationResultsPrices;
    const operations = simulationStore.getSimulationResultsOperations;

    const opsCount = Object.keys(operations).length;
    const pointRadius = opsCount < 200 ? 6 : opsCount <= 400 ? 4 : 3;

    const timestamps = Object.keys(prices)
        .map(Number)
        .sort((a, b) => a - b);

    return {
        labels: timestamps.map(ts => new Date(ts).toLocaleDateString()),
        datasets: [
            {
                label: 'Buys',
                data: timestamps.map(ts => {
                    const ops = operations[ts];
                    const buyOp = ops?.find(op => op.type === 'buy');
                    return buyOp ? prices[ts] : null;
                }),
                pointBackgroundColor: 'green',
                pointBorderColor: 'green',
                pointRadius: pointRadius,
                borderWidth: 0,
                showLine: false,
            },
            {
                label: 'Sells',
                data: timestamps.map(ts => {
                    const ops = operations[ts];
                    const sellOp = ops?.find(op => op.type === 'sell');
                    return sellOp ? prices[ts] : null;
                }),
                pointBackgroundColor: 'red',
                pointBorderColor: 'red',
                pointRadius: pointRadius,
                borderWidth: 0,
                showLine: false,
            },
            {
                label: 'BTC Price',
                data: timestamps.map(ts => prices[ts]),
                borderColor: 'white',
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    };
});

const chartOptions = reactive({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: { color: 'white', font: { size: 16 } },
            grid: { color: 'rgba(255,255,255,0.2)' },
        },
        y: {
            ticks: { color: 'white', font: { size: 16 } },
            grid: { color: 'rgba(255,255,255,0.2)' },
        },
    },
});
</script>

<template>
    <Line :data="chartData" :options="chartOptions" />
</template>
