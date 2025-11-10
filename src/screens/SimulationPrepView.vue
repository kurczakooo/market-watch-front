<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';

import StartingParamsSection from '../components/StartingParamsSection.vue';
</script>

<template>
    <div class="body-background flex-col">
        <BigAssetBar />
        <div class="flex py-8">
            <StartingParamsSection />
            <div class="w-1/3 rounded-3xl layer-background-color"></div>
        </div>
    </div>
</template>
