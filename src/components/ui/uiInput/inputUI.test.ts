import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import inputUI from "./inputUI.vue";

const mock = {
	label: "just a simple label",
	placeholder: "ui-button--block",
	type: "text",
	block: false
}

describe("Input UI", () => {
	it("Should render expected label", () => {
		const comp = mount(inputUI, {
			props: { label: mock.label }
		});
		
		expect(comp.text()).toContain(mock.label)
	});

	it("Should render expected classes", () => {
		const comp = mount(inputUI, {
			props: { label: mock.label, block: true }
		});
		
		expect(comp.classes()).toContain('ui-controller--block')
	})
});