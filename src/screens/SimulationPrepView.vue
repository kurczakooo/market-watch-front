<script setup lang="ts">
import BigAssetBar from '../components/BigAssetBar.vue';
import SimParamInput from '../components/SimParamInput.vue';
</script>

<template>
    <div class="body-background flex-col">
        <BigAssetBar />
        <div class="flex py-8">
            <div class="w-2/3">
                <h1 class="component-name">Starting Parameters</h1>
                <div class="grid grid-cols-3 gap-6 py-5">
                    <SimParamInput
                        placeholder="Starting Deposit"
                        icon="pi-wallet"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Open position fee %"
                        icon="pi-credit-card"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Close position fee %"
                        icon="pi-credit-card"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Position size %"
                        icon="pi-chart-pie"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Take profit %"
                        icon="pi-money-bill"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Stop loss %"
                        icon="pi-stop-circle"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Start date"
                        icon="pi-calendar"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="End date"
                        icon="pi-calendar"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                    <SimParamInput
                        placeholder="Interval"
                        icon="pi-bars"
                        hint-text="Specify the amount of funds to start the simulation with."
                    />
                </div>
            </div>
            <div class="w-1/3 rounded-3xl layer-background-color"></div>
        </div>
    </div>
</template>
