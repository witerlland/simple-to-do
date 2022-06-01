import inputUI from "./inputUI.vue"

export default {
	title: "Simple inputs / Input",
	component: inputUI,
	args: {
		label: "Simple Input",
		placeholder: "A simple input placeholder",
		type: 'text',
		modelValue: 'Just a simple input'
	},
	argTypes: {
		label: { type: "string" },
		placeholder: { type: "string" },
		type: { type: "string" },
		modelValue: { type: 'unknown' }
	},
	parameters: {
		backgrounds: {
			default: "light"
		}
	}
};

export const Component = (args: unknown) => ({
	components: { inputUI },
	setup() {
		return { args };
	},
	template: `
		<div class="default--storybook w-400">
			<inputUI v-bind="args" />
		</div>
	`
});