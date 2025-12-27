<script>
import { Line } from 'vue-chartjs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { simResData } from '../assets/utils/simulation';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

export default {
    name: 'SimulationChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: Object.keys(simResData.price).map(timestamp =>
                    new Date(parseInt(timestamp)).toLocaleDateString()
                ),
                datasets: [
                    // main asset price line
                    {
                        data: Object.values(simResData.price),
                        borderColor: 'white',
                        borderWidth: 2,
                        pointRadius: 0,
                    },
                ],
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            color: 'white',
                            font: {
                                size: 16,
                            },
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)',
                        },
                    },
                    y: {
                        ticks: {
                            color: 'white',
                            font: {
                                size: 16,
                            },
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.2)',
                        },
                    },
                },
            },
        };
    },
};
</script>

<template>
    <Line :data="chartData" :options="chartOptions" />
</template>
