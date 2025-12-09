<script>
import { homeChartData } from '../assets/utils/homeScreen';

import {
    CategoryScale,
    LinearScale,
    Tooltip,
    Chart as ChartJS,
} from 'chart.js';

import 'chartjs-chart-financial';

import { Chart } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, Tooltip);

export default {
    name: 'HomeScreenChart',
    components: { Chart },

    data() {
        const timestamps = Object.keys(homeChartData.Open);

        // candle dataset format
        const candleData = timestamps.map(ts => ({
            x: new Date(parseInt(ts)), // use x, not t
            o: homeChartData.Open[ts],
            h: homeChartData.High[ts],
            l: homeChartData.Low[ts],
            c: homeChartData.Close[ts],
        }));

        return {
            chartData: {
                datasets: [
                    {
                        label: 'Candles',
                        type: 'candlestick',
                        data: candleData,
                        color: {
                            up: '#00ff00',
                            down: '#ff2d2d',
                            unchanged: '#999',
                        },
                    },
                ],
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        time: { unit: 'day' },
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255,255,255,0.2)' },
                    },
                    y: {
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255,255,255,0.2)' },
                    },
                },
            },
        };
    },
};
</script>

<template>
    <Chart type="candlestick" :data="chartData" :options="chartOptions" />
</template>
