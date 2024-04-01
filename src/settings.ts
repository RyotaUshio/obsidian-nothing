// It's sad to kill the original plugin's ultimate simplicity,
// but it's worthwhile addition!
import { PluginSettingTab, Setting } from "obsidian";
import ObsidianNothing from "./main";

export interface NothingSettings {
    num: number;
}

export const DEFAULT_SETTINGS = {
    num: 1
}

export class NothingSettingTab extends PluginSettingTab {
    constructor(public plugin: ObsidianNothing) {
        super(plugin.app, plugin);
    }

    override display() {
        this.containerEl.empty();
    
        new Setting(this.containerEl)
            .setName('Number of the "Do nothing" commands')
            .setDesc('The command will be duplicated as many as specified, and you can assign different hotkeys for them. Reload this plugin after changing this option.')
            .addSlider((slider) => {
                slider
                    .setValue(this.plugin.settings.num)
                    .setLimits(1, 30, 1)
                    .setDynamicTooltip()
                    .onChange((value) => {
                        this.plugin.settings.num = value;
                        this.plugin.saveSettings();
                    });
            });
    }
}
