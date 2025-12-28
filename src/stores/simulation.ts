import { defineStore } from 'pinia';
import type {
    SetterArgForStartingParams,
    SimStartParamsDict,
} from '../types/simulationPrep';
import type { SimResultsData, SimStatusType } from '../types/simulation';
import { simResData } from '../assets/utils/simulation';

export const useSimulationStore = defineStore('simulationStore', {
    state: (): {
        simulationStartingParams: SimStartParamsDict;

        simulationState: SimStatusType;
        simulationProgress: number;
        simulationDuration: number;

        simulationCash: number;
        simulationAssetOwned: number;
        simulationAssetValue: number;
        simulationPortfolioValue: number;
        simulationData: SimResultsData | null;
    } => ({
        simulationStartingParams: {
            depo: null,
            openfee: null,
            closefee: null,
            possize: null,
            startdate: null,
            enddate: null,
        },

        simulationState: 'not ready',
        simulationProgress: 0,
        simulationDuration: 0,

        simulationCash: 0,
        simulationAssetOwned: 0,
        simulationAssetValue: 0,
        simulationPortfolioValue: 0,
        simulationData: null,
    }),

    getters: {
        getSimulationStartingParams: state => state.simulationStartingParams,
        getSimulationState: state => state.simulationState,
        getSimulationProgress: state => state.simulationProgress,
        getSimulationDuration: state => state.simulationDuration,
        getSimulationCash: state => state.simulationCash,
        getSimulationAssetOwned: state => state.simulationAssetOwned,
        getSimulationAssetValue: state => state.simulationAssetValue,
        getSimulationPortfolioValue: state => state.simulationPortfolioValue,

        getSimulationResultsFullData: state => state.simulationData,
        getSimulationResultsPrices: state =>
            state.simulationData ? state.simulationData.price : [],
        getSimulationResultsOperations: state =>
            state.simulationData ? state.simulationData.operations : [],

        getSimulationLogs: state =>
            state.simulationData ? state.simulationData.operations : [],

        getSimulationCashFormatted(state) {
            return formatMoneyNumbers(state.simulationCash);
        },
        getSimulationAssetValueFormatted(state) {
            return formatMoneyNumbers(state.simulationAssetValue);
        },
        getSimulationPortfolioValueFormatted(state) {
            return formatMoneyNumbers(state.simulationPortfolioValue);
        },
    },

    actions: {
        // setters for simulation starting parameters, with type validation
        setStartingParam(paramType: SetterArgForStartingParams, input: string) {
            if (paramType === 'depo') {
                const value = Number(input.replace(',', '.'));
                if (!Number.isFinite(value)) {
                    return false;
                }
                if (value <= 0 || value > 1_000_000_000) {
                    return false;
                }
                this.simulationStartingParams.depo = value;
                return true;
            } else if (
                paramType === 'openfee' ||
                paramType === 'closefee' ||
                paramType === 'possize'
            ) {
                const value = Number(input.replace(',', '.'));
                if (!Number.isFinite(value)) {
                    return false;
                }
                if (value <= 0 || value > 100) {
                    return false;
                }
                this.simulationStartingParams[paramType] = value;
                return true;
            } else if (paramType === 'startdate' || paramType === 'enddate') {
                const date = new Date(input);
                const today = new Date();
                today.setHours(0, 0, 0, 0); // today at 00:00:00
                const minDate = new Date('1990-01-01');

                // in the future also check startdate >= actual first trade date of current asset
                // instead of the minDate, the minDate should be currentAsset.details.firstTradeDate

                // check if start date > minDate and <= today
                // check if end date <= start date and <= today
                // if (!(date <= today)) return false;

                // if (paramType === 'startdate') {
                //     if (!(date >= minDate)) return false;
                // }

                // if (
                //     paramType === 'enddate' &&
                //     this.simulationStartingParams.startdate
                // ) {
                //     if (
                //         !(
                //             date.getTime() >=
                //             this.simulationStartingParams.startdate
                //         )
                //     )
                //         return false;
                // }

                this.simulationStartingParams[paramType] = date.getTime();
                console.log(this.simulationStartingParams[paramType]);
                return true;
            }
        },

        resetStartingParams() {
            console.log(this.simulationStartingParams);
            this.simulationStartingParams = {
                depo: null,
                openfee: null,
                closefee: null,
                possize: null,
                startdate: null,
                enddate: null,
            };
            console.log(this.simulationStartingParams);
        },

        setSimState(state: SimStatusType) {
            this.simulationState = state;
        },
        setSimProgress(progress: number) {
            this.simulationProgress = progress;
        },
        setSimDuration(duration: number) {
            this.simulationDuration = duration;
        },
        setSimCash(deposit: number) {
            this.simulationCash = deposit;
        },
        setSimAssetOwned(holdings: number) {
            this.simulationAssetOwned = holdings;
        },
        setSimAssetValue(value: number) {
            this.simulationAssetValue = value;
        },
        setPortfolioValue(value: number) {
            this.simulationPortfolioValue = value;
        },

        sleep(ms: number) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },

        async startMockSimulation(steps = 100) {
            // guard – nie uruchamiaj drugi raz
            if (this.simulationState === 'ongoing') return;

            // 1️⃣ posortowane timestampy
            const timestamps = Object.keys(simResData.price)
                .map(Number)
                .sort((a, b) => a - b);

            // 2️⃣ init – tylko pierwszy punkt
            const firstTs = timestamps[0];

            this.simulationData = {
                asset: simResData.asset,
                price: {
                    [firstTs]: simResData.price[firstTs],
                },
                operations: simResData.operations[firstTs]
                    ? { [firstTs]: simResData.operations[firstTs] }
                    : {},
            };

            this.setSimState('ongoing');
            this.setSimProgress(0);
            this.setSimDuration(0);

            // 3️⃣ iteracyjne dokładanie danych
            for (let i = 1; i < timestamps.length; i++) {
                await this.sleep(100);

                const ts = timestamps[i];

                // ➕ dodaj nową cenę
                this.simulationData.price[ts] = simResData.price[ts];

                // ➕ dodaj operacje (jeśli są)
                if (simResData.operations[ts]) {
                    this.simulationData.operations[ts] =
                        simResData.operations[ts];

                    // ➕ zmien wartosci
                    this.setSimCash(simResData.operations[ts][0].cashAfter);
                    this.setSimAssetOwned(
                        simResData.operations[ts][0].assetOwnedAfter
                    );
                    this.setSimAssetValue(
                        simResData.operations[ts][0].ownedAssetValueAfter
                    );
                    this.setPortfolioValue(
                        simResData.operations[ts][0].portfolioValueAfter
                    );
                }

                this.setSimDuration(i);
                this.setSimProgress(
                    Math.round((i / (timestamps.length - 1)) * 100)
                );
            }

            this.setSimState('finished');
        },
    },
});

export function formatMoneyNumbers(value: number): string {
    return `$${value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

export function areStartingParamsComplete(
    params: Record<string, unknown>
): boolean {
    return Object.values(params).every(
        value => value !== null && value !== undefined
    );
}
