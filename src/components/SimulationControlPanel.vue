<script setup lang="ts">
import { Button } from 'primevue';
import { useSimulationStore } from '../stores/simulation';
import SimulationProgressBar from './SimulationProgressBar.vue';
import { useRouter } from 'vue-router';

const simulationStore = useSimulationStore();
const router = useRouter();
const resetEmit = defineEmits<{ reset: [] }>();

let intervalId: ReturnType<typeof setInterval> | null = null;

const onSimulationStart = () => {
    simulationStore.startMockSimulation();
};

function emitResetParams() {
    resetEmit('reset');
}
</script>

<template>
    <!-- Simulation Controls -->
    <div class="sim-control-panel">
        <!-- Progress Bar -->
        <SimulationProgressBar />
        <!-- control buttons -->
        <div class="flex flex-col h-full justify-center gap-6">
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
                @click="emitResetParams"
            ></Button>
        </div>
    </div>
</template>
