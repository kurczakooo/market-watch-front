<script setup>
import { Line } from 'vue-chartjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { computed } from 'vue';
import { simResData } from '../assets/utils/simulation';
import { useCurrentAssetStore } from '../stores/currentAsset';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const currentAssetStore = useCurrentAssetStore();

function calculateSMA(values, period = 14) {
    return values.map((_, i, arr) => {
        if (i < period - 1) return null;
        const slice = arr.slice(i - period + 1, i + 1);
        return slice.reduce((a, b) => a + b, 0) / period;
    });
}

function calculateRSI(values, period = 14) {
    let gains = 0;
    let losses = 0;

    return values.map((_, i) => {
        if (i === 0) return null;

        const diff = values[i] - values[i - 1];
        gains += diff > 0 ? diff : 0;
        losses += diff < 0 ? Math.abs(diff) : 0;

        if (i < period) return null;

        const avgGain = gains / period;
        const avgLoss = losses / period;

        if (avgLoss === 0) return 100;
        const rs = avgGain / avgLoss;
        return 100 - 100 / (1 + rs);
    });
}

const timestamps = Object.keys(simResData.price)
    .map(Number)
    .sort((a, b) => a - b);

const prices = timestamps.map(ts => simResData.price[ts]);
const sma = calculateSMA(prices, 14);
const rsi = calculateRSI(prices, 14);

const chartData = computed(() => {
    const datasets = [
        {
            label: 'BTC Price',
            data: prices,
            borderColor: 'white',
            borderWidth: 2,
            pointRadius: 0,
        },
    ];

    if (currentAssetStore.getActiveIndicator == 'SMA') {
        datasets.push({
            label: 'SMA (14)',
            data: sma,
            borderColor: 'orange',
            borderWidth: 2,
            borderDash: [6, 4],
            pointRadius: 0,
        });
    }

    if (currentAssetStore.getActiveIndicator == 'RSI') {
        datasets.push({
            label: 'SMA (14)',
            data: rsi,
            borderColor: 'blue',
            borderWidth: 3,
            pointRadius: 0,
        });
    }

    return {
        labels: timestamps.map(ts => new Date(ts).toLocaleDateString()),
        datasets,
    };
});

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
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
};
</script>

<template>
    <Line :data="chartData" :options="chartOptions" />
</template>
