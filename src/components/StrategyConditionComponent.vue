<script setup lang="ts">
import { ref, watch } from 'vue';
import {
    type SimCondition,
    type SimCondComponentProps,
} from '../types/simulationPrep';
import SimRuleDropdown from './SimRuleDropdown.vue';
import config from '../config';

const props = defineProps<SimCondComponentProps>();
const readyCondition = ref<SimCondition>({
    indicator: '',
    operator: '',
    value: undefined,
});

// const addRuleEmit = defineEmits<{
//     (e: 'select', ruleType: SimAvailableRuleTypes): void;
// }>();
// const dropDownVisible = ref(false);

function showDropdown() {
    console.log(props);
}

// function createRule(ruleType: SimAvailableRuleTypes) {
//     showDropdown();
//     addRuleEmit('select', ruleType);
// }

const inputValue = ref('');
const isValid = ref(true);
</script>

<template>
    <div class="strat-component-container">
        <h2 class="component-name text-white">{{ props.ruleType }}</h2>
        <p>, if</p>
        <SimRuleDropdown
            :values="Object.keys(config.AppAvailableMetrics)"
            @select="showDropdown"
        />
        <SimRuleDropdown
            :values="config.simulationStrategyAvailableOperators"
            @select="showDropdown"
        />
        <input
            v-model="inputValue"
            type="text"
            placeholder="value"
            :class="
                isValid
                    ? `sim-param-input`
                    : `sim-param-input sim-param-error-outline`
            "
            maxlength="100"
        />
    </div>
</template>
