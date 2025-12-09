import { defineStore } from 'pinia';
import type { SimStatusType } from '../types/simulationPrep';
import type { SimLog, SimResultsData } from '../types/simulation';
import { simResData } from '../assets/utils/simulation';

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
        simulationData: SimResultsData;
    } => ({
        simulationState: 'ongoing',
        simulationProgress: 0,
        simulationDuration: 0,
        simulationDeposit: 124231,
        simulationAssetHoldings: 43245,
        simulationPortfolioValue: 167476,
        simulationData: simResData,
    }),

    getters: {
        getSimulationState: state => state.simulationState,
        getSimulationProgress: state => state.simulationProgress,
        getSimulationDuration: state => state.simulationDuration,
        getSimulationDeposit: state => state.simulationDeposit,
        getSimulationAssetHoldings: state => state.simulationAssetHoldings,
        getSimulationPortfolioValue: state => state.simulationPortfolioValue,
        getSimulationResultsData: state => state.simulationData,
        getSimulationLogs: state => state.simulationData.operations,

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

export function formatMoneyNumbers(value: number): string {
    return `$${value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}
