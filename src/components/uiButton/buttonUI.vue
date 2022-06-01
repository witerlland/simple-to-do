<script setup lang="ts" >
	import { computed } from 'vue'

	export type ButtonUIProps = {
		label: string;
		design: string;
		block?: boolean;
	}

	const props = withDefaults(defineProps<ButtonUIProps>(), {
		block: false
	})

	const computedClass = computed(() => {
		const { block, design } = props
		return { design, block }
	})
</script>

<template>
	<a
		v-bind="props"
		class="ui-button"
		:class="{ ...computedClass, block: props.block }"
	>
		{{label}}
	</a>
</template>
<style>
	.ui-button {
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		cursor: pointer;
	}
		.ui-button:hover{
			background-color: #ccc;
			color: #FFF;
		}

		.ui-button.block {
			display: block;
			width: 100%;
		}
</style>