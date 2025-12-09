import type { AssetListElementProps } from './browse';

// object representation of currently selected asset
export interface CurrentAssetData {
    brief: AssetListElementProps;
    data: unknown;
}

export interface DataPeriod {
    period: '1d' | '1w' | '1m' | '1y' | '5y' | 'max';
}
