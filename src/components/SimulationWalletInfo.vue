<script setup lang="ts">
const props = defineProps<{ title: string; amount: string }>();
</script>

<template>
    <h2 class="component-name">{{ props.title }}</h2>
    <h1 class="text-4xl font-bold">{{ props.amount }}</h1>
</template>
