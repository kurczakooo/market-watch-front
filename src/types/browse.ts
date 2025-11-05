// props for asset list element component
export interface AssetListElementProps {
    name: string;
    ticker: string;
    currentPrice: number;
    logoUrl: string;
}

// emits for asset list element component
export interface AssetListElementEmits {
    (e: 'select', asset: AssetListElementProps): void;
}

// props for asset search list component
export interface AssetSearchListProps {
    listTitle: string;
    assetsData: AssetListElementProps[];
}

// object representation of an asset data from backend
export interface AssetData {
    stocks: AssetListElementProps[];
    etfs: AssetListElementProps[];
    commodities: AssetListElementProps[];
    crypto: AssetListElementProps[];
}
