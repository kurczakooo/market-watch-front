// Configuration settings for the application

const config = {
    // API base URL
    apiBaseUrl: '/api/',

    // API URL for static resources
    apiStaticUrl: '/static/',

    // Application title
    appTitle: 'Market Screener',

    // other configuration settings
    defaultLanguage: 'en',
    itemsPerPage: 10,

    AppAvailableMetrics: {
        RSI: 'Relative Strength Index (RSI) is a momentum oscillator that measures the speed and magnitude of recent price changes to identify overbought or oversold conditions. Values above 70 indicate overbought, below 30 oversold. RSI helps spot potential reversals, divergences, and trend strength. It is widely used to detect bullish/bearish divergences, confirm price action, and as a filter for entry/exit points in trend-following and counter-trend strategies.',

        BB: 'Bollinger Bands (BB) consist of a moving average with upper and lower bands set by standard deviations. They measure market volatility and can signal overbought or oversold conditions, price squeezes, and potential breakouts. Traders use BB to confirm trend continuation or reversal. Narrow bands indicate low volatility and potential breakouts, while wide bands suggest high volatility and potential exhaustion. BB can also be combined with RSI or momentum indicators for more robust signals.',

        SMA: 'Simple Moving Average (SMA) calculates the arithmetic mean of prices over a period, smoothing price data and highlighting the overall trend. SMA helps identify support and resistance levels, trend direction, and crossovers. Crossovers between short-term and long-term SMAs often generate buy/sell signals, and SMA can be used to filter trades in line with the prevailing trend to reduce false signals.',

        WMA: 'Weighted Moving Average (WMA) assigns more weight to recent prices, making it more responsive than SMA. It helps detect short-term trends and reversals faster. WMA is often used in crossover strategies, smoothing data while keeping sensitivity to current price changes. Traders may combine WMA with other momentum indicators for precise entry or exit points, especially in fast-moving markets.',

        KC: 'Keltner Channel (KC) is a volatility-based indicator that uses an exponential moving average and ATR-based bands. It highlights trend strength, breakouts, and potential price reversals. Prices touching or breaking KC bands may indicate strong momentum or retracement. KC can be used to confirm trends, set trailing stops, or identify overextended conditions when combined with other indicators like RSI or MACD.',

        UI: 'Ulcer Index (UI) measures downside risk by focusing on price drawdowns rather than overall volatility. It quantifies the depth and duration of declines, helping traders and investors assess risk exposure and compare securities based on potential losses. UI is particularly useful for evaluating investment risk, position sizing, and for constructing low-volatility portfolios or backtesting trading strategies focused on drawdown control.',

        FI: 'Force Index (FI) combines price movement and volume to gauge buying or selling pressure. Positive values indicate bullish strength, negative values bearish strength. FI helps confirm trends, anticipate reversals, and identify potential entry or exit points based on momentum shifts. FI can be smoothed with an EMA to reduce noise and is often used alongside trend indicators to validate signals or divergence setups.',

        TRIX: 'TRIX is a momentum oscillator based on the rate of change of a triple-smoothed exponential moving average. It filters market noise while showing trend direction and strength. Crossovers of the zero line or signal line generate buy/sell signals, useful in trend-following strategies. TRIX is particularly effective in identifying long-term trends, filtering out minor price fluctuations, and spotting divergences between price and momentum.',

        KST: 'Know Sure Thing (KST) Oscillator is a momentum indicator using multiple smoothed ROC values. It identifies major market cycles, long-term trend reversals, and momentum shifts. Traders use KST for timing entries/exits and confirming trend continuation across multiple timeframes. KST can also highlight bullish or bearish divergences, and when combined with moving averages, it improves trade signal reliability.',

        SRSI: 'Stochastic RSI (SRSI) applies the Stochastic formula to RSI values, producing a sensitive oscillator for overbought/oversold conditions. Values above 0.8 indicate overbought, below 0.2 oversold. It reacts quickly to short-term changes, helping spot precise entry points. SRSI is particularly useful for scalping and short-term trading strategies, providing early signals of momentum shifts and potential reversals.',

        ROC: 'Rate of Change (ROC) measures the percentage change in price over a specific period, highlighting momentum shifts. Positive values indicate upward momentum, negative downward. ROC is used to detect trend strength, potential reversals, and divergences when compared with price movement. ROC can be combined with moving averages, MACD, or RSI to confirm momentum changes and filter trades in line with prevailing trends.',
    } as const,

    simulationStrategyAvailableRuleTypes: ['buy', 'sell'] as const,
    simulationStrategyAvailableOperators: ['<', '>', '<=', '>=', '=='] as const,
    simulationStrategyAvailableRuleLogicOperators: ['and', 'or'] as const,
};

export default config;
