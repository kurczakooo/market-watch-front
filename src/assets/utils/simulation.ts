import type { SimLog } from '../../types/simulation';

export const exampleLogs: SimLog[] = [];

function generateId() {
    return 'pos_' + Math.random().toString(16).slice(2, 10);
}

const positionsCount = 25;

for (let i = 0; i < positionsCount; i++) {
    const positionId = generateId();

    // random open time in last 50 days
    const now = Date.now();
    const openTimestamp =
        now -
        Math.random() * 50 * 24 * 60 * 60 * 1000 - // within 50 days
        Math.random() * 6 * 60 * 60 * 1000; // ± few hours

    // sell happens after buy (1h → 72h)
    const closeTimestamp =
        openTimestamp + (Math.random() * 72 + 1) * 60 * 60 * 1000;

    // position amount (constant for open + close)
    const amount = +(Math.random() * 0.29 + 0.01).toFixed(4);

    // prices
    const btcPriceOpen = 58000 + Math.random() * 4000;
    const btcPriceClose = 58000 + Math.random() * 4000;

    const openValue = +(amount * btcPriceOpen).toFixed(2);
    const closeValue = +(amount * btcPriceClose).toFixed(2);

    exampleLogs.push({
        positionId,
        date: openTimestamp,
        action: 'buy',
        amount,
        value: openValue,
    });

    exampleLogs.push({
        positionId,
        date: closeTimestamp,
        action: 'sell',
        amount,
        value: closeValue,
    });
}

// natural timeline
exampleLogs.sort((a, b) => a.value - b.value);
