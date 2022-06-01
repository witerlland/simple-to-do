<script setup lang="ts" >
	import { computed } from 'vue';
	export type inputUIProps = {
		label: string;
		placeholder: string;
		modelValue: [string, number],
		type: string;
	}

	const props = withDefaults(defineProps<inputUIProps>(), {
		placeholder: '',
		type: 'text'
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
	<div class="ui-controller">
		<label v-if="label" >{{ label }}</label>
		<input 
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			v-model="modelValue"
		>
	</div>
</template>
<style>

</style>