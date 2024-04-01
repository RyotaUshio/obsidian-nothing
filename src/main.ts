import { Plugin } from "obsidian";
import { DEFAULT_SETTINGS, NothingSettingTab, NothingSettings } from "./settings";

export default class ObsidianNothing extends Plugin {
	settings: NothingSettings;

	override async onload() {
		await this.loadSettings();
		this.addSettingTab(new NothingSettingTab(this));

		for (let i = 1; i <= this.settings.num; i++) {
			this.addCommand({
				id: "nothing-noop-" + i,
				name: "Do nothing (no-op)",
				// biome-ignore lint/suspicious/noEmptyBlockStatements: it's deliberately a no-op
				callback: () => {},
			});	
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
