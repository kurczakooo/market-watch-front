<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';
import StartingParamsSection from '../components/StartingParamsSection.vue';
import SimulationStrategySection from '../components/SimulationStrategySection.vue';
import SimulationControlPanel from '../components/SimulationControlPanel.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';
import {
    areStartingParamsComplete,
    useSimulationStore,
} from '../stores/simulation';
import { ref, watch } from 'vue';

const currentAssetStore = useCurrentAssetStore();
const simulationStore = useSimulationStore();
const resetCounter = ref(false);

/**
 * On any change done to starting params, check if they are all filled to unlock the start button
 */
watch(
    () => simulationStore.simulationStartingParams,
    params => {
        if (areStartingParamsComplete(params)) {
            simulationStore.setSimState('ready');
        } else {
            simulationStore.setSimState('not ready');
        }
    },
    { deep: true, immediate: true }
);

function handleParamsReset() {
    // reset the input values
    resetCounter.value = !resetCounter.value;
    // reset the parameters in the store
    simulationStore.resetStartingParams();
}
</script>

<template>
    <div class="body-background">
        <BigAssetBar />
        <div class="flex flex-1 py-8">
            <!-- simulation starting parameters and rules-->
            <div class="w-3/4 flex-1 flex-col">
                <StartingParamsSection :reset-signal="resetCounter" />
                <SimulationStrategySection />
            </div>
            <div class="w-1/4">
                <!-- simulation controls -->
                <SimulationControlPanel @reset="handleParamsReset()" />
            </div>
        </div>
    </div>
</template>
