import type { AssetListElementProps } from './browse';

// object representation of currently selected asset
export interface CurrentAssetData {
    brief: AssetListElementProps;
    data: unknown;
}
