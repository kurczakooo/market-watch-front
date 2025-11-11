<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';
import StartingParamsSection from '../components/StartingParamsSection.vue';
import SimulationControlPanel from '../components/SimulationControlPanel.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';

const currentAssetStore = useCurrentAssetStore();
</script>

<template>
    <div class="body-background flex-col">
        <BigAssetBar />
        <div class="flex py-8">
            <!-- simulation starting parameters -->
            <StartingParamsSection />

            <!-- simulation controls -->
            <SimulationControlPanel />
        </div>
    </div>
</template>
