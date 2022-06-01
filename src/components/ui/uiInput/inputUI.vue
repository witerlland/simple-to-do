<script setup lang="ts" >
	import { computed } from 'vue';
	export type inputUIProps = {
		label?: string;
		placeholder: string;
		modelValue: [string, number],
		type?: string;
		block?: boolean;
	}

	const props = withDefaults(defineProps<inputUIProps>(), {
		placeholder: '',
		type: 'text',
		block: false,
		label: ''
	})

	const emit = defineEmits(["update:modelValue"])

	const inputValue = computed({
		get() {
			return props.modelValue
		},
		set(value) {
			emit("update:modelValue", value)
		}
	})
</script>
<template>
	<div class="ui-controller" :class="{ 'ui-controller--block': block }" >
		<label v-if="label" class="ui-controller__label" >{{ label }}</label>
		<input 
			v-model="modelValue"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"

			class="ui-controller__input"
		>
	</div>
</template>
<style scoped >
	.ui-controller {
		display: flex;
		flex-direction: column;

		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1rem;
		min-width: 180px;
		max-width: 480px;

		padding: 0.2rem;

		font-family: 'Roboto', sans-serif;
	}

		.ui-controller--block {
			min-width: 100%;
			max-width: 100%;
			margin-left: 0;
			margin-right: 0;
		}

		.ui-controller__label {
			font-size: 1rem;
			color: #7B7B7B;
			margin-bottom: 0.2rem;
		}

		.ui-controller__input {
			border: 1px solid #C4C4C4;
			border-radius: 0;
			background-color: rgba(204, 204, 204, 0.1);
			color: #7b7b7b;
			padding: 0.6rem 1rem;
			font-stretch: condensed;
		}
			.ui-controller__input:focus {
				outline: none;
			}
</style>