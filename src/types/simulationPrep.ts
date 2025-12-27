import type { IconKey } from '../assets/utils/simulationPrep';
import config from '../config';

export type SetterArgForStartingParams =
    | 'depo'
    | 'openfee'
    | 'closefee'
    | 'possize'
    | 'startdate'
    | 'enddate';

export interface SimParamInputProps {
    id: SetterArgForStartingParams;
    icon: IconKey;
    placeholder: string;
    hintText: string;
    validationPattern: string;
    // max 35 characters to not wrap to a new line
    validationMessage: string;
    resetSignal: boolean;
}

export interface SimStartParamsDict {
    depo: number | null;
    openfee: number | null;
    closefee: number | null;
    possize: number | null;
    startdate: number | null;
    enddate: number | null;
}

// SIMULATION STATEGY TYPES

export type SimAvailableIndicators =
    (keyof typeof config.AppAvailableMetrics)[number];

export type SimAvailableRuleTypes =
    (typeof config.simulationStrategyAvailableRuleTypes)[number];

export type SimAvailableOperators =
    (typeof config.simulationStrategyAvailableOperators)[number];

export type SimAvailableRuleLogicOperators =
    (typeof config.simulationStrategyAvailableRuleLogicOperators)[number];

export interface SimCondComponentProps {
    ruleType: SimAvailableRuleTypes;
    indicators: readonly SimAvailableIndicators[];
    operators: readonly SimAvailableOperators[];
    logicOperators: readonly SimAvailableRuleLogicOperators[];
}

export interface RuleDropdownComponentProps {
    values:
        | readonly SimAvailableIndicators[]
        | readonly SimAvailableOperators[];
}

export interface SimCondition {
    indicator: SimAvailableIndicators | '';
    operator: SimAvailableOperators | '';
    value: number | undefined;
}
// simulation rule format
export interface SimRuleGroup {
    action: SimAvailableRuleTypes;
    logic: SimAvailableRuleLogicOperators | '';
    conditions: SimCondition[];
}

export interface SimStrategy {
    rules: SimRuleGroup[];
}
