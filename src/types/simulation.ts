// type representing a sim log object
export interface SimLog {
    positionId: string;
    date: number;
    action: 'buy' | 'sell';
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
