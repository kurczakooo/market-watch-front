<script setup lang="ts">
import type { SimParamInputProps } from '../types/simulationPrep';

const props = defineProps<SimParamInputProps>();
</script>

<template>
    <div class="sim-param-input-container">
        <i :class="['pi', props.icon, 'sim-param-input-icon']"></i>
        <input
            type="text"
            :placeholder="props.placeholder"
            class="sim-param-input"
            maxlength="100"
        />
    </div>
</template>
