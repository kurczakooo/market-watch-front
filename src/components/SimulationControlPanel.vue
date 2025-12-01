<script setup lang="ts">
import { Button } from 'primevue';
import { useSimulationStore } from '../stores/simulation';
import SimulationProgressBar from './SimulationProgressBar.vue';
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
    }, 1000);
};
</script>

<template>
    <!-- Simulation Controls -->
    <div class="w-1/3 sim-control-panel">
        <!-- Progress Bar -->
        <SimulationProgressBar />
        <!-- control buttons -->
        <div class="flex-col flex gap-6">
            <Button
                :class="[
                    simulationStore.getSimulationState === 'ready'
                        ? 'sim-control-panel-button green-color hover:bg-(--selectedcomponentbackground)'
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
                        ? 'sim-control-panel-button component-background-color hover:bg-(--selectedcomponentbackground)'
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
                class="sim-control-panel-button component-background-color hover:bg-(--selectedcomponentbackground)"
                label="Reset Parameters"
            ></Button>
        </div>
    </div>
</template>
