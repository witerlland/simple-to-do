import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import buttonUI from "./buttonUI.vue";

const mock = {
	label: "just a simple label",
	design: "ui-button--block"
}

describe("Button UI", () => {
	it("Should render expected label", () => {
		const comp = mount(buttonUI, {
			props: { label: mock.label }
		});
		
		expect(comp.text()).toContain(mock.label)
	});

	it("Should render expected classes", () => {
		const comp = mount(buttonUI, {
			props: { label: mock.label, design: mock.design }
		});
		
		expect(comp.classes()).toContain(mock.design)
	})
});