<script setup lang="ts">
import { ProgressBar, Button } from 'primevue';
import { ref, computed } from 'vue';
import { useSimulationStore } from '../stores/simulation';
import { useRouter } from 'vue-router';

const simulationStore = useSimulationStore();
const router = useRouter();

let intervalId: ReturnType<typeof setInterval> | null = null;

const onSimulationStart = () => {
    simulationStore.setSimState('ongoing');

    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        var currentProgress = simulationStore.getSimulationProgress;

        simulationStore.setSimDuration(
            simulationStore.getSimulationDuration + 1
        );

        if (currentProgress === 100) {
            clearInterval(intervalId!);
            intervalId = null;
            simulationStore.setSimState('finished');
            return;
        }

        simulationStore.setSimProgress(currentProgress + 1);

        console.log(simulationStore.getSimulationDuration);
        console.log(simulationStore.getSimulationProgress);
    }, 100);
};

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
    <!-- Simulation Controls -->
    <div class="w-1/3 flex-col flex rounded-3xl layer-background-color p-5">
        <!-- Progress Bar -->
        <ProgressBar
            :value="simulationStore.getSimulationProgress"
            :show-value="false"
            :pt="{ value: { class: 'bg-gray-500 h-4 rounded-full' } }"
            class="bg-gray-100 h-4 rounded-full"
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
        <!-- control buttons -->
        <div class="flex-col flex gap-6">
            <Button
                :class="[
                    simulationStore.getSimulationState === 'ready'
                        ? 'sim-control-panel-button green-color'
                        : 'sim-control-panel-button sim-control-disabled',
                ]"
                label="Start Simulation"
                :disabled="simulationStore.getSimulationState !== 'ready'"
                @click="onSimulationStart"
            ></Button>
            <Button
                :class="[
                    ['ongoing', 'finished'].includes(
                        simulationStore.getSimulationState
                    )
                        ? 'sim-control-panel-button component-background-color'
                        : 'sim-control-panel-button sim-control-disabled',
                ]"
                label="Simulation Screen"
                :disabled="
                    !['ongoing', 'finished'].includes(
                        simulationStore.getSimulationState
                    )
                "
                @click="
                    () => {
                        router.push('/simulation');
                    }
                "
            ></Button>
            <Button
                class="sim-control-panel-button component-background-color"
                label="Reset Parameters"
            ></Button>
        </div>
    </div>
</template>
