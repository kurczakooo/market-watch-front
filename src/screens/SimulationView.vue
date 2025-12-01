<script setup lang="ts">
import { computed } from 'vue';
import CurrentAssetNameBox from '../components/CurrentAssetNameBox.vue';
import SimulationProgressBar from '../components/SimulationProgressBar.vue';
import SimulationWalletInfo from '../components/SimulationWalletInfo.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';
import { useSimulationStore, formatMoneyNumbers } from '../stores/simulation';
import type { FormattedLog, SimLog } from '../types/simulation';

const simulationStore = useSimulationStore();
const currentAssetStore = useCurrentAssetStore();

const getFormattedLog = (log: SimLog): FormattedLog => {
    var formattedLog: FormattedLog = {
        positionId: log.positionId.toString(),
        date: new Date(log.date).toLocaleDateString('en-GB'),
        action: log.action,
        amount: `${log.amount}   ${currentAssetStore.getCurrentTicker}`,
        value: `${formatMoneyNumbers(log.value)}`,
    };

    return formattedLog;
};

const formattedLogs = computed(() =>
    simulationStore.getSimulationLogs.map(log => getFormattedLog(log))
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
            <!-- fixed div to represent the chart in the future -->
            <div class="w-full bg-black rounded-3xl m-2"></div>
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
            <div
                class="common-sim-div w-2/3 h-full max-h-80 py-3 overflow-y-scroll"
            >
                <div
                    v-for="log in formattedLogs"
                    :key="log.date"
                    class="flex justify-between px-2 py-1"
                    :class="
                        log.action === 'sell'
                            ? 'text-(--red)'
                            : 'text-(--green)'
                    "
                >
                    <span class="log text-(--unselectedtext)">{{
                        log.positionId
                    }}</span>
                    <span class="log">{{ log.date.toLocaleString() }}</span>
                    <span class="log uppercase">{{ log.action }}</span>
                    <span class="log">{{ log.amount }}</span>
                    <span class="log">{{ log.value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
