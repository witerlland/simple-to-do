import buttonUI from "./buttonUI.vue"

export default {
	title: "UI / Button Default",
	component: buttonUI,
	args: {
		label: "Button",
		design: "",
		block: false,
		icon: "",
	},
	argTypes: {
		label: { type: "string" },
		design: { type: "string" },
		block: { type: "boolean" },
		icon: { type: "string" },
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