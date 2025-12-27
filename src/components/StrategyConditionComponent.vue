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

// watch(inputValue, newVal => {
//     // If empty → don't validate (considered valid)
//     if (newVal.trim() === '') {
//         isValid.value = true;
//         return;
//     }

//     const regex = new RegExp(props.validationPattern);
//     if (regex.test(newVal)) {
//         isValid.value = true;
//         if (simulationStore.setStartingParam(props.id, newVal))
//             isLogicallyValid.value = true;
//         console.log(isLogicallyValid.value);
//     } else {
//         isValid.value = false;
//         isLogicallyValid.value = false;
//     }
// });
</script>

<template>
    <!-- <div class="strat-dropdown-container" v-show="dropDownVisible">
        <input class="sim-param-input" :disabled="true" />
        <input
            placeholder="Buy"
            class="strat-dropdown-option cursor-pointer"
            readonly
            @click="createRule('buy')"
        />
        <input
            placeholder="Sell"
            class="strat-dropdown-option cursor-pointer"
            readonly
            @click="createRule('sell')"
        />
    </div>
    <div class="sim-param-input-container">
        <i :class="['pi', 'pi-plus', 'sim-param-input-icon left-4']"></i>
        <input
            placeholder="Add a rule"
            class="sim-param-input cursor-pointer"
            readonly
            @click="showDropdown"
        />
        <i
            :class="[
                'pi',
                'pi-sort-down-fill',
                'sim-param-input-icon right-2/9 translate-y-1/9',
            ]"
        ></i>
    </div> -->
    <div class="flex items-center gap-5">
        <h2 class="component-name">{{ props.ruleType }}</h2>
        <p>, if</p>
        <SimRuleDropdown
            :values="config.simulationStrategyAvailableIndicators"
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
