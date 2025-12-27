<script setup lang="ts">
import { ref } from 'vue';
import type {
    RuleDropdownComponentProps,
    SimAvailableRuleTypes,
} from '../types/simulationPrep';

const props = defineProps<RuleDropdownComponentProps>();
const addRuleEmit = defineEmits<{
    (e: 'select', ruleType: SimAvailableRuleTypes): void;
}>();
const dropDownVisible = ref(false);

function showDropdown() {
    dropDownVisible.value = !dropDownVisible.value;
}

function createRule(ruleType: SimAvailableRuleTypes) {
    showDropdown();
    addRuleEmit('select', ruleType);
}
</script>

<template>
    <div class="strat-dropdown-container" v-show="dropDownVisible">
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
        <div class="sim-param-input cursor-pointer" @click="showDropdown">
            indicator
        </div>
        <i
            :class="[
                'pi',
                'pi-sort-down-fill',
                'sim-param-input-icon right-2/9 translate-y-1/9',
            ]"
        ></i>
    </div>
</template>
