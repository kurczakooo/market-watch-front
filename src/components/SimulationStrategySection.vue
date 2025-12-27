<script setup lang="ts">
import { ref } from 'vue';
import config from '../config';
import {
    type SimRuleGroup,
    type SimAvailableRuleTypes,
    type SimStrategy,
    type SimCondComponentProps,
} from '../types/simulationPrep';
import AddRuleDropdown from './AddRuleDropdown.vue';
import StrategyConditionComponent from './StrategyConditionComponent.vue';

const simulationStrat = ref<SimStrategy>({
    rules: [],
});
// const simAvailableParams = ref<SimCondComponentProps>({
//     indicators: config.simulationStrategyAvailableIndicators,
//     ruleTypes: config.simulationStrategyAvailableRuleTypes,
//     operators: config.simulationStrategyAvailableOperators,
//     logicOperators: config.simulationStrategyAvailableRuleLogicOperators,
// });

function createCondition(action: SimAvailableRuleTypes) {
    simulationStrat.value?.rules.push({
        action: action,
        logic: '',
        conditions: [],
    });
    console.log(simulationStrat.value);
}
</script>

<template>
    <h1 class="component-name mt-8">Trading Strategy</h1>
    <div class="flex flex-wrap gap-10 py-5">
        <AddRuleDropdown @select="createCondition" />
    </div>
    <div class="flex-1 flex-col flex gap-5 py-5">
        <StrategyConditionComponent
            v-for="rule in simulationStrat?.rules"
            :rule-type="rule.action"
            :indicators="config.simulationStrategyAvailableIndicators"
            :operators="config.simulationStrategyAvailableOperators"
            :logic-operators="
                config.simulationStrategyAvailableRuleLogicOperators
            "
        />
    </div>
</template>
