<script setup lang="ts">
import { ref } from 'vue';
import type {
    RuleDropdownComponentProps,
    SimAvailableIndicators,
    SimAvailableOperators,
    SimAvailableRuleTypes,
} from '../types/simulationPrep';

const props = defineProps<RuleDropdownComponentProps>();
const addRuleEmit = defineEmits<{
    (e: 'select', ruleType: SimAvailableRuleTypes): void;
}>();

const selectedValue = ref<SimAvailableIndicators | SimAvailableOperators | ''>(
    ''
);
const dropDownVisible = ref<boolean>(false);

function showDropdown() {
    dropDownVisible.value = !dropDownVisible.value;
}

function selectValue(value: SimAvailableIndicators | SimAvailableOperators) {
    showDropdown();
    selectedValue.value = value;
}
</script>

<template>
    <div class="bg-amber-800">
        <div
            class="cond-dropdown-container h-50 overflow-auto"
            v-show="dropDownVisible"
        >
            <!-- the first field is only for spacing purposes -->
            <!-- <div class="sim-param-input" :disabled="true">...</div> -->
            <div
                v-for="value in props.values"
                :key="value"
                class="strat-dropdown-opt cursor-pointer"
                @click="selectValue(value)"
            >
                {{ value }}
            </div>
        </div>
        <div
            class="strat-opt cursor-pointer"
            :class="selectedValue === '' ? `bg-amber-900` : `bg-amber-100`"
            @click="showDropdown"
        >
            {{ selectedValue }}
            <i :class="['pi', 'pi-sort-down-fill', 'drop-icon ']"></i>
        </div>
    </div>
</template>

<style lang="css">
.cond-dropdown-container {
    position: absolute;
    flex: 1;
    flex-direction: column;
    border-radius: 2rem 2rem 1.5rem 1.5rem;
    background-color: var(--secondarycomponentbackground);
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    padding-top: 3rem;
    scrollbar-width: none;

    box-shadow: var(--shadow-medium);
}

.strat-opt {
    padding: 1rem 3rem 1rem 3rem;
    border-radius: 2.5rem;
    background-color: var(--componentbackground);
    color: var(--selectedtext);
    border: none;
    outline: none;

    box-shadow: var(--shadow-medium);
}

.strat-dropdown-opt {
    color: var(--selectedtext);
    padding: 1rem 2rem 1rem 3rem;
    border-radius: 2.5rem;
}

.strat-dropdown-opt:hover {
    background-color: var(--selectedcomponentbackground);
    box-shadow: var(--shadow-medium);
}

.drop-icon {
    position: absolute;
    /* top: 50%; */
    transform: translateY(-50%);
    color: var(--unselectedtext);
    font-size: 1.5rem;
    pointer-events: none;
}
</style>
