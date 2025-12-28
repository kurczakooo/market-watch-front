import { defineStore, getActivePinia } from 'pinia';
// import type { CurrentAssetData } from '../types/currentAsset';
import type { AssetListElementProps } from '../types/browse';
import assetList from '../assets/utils/browse';
import { formatMoneyNumbers } from '../stores/simulation';
import type { SimAvailableIndicators } from '../types/simulationPrep';

export const useCurrentAssetStore = defineStore('currentAssetStore', {
    state: (): {
        initialized: boolean;
        assetData: AssetListElementProps;
        activeIndicator: SimAvailableIndicators | '';
    } => ({
        initialized: false,
        assetData: {} as AssetListElementProps,
        activeIndicator: '',
    }),

    getters: {
        getBriefInfo(state) {
            // later return assetData.brief
            return state.assetData;
        },

        getCurrentPriceFormatted: state =>
            formatMoneyNumbers(state.assetData.currentPrice),

        getCurrentPrice: state => state.assetData.currentPrice,

        getCurrentTicker: state => state.assetData.ticker,

        getActiveIndicator: state => state.activeIndicator,
    },

    actions: {
        initOnce() {
            // in the future, use a service here to send an initial request to btain some starting data of an asset
            if (this.initialized) return;

            this.setCurrentAsset(assetList['crypto'][0]!);

            this.initialized = true;
        },

        setCurrentAsset(data: AssetListElementProps) {
            // right now only get basic details no data, for displaying names etc,
            // later set a default parameters for data request, and send a request
            // to obtain the queried data from backend, build currentAsset here and
            // set to assetData

            this.assetData = data;
        },

        setCurrentAssetNewPrice(price: number) {
            if (this.assetData) {
                this.assetData.currentPrice = price;
            }
        },

        SetActiveIndicator(indicator: SimAvailableIndicators | '') {
            this.activeIndicator = indicator;
        },
    },
});
