const Page = require('../page');

class TranslatePage extends Page {
	async typeTextToTranslate(text) {
		await this.waitAndType('#source', text);
	}

	async getTranslation() {
		const element = await $('*[class = "tlid-translation translation"]');
		return element.getAttribute('innerText');
	}
}

module.exports = TranslatePage;