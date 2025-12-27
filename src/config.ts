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

    simulationStrategyAvailableIndicators: ['RSI', 'BB', 'MSA'] as const,
    simulationStrategyAvailableRuleTypes: ['buy', 'sell'] as const,
    simulationStrategyAvailableOperators: ['<', '>', '<=', '>=', '=='] as const,
    simulationStrategyAvailableRuleLogicOperators: ['and', 'or'] as const,
};

export default config;
