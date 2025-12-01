<script setup lang="ts">
const props = defineProps<{ title: string; amount: string }>();
</script>

<template>
    <div>
        <h2 class="component-name">{{ props.title }}</h2>
        <h1 class="text-4xl mt-1 font-bold">{{ props.amount }}</h1>
    </div>
</template>
