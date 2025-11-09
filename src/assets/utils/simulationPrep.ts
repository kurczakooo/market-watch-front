export const iconList = [
    'pi-wallet',
    'pi-credit-card',
    'pi-chart-pie',
    'pi-money-bill',
    'pi-stop-circle',
    'pi-calendar',
    'pi-bars',
    'pi-calculator',
] as const;

export type IconKey = (typeof iconList)[number];
