<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';
import MetricChoice from '../components/MetricChoice.vue';
import HomeScreenChart from '../components/HomeScreenChart.vue';
import PeriodSelection from '../components/PeriodSelection.vue';
import SimulationWalletInfo from '../components/SimulationWalletInfo.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';

const currentAssetStore = useCurrentAssetStore();
const description =
    'The relative strength index (RSI) is a momentum indicator \
                    used in technical analysis. RSI measures the speed and \
                    magnitude of a security\'s recent price changes to detect \
                    overbought or oversold conditions in the price of that \
                    security. The RSI is displayed as an oscillator (a line \
                    graph) on a scale of 0 to 100. "';
// \n\n\
// Traditionally, an RSI reading \
// of 70 or above indicates an overbought condition. A reading \
// of 30 or below indicates an oversold condition. In addition \
// to identifying overbought and oversold securities, the RSI \
// can also indicate securities that may be primed for a trend \
// reversal or a corrective pullback in price. \
// \n\n\
// The indicator was developed by J. Welles Wilder Jr. and introduced in his \
// seminal 1978 book. The RSI is one of the most popular technical \
// indicators, and it's generally available on most trading \
// platforms offered by online stock brokers.";
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
                <MetricChoice />
                <div class="formatted-desc">
                    {{ description }}
                </div>
            </div>
        </div>
    </div>
</template>
