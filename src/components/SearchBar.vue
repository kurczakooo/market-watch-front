<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
    (e: 'update', value: string): void;
}>();

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update', target.value);
}
</script>

<template>
    <div class="search-bar-container">
        <i class="pi pi-search search-bar-icon"></i>
        <input
            type="text"
            placeholder="Search assets"
            class="search-bar"
            maxlength="100"
            @input="handleInput"
        />
    </div>
</template>
