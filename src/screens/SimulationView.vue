<script setup lang="ts">
import CurrentAssetNameBox from '../components/CurrentAssetNameBox.vue';
import SimulationProgressBar from '../components/SimulationProgressBar.vue';
import SimulationWalletInfo from '../components/SimulationWalletInfo.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';
import { useSimulationStore } from '../stores/simulation';

const simulationStore = useSimulationStore();
const currentAssetStore = useCurrentAssetStore();
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
        <div class="common-sim-div">Hi</div>

        <div class="flex">
            <!-- wallet info -->
            <div class="w-1/3 py-10 flex-col bg-amber-800">
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
            <div class="common-sim-div w-2/3">Sell, buy</div>
        </div>
    </div>
</template>
