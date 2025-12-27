import type { AssetListElementProps } from './browse';

// object representation of currently selected asset
export interface CurrentAssetData {
    brief: AssetListElementProps;
    details: AssetDetails;
    data: unknown;
}

export interface DataPeriod {
    period: '1d' | '1w' | '1m' | '1y' | '5y' | 'max';
}

export interface AssetDetails {
    // ticker.info.longBusinessSummary
    description: string;
    // when this is implemented, get this date form yf.download(tickers="TSLA", period="max", interval="1mo") and get the first records date
    firstTradeDate: number;
    // maybe in the future add more fields
}
