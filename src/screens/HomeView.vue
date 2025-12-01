<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';
import SimulationWalletInfo from '../components/SimulationWalletInfo.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';

const currentAssetStore = useCurrentAssetStore();
</script>

<template>
    <div class="body-background">
        <BigAssetBar />
        <div class="flex flex-1 my-8">
            <!-- high, low section -->
            <div class="w-1/6 flex-col">
                <SimulationWalletInfo
                    title="Low"
                    :amount="currentAssetStore.getCurrentPriceFormatted"
                    :class="'additional-sim-wallet'"
                />
                <SimulationWalletInfo
                    title="High"
                    :amount="currentAssetStore.getCurrentPriceFormatted"
                    :class="'additional-sim-wallet add-top-pad'"
                />
                <SimulationWalletInfo
                    title="Open Today"
                    :amount="currentAssetStore.getCurrentPriceFormatted"
                    :class="'additional-sim-wallet add-top-pad'"
                />
                <SimulationWalletInfo
                    title="Close Yesterday"
                    :amount="currentAssetStore.getCurrentPriceFormatted"
                    :class="'additional-sim-wallet add-top-pad'"
                />
            </div>

            <!-- mock for the chart -->
            <div
                class="flex-1 bg-(--secondarycomponentbackground) w-5/6 ml-2"
            ></div>
        </div>
    </div>
</template>
