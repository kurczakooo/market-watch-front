import type { SimLog } from '../../types/simulation';

export const exampleLogs: SimLog[] = Array.from({ length: 50 }, (_, i) => {
    // simulate a trade roughly once per day, sometimes offset by a few hours
    const daysAgo = 50 - i;
    const timestamp =
        Date.now() -
        daysAgo * 24 * 60 * 60 * 1000 -
        Math.random() * 6 * 60 * 60 * 1000;

    const action = Math.random() > 0.5 ? 'buy' : 'sell';

    // amount between 0.01 BTC and 0.3 BTC
    const amount = +(Math.random() * 0.29 + 0.01).toFixed(4);

    // approximate BTC price between $58k and $62k
    const btcPrice = 100000 + Math.random() * 4000;

    const value = +(amount * btcPrice).toFixed(2);

    return {
        date: timestamp,
        action,
        amount,
        value,
    };
});
