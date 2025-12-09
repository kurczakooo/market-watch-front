// type representing a sim log object
export interface SimLog {
    id: number;
    type: 'buy' | 'sell';
    amount: number;
    value: number;
}

export interface FormattedLog {
    positionId: string;
    date: string;
    action: 'buy' | 'sell';
    amount: string;
    value: string;
}

export interface SimResultsData {
    asset: string;
    price: Map<number, number>;
    operations: Map<number, SimLog[]>;
}
