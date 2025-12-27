<script setup lang="ts">
const props = defineProps<{ percentagePriceChange: number }>();
</script>

<template>
    <div
        :class="props.percentagePriceChange! > 0 ? 'green-icon' : 'red-icon'"
        class="flex items-end mx-2"
    >
        <span class="text-xl ml-auto">
            {{ props.percentagePriceChange! > 0 ? '▲' : '▼' }}
        </span>
        <h3 class="text-lg font-semibold">
            {{ props.percentagePriceChange?.toFixed(2) }}%
        </h3>
    </div>
</template>
