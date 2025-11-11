<script setup lang="ts">
import { ProgressBar } from 'primevue';
import { computed } from 'vue';
import { useSimulationStore } from '../stores/simulation';

const simulationStore = useSimulationStore();

const progressBarDisplay = computed(() => {
    if (['not ready', 'ready'].includes(simulationStore.getSimulationState)) {
        return 'Simulation not started yet';
    } else if (simulationStore.getSimulationState == 'ongoing') {
        return formattedDuration;
    } else if (simulationStore.getSimulationState == 'finished') {
        return `Simulation finished after ${formattedDuration.value}`;
    } else {
        return 'Simulation Interrupted';
    }
});

const formattedDuration = computed(() => {
    const minutes = Math.floor(simulationStore.getSimulationDuration / 60);
    const seconds = simulationStore.getSimulationDuration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});
</script>

<template>
    <ProgressBar
        :value="simulationStore.getSimulationProgress"
        :show-value="false"
        :pt="{ value: { class: 'golden-color h-4 rounded-full' } }"
        class="component-background-color h-4 rounded-full"
    />
    <div class="flex-1 flex justify-between">
        <p class="font-semibold">
            {{ simulationStore.getSimulationProgress }}%
        </p>
        <p
            class="font-semibold"
            :class="
                simulationStore.getSimulationState === 'ongoing'
                    ? 'text-white'
                    : simulationStore.getSimulationState === 'cancelled'
                    ? 'red-icon'
                    : 'unselected-text'
            "
        >
            {{ progressBarDisplay }}
        </p>
    </div>
</template>
