<script setup lang="ts" >
	import { computed } from 'vue'

	export type ButtonUIProps = {
		label: string;
		design: string;
		block?: boolean;
		icon?:string;
	}

	const props = withDefaults(defineProps<ButtonUIProps>(), {
		block: false,
		icon: '',
	})

	const computedClass = computed(() => {
		const { block, design } = props
		return [ 
			design,
			block ? 'ui-button--block' : '',
			'ui-button'
		]
	})
</script>

<template>
	<a
		v-bind="props"
		:class="computedClass"
	>
		<i v-if="icon" :class="icon" ></i>
		<span v-else >{{label}}</span>
	</a>
</template>
<style scoped >
	.ui-button {
		font-size: 1.2rem;
		font-family: 'Roboto', sans-serif;
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		cursor: pointer;
	}
		.ui-button:hover{
			background-color: #ccc;
			color: #FFF;
		}

		.ui-button--block {
			display: block;
			width: 100%;
		}

		.ui-button--danger {
			background-color: #F55B5B;
			border: 1px solid #F55B5B;
			color: #FFFFFF;
		}
			.ui-button--danger:hover {
				background-color: #ca4444;
				border: 1px solid #ca4444;
				color: #FFFFFF;
			}

		.ui-button--danger-outline {
			background-color: transparent;
			border: none;
			color: #F55B5B;
		}
			.ui-button--danger-outline:hover {
				background-color: transparent;
				border: none;
				color: #ca4444;
			}

		.ui-button--icon {
			background-color: transparent;
			border: none;
			color: #7B7B7B;
		}
			.ui-button--icon:hover {
				background-color: transparent;
				border: none;
				color: #616161;
			}

		.ui-button--icon--danger {
			background-color: transparent;
			border: none;
			color: #F55B5B;
		}
			.ui-button--icon--danger:hover {
				background-color: transparent;
				border: none;
				color: #ca4444;
			}
</style>