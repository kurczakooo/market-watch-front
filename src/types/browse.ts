// props for asset list element component
export interface AssetListElementProps {
    name: string;
    ticker: string;
    currentPrice: number;
    logoUrl: string;
}

// props for asset search list component
export interface AssetSearchListProps {
    listTitle: string;
    assetsData: AssetListElementProps[];
}

// object representation of an asset data from backend
export interface AssetData {
    stock: AssetListElementProps[];
    etfs: AssetListElementProps[];
    commodities: AssetListElementProps[];
    crypto: AssetListElementProps[];
}
