<script setup lang="ts">
import { ref, watch } from 'vue';
import type { SimParamInputProps } from '../types/simulationPrep';
import { useSimulationStore } from '../stores/simulation';

const simulationStore = useSimulationStore();

const props = defineProps<SimParamInputProps>();

const inputValue = ref('');
const isValid = ref(true);
const isLogicallyValid = ref(false);

watch(inputValue, newVal => {
    // If empty → don't validate (considered valid)
    if (newVal.trim() === '') {
        isValid.value = true;
        return;
    }

    const regex = new RegExp(props.validationPattern);
    if (regex.test(newVal)) {
        isValid.value = true;
        if (simulationStore.setStartingParam(props.id, newVal))
            isLogicallyValid.value = true;
        console.log(isLogicallyValid.value);
    } else {
        isValid.value = false;
        isLogicallyValid.value = false;
    }
});

// reset listener
watch(
    () => props.resetSignal,
    () => {
        inputValue.value = '';
        isValid.value = true;
        isLogicallyValid.value = false;
    }
);
</script>

<template>
    <div class="sim-param-input-container" :title="props.hintText">
        <!-- Show hint text above input -->
        <p v-show="inputValue !== ''" class="sim-param-extra-placeholer">
            {{ props.placeholder }}
        </p>
        <i :class="['pi', props.icon, 'sim-param-input-icon left-4']"></i>
        <input
            v-model="inputValue"
            type="text"
            :placeholder="props.placeholder"
            :class="
                isValid
                    ? `sim-param-input`
                    : `sim-param-input sim-param-error-outline`
            "
            maxlength="100"
        />

        <!-- Show validation message -->
        <p v-show="!isValid" class="sim-param-input-error">
            {{ props.validationMessage }}
        </p>
    </div>
</template>
