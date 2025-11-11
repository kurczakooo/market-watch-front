import { defineStore } from 'pinia';
import type { SimStatusType } from '../types/simulationPrep';

export const useSimulationStore = defineStore('simulationStore', {
    state: (): {
        simulationState: SimStatusType;
        simulationProgress: number;
        simulationDuration: number;

        // simulationStartingParams: SimStartParamsType;
        // simulationStrategy: SimStrategyType;

        simulationDeposit: number;
        simulationAssetHoldings: number;
        simulationPortfolioValue: number;
        // simulationLogs: JSON;
    } => ({
        simulationState: 'ready',
        simulationProgress: 0,
        simulationDuration: 0,
        simulationDeposit: 124231,
        simulationAssetHoldings: 43245,
        simulationPortfolioValue: 167476,
    }),

    getters: {
        getSimulationState: state => state.simulationState,
        getSimulationProgress: state => state.simulationProgress,
        getSimulationDuration: state => state.simulationDuration,
        getSimulationDeposit: state => state.simulationDeposit,
        getSimulationAssetHoldings: state => state.simulationAssetHoldings,
        getSimulationPortfolioValue: state => state.simulationPortfolioValue,

        getSimulationDepositFormatted(state) {
            return formatMoneyNumbers(state.simulationDeposit);
        },
        getSimulationAssetHoldingsFormatted(state) {
            return formatMoneyNumbers(state.simulationAssetHoldings);
        },
        getSimulationPortfolioValueFormatted(state) {
            return formatMoneyNumbers(state.simulationPortfolioValue);
        },
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
        setSimDeposit(deposit: number) {
            this.simulationDeposit = deposit;
        },
        setSimAssetHoldings(holdings: number) {
            this.simulationAssetHoldings = holdings;
        },
        calculateSimPortfolioValue() {
            this.simulationPortfolioValue =
                this.getSimulationDeposit + this.getSimulationAssetHoldings;
        },
    },
});

function formatMoneyNumbers(value: number): string {
    return `$${value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}
