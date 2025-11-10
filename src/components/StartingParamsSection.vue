<script setup lang="ts">
import SimParamInput from '../components/SimParamInput.vue';
</script>

<template>
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
</template>
