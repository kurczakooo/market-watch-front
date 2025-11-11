import { defineStore } from 'pinia';
import type { SimStatusType } from '../types/simulationPrep';

export const useSimulationStore = defineStore('simulationStore', {
    state: (): {
        simulationState: SimStatusType;
        simulationProgress: number;
        simulationDuration: number;
    } => ({
        simulationState: 'ready',
        simulationProgress: 0,
        simulationDuration: 0,
    }),

    getters: {
        getSimulationState: state => state.simulationState,
        getSimulationProgress: state => state.simulationProgress,
        getSimulationDuration: state => state.simulationDuration,
    },

    actions: {
        setSimState(state: SimStatusType) {
            this.simulationState = state;
        },

        setSimProgress(progress: number) {
            this.simulationProgress = progress;
        },

        setSimDuration(duration: number) {
            this.simulationDuration = duration;
        },
    },
});
