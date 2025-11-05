import { defineStore } from 'pinia';
import type { CurrentAssetData } from '../types/currentAsset';
import type { AssetListElementProps } from '../types/browse';

export const useCurrentAssetStore = defineStore('currentAssetStore', {
    state: () => ({
        assetData: {} as AssetListElementProps,
    }),
    actions: {
        setCurrentAsset(data: AssetListElementProps) {
            // right now only get basic details no data, for displaying names etc,
            // later set a default parameters for data request, and send a request
            // to obtain the queried data from backend, build currentAsset here and
            // set to assetData

            this.assetData = data;
        },
    },
    getters: {
        getBriefInfo(state) {
            // later return assetData.brief
            return this.assetData;
        },
        // getData(state){}
    },
});
