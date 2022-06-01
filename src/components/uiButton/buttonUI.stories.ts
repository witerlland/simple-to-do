import buttonUI from "./buttonUI.vue"

export default {
	title: "Buttons / Default",
	component: buttonUI,
	args: {
		label: "Button",
		design: "default",
		block: false
	},
	argTypes: {
		label: { type: "string" },
		design: { type: "string" },
		block: { type: "boolean" }
	},
	parameters: {
		backgrounds: {
			default: "light"
		}
	}
};

export const Component = (args: unknown) => ({
	components: { buttonUI },
	setup() {
		return { args };
	},
	template: `
		<div class="default--storybook w-400">
			<buttonUI v-bind="args" />
		</div>
	`
});