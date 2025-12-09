<script setup lang="ts">
import { computed } from 'vue';
import CurrentAssetNameBox from '../components/CurrentAssetNameBox.vue';
import SimulationProgressBar from '../components/SimulationProgressBar.vue';
import SimulationWalletInfo from '../components/SimulationWalletInfo.vue';
import SimulationChart from '../components/SimulationChart.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';
import { useSimulationStore, formatMoneyNumbers } from '../stores/simulation';
import type { FormattedLog, SimLog } from '../types/simulation';

const simulationStore = useSimulationStore();
const currentAssetStore = useCurrentAssetStore();

const getFormattedLogs = (logs: Map<number, SimLog[]>): FormattedLog[] => {
    var formattedLogs: FormattedLog[] = [];

    for (const [date, logList] of Object.entries(logs)) {
        for (const log of logList) {
            formattedLogs.push({
                positionId: log.id.toString(),
                date: new Date(parseInt(date)).toLocaleString('en-US'),
                action: log.type,
                amount: `${log.amount}`,
                value: `${formatMoneyNumbers(log.value)}`,
            });
        }
    }

    return formattedLogs;
};

const formattedLogs = computed(() =>
    getFormattedLogs(simulationStore.getSimulationLogs)
);
</script>

<template>
    <div class="relative body-background gap-5">
        <!-- overlay shown when simulation is not ongoing or finished -->
        <div
            v-if="
                !['ongoing', 'finished'].includes(
                    simulationStore.getSimulationState
                )
            "
            class="absolute inset-0 flex items-center justify-center bg-black/70"
        >
            <p class="component-name text-white">
                To access this view, start a simulation in the Backtest Setup
                tab
            </p>
        </div>

        <!-- top bar with name and progress bar -->
        <div class="flex mt-4 items-center">
            <CurrentAssetNameBox />
            <div class="flex-col flex-1 ml-12 mt-6">
                <SimulationProgressBar />
            </div>
        </div>

        <!-- simulation chart -->
        <div class="common-sim-div">
            <SimulationChart class="sim-chart-container" />
        </div>

        <div class="flex">
            <!-- wallet info -->
            <div class="w-1/3 py-10 flex-col flex gap-6 ml-2">
                <SimulationWalletInfo
                    title="Deposit:"
                    :amount="simulationStore.getSimulationDepositFormatted"
                />
                <SimulationWalletInfo
                    :title="`${currentAssetStore.getCurrentTicker} holdings:`"
                    :amount="
                        simulationStore.getSimulationAssetHoldingsFormatted
                    "
                />
                <SimulationWalletInfo
                    title="Portfolio value:"
                    :amount="
                        simulationStore.getSimulationPortfolioValueFormatted
                    "
                />
            </div>

            <!-- simulation logs -->
            <div class="common-sim-div w-2/3 max-h-100 p-3">
                <div class="inner-log-container custom-scroll">
                    <div
                        v-for="log in formattedLogs"
                        :key="log.date"
                        class="log-box"
                    >
                        <span class="log text-(--unselectedtext)">{{
                            log.positionId
                        }}</span>
                        <span class="log">{{ log.date.toLocaleString() }}</span>
                        <span
                            class="log uppercase"
                            :class="
                                log.action === 'sell'
                                    ? 'text-(--red)'
                                    : 'text-(--green)'
                            "
                            >{{ log.action }}</span
                        >
                        <span class="log">{{ log.amount }}</span>
                        <span class="log">{{ log.value }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
