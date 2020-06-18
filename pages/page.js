class Page {
	async openPage(url) {
		await browser.url(url);
	}

	async waitAndClick(selector) {
		const element = await $(selector);
		await element.waitForEnabled();
		await element.click();
	}

	async waitAndType(selector, value) {
		const element = await $(selector);
		await element.waitForEnabled();
		await element.clearValue();
		await element.setValue(value);
	}

	async pressEnter() {
		await browser.keys('Enter');
	}

	async isElementDisplayed(selector) {
		const element = await $(selector);
		return await element.isDisplayed();
	}

	async getTitle() {
		return await browser.getTitle();
	}
}

module.exports = Page;