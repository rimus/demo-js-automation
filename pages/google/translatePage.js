const Page = require('../page');

class TranslatePage extends Page {
	async typeTextToTranslate(text) {
		await this.waitAndType('#source', text);
	}

	async getTranslation() {
		return await this.getInnerText('*[class = "tlid-translation translation"]');
	}
}

module.exports = TranslatePage;