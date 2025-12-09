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
                    // green buy markers
                    {
                        label: 'Buys',
                        data: Object.keys(simResData.price).map(timestamp => {
                            const ops = simResData.operations[timestamp];
                            if (ops) {
                                const buyOp = ops.find(op => op.type === 'buy');
                                if (buyOp) {
                                    return simResData.price[timestamp];
                                }
                            }
                            return null;
                        }),
                        pointBackgroundColor: 'green',
                        pointBorderColor: 'green',
                        pointRadius: 6,
                        borderWidth: 0,
                        showLine: false,
                    },

                    // red sell markers
                    {
                        label: 'Sells',
                        data: Object.keys(simResData.price).map(timestamp => {
                            const ops = simResData.operations[timestamp];
                            if (ops) {
                                const sellOp = ops.find(
                                    op => op.type === 'sell'
                                );
                                if (sellOp) {
                                    return simResData.price[timestamp];
                                }
                            }
                            return null;
                        }),
                        pointBackgroundColor: 'red',
                        pointBorderColor: 'red',
                        pointRadius: 6,
                        borderWidth: 0,
                        showLine: false,
                    },

                    // main asset price line
                    {
                        label: 'BTC Price',
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
