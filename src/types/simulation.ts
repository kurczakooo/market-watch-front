// values accepted as simulation state
export type SimStatusType =
    | 'not ready'
    | 'ready'
    | 'ongoing'
    | 'finished'
    | 'cancelled';

export interface FormattedLog {
    positionId: string;
    date: string;
    action: 'buy' | 'sell';
    amount: string;
    value: string;
}

export interface SimOperationInfoBatch {
    id: number;
    type: 'buy' | 'sell';
    amount: number;
    value: number;
    cashAfter: number;
    assetOwnedAfter: number;
    ownedAssetValueAfter: number;
    portfolioValueAfter: number;
}

export interface SimResultsData {
    asset: string;
    price: Record<number, number>;
    operations: Record<number, SimOperationInfoBatch[]>;
}
