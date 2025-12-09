<script setup lang="ts">
import { ref } from 'vue';
import type { DataPeriod } from '../types/currentAsset';

const periods = ['1d', '1w', '1m', '1y', '5y', 'max'];

const selectedPeriod = ref<string | null>(null);

const selectPeriod = (period: string) => {
    console.log(period);
    selectedPeriod.value = period;
};
</script>

<template>
    <div class="period-choice-container">
        <div
            v-for="period in periods"
            :key="period"
            class="period-button"
            :class="{ selected: selectedPeriod === period }"
            @click="selectPeriod(period)"
        >
            {{ period }}
        </div>
    </div>
</template>
