// type representing a sim log object
export interface SimLog {
    date: number;
    action: 'buy' | 'sell';
    amount: number;
    value: number;
}

export interface FormattedLog {
    date: string;
    action: 'buy' | 'sell';
    amount: string;
    value: string;
}
