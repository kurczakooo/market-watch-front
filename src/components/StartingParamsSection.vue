<script setup lang="ts">
import SimParamInput from '../components/SimParamInput.vue';

defineProps<{
    resetSignal: boolean;
}>();
</script>

<template>
    <h1 class="component-name">Starting Parameters</h1>
    <div class="flex flex-wrap gap-10 py-5">
        <SimParamInput
            id="depo"
            placeholder="Starting Deposit $"
            icon="pi-wallet"
            hint-text="Starting Deposit - initial simulation balance, specified in USD."
            validation-pattern="^(?:[1-9]\d{0,8}|1000000000)(?:\.\d{1,2})?$"
            validation-message="0-1000000000 (up to 2 decimals)"
            :reset-signal="resetSignal"
        />
        <SimParamInput
            id="openfee"
            placeholder="Open position fee %"
            icon="pi-credit-card"
            hint-text="Open position fee - percentage fee charged when a position is opened."
            validation-pattern="^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$"
            validationMessage="0-100 (up to 2 decimals)"
            :reset-signal="resetSignal"
        />
        <SimParamInput
            id="closefee"
            placeholder="Close position fee %"
            icon="pi-credit-card"
            hint-text="Close position fee - percentage fee charged when a position is closed."
            validation-pattern="^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$"
            validationMessage="0-100 (up to 2 decimals)"
            :reset-signal="resetSignal"
        />
        <SimParamInput
            id="possize"
            placeholder="Position size %"
            icon="pi-chart-pie"
            hint-text="Position size - percentage of the deposit allocated to a single position."
            validation-pattern="^((100((\.|,)[0-9]{1,2})?)|([0-9]{1,2}((\.|,)[0-9]{0,2})?))$"
            validationMessage="0-100 (up to 2 decimals)"
            :reset-signal="resetSignal"
        />
        <SimParamInput
            id="startdate"
            placeholder="Start date YYYY-MM-DD"
            icon="pi-calendar"
            hint-text="Start date - first day of the simulation period (YYYY-MM-DD)."
            validation-pattern="^((19\d{2})|(20\d{2}))-(((02)-(0[1-9]|[1-2][0-9]))|(((0(1|[3-9]))|(1[0-2]))-(0[1-9]|[1-2][0-9]|30))|((01|03|05|07|08|10|12)-(31)))$"
            validationMessage="Correct date in format YYYY-MM-DD"
            :reset-signal="resetSignal"
        />
        <SimParamInput
            id="enddate"
            placeholder="End date YYYY-MM-DD"
            icon="pi-calendar"
            hint-text="End date - last day of the simulation period (YYYY-MM-DD)."
            validation-pattern="^((19\d{2})|(20\d{2}))-(((02)-(0[1-9]|[1-2][0-9]))|(((0(1|[3-9]))|(1[0-2]))-(0[1-9]|[1-2][0-9]|30))|((01|03|05|07|08|10|12)-(31)))$"
            validationMessage="Correct date in format YYYY-MM-DD"
            :reset-signal="resetSignal"
        />
    </div>
</template>
