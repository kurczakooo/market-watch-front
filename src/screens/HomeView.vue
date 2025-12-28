<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';
import MetricChoice from '../components/MetricChoice.vue';
import HomeScreenChart from '../components/HomeScreenChart.vue';
import PeriodSelection from '../components/PeriodSelection.vue';
import SimulationWalletInfo from '../components/SimulationWalletInfo.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';
import type { SimAvailableIndicators } from '../types/simulationPrep';

const currentAssetStore = useCurrentAssetStore();

function addMetricToChart(metric: SimAvailableIndicators | '') {
    console.log(metric);
    currentAssetStore.SetActiveIndicator(metric);
}
</script>

<template>
    <div class="body-background">
        <BigAssetBar />
        <div class="home-grid mt-8">
            <!-- top left section -->
            <div class="flex justify-between">
                <!-- high, low section -->
                <div class="flex flex-col gap-7">
                    <SimulationWalletInfo
                        title="Low"
                        :amount="currentAssetStore.getCurrentPriceFormatted"
                        :class="'additional-sim-wallet'"
                    />
                    <SimulationWalletInfo
                        title="High"
                        :amount="currentAssetStore.getCurrentPriceFormatted"
                        :class="'additional-sim-wallet'"
                    />
                    <SimulationWalletInfo
                        title="Last Open"
                        :amount="currentAssetStore.getCurrentPriceFormatted"
                        :class="'additional-sim-wallet'"
                    />
                    <SimulationWalletInfo
                        title="Last Close"
                        :amount="currentAssetStore.getCurrentPriceFormatted"
                        :class="'additional-sim-wallet'"
                    />
                </div>
                <PeriodSelection />
            </div>

            <!-- top right, simulation chart -->
            <div class="common-sim-div">
                <HomeScreenChart class="sim-chart-container" />
            </div>

            <!-- bottom left, empty -->
            <div></div>

            <!-- bottom right, add metrics and additional info -->
            <!-- Metrics choice and desc -->
            <div class="flex flex-col gap-4 mt-2">
                <div class="text-3xl">Add metrics or indicators</div>
                <MetricChoice @select="addMetricToChart" />
            </div>
        </div>
    </div>
</template>
