const allureReporter = require('@wdio/allure-reporter').default;

class Page {
	async openPage(url) {
		allureReporter.addStep(`Navigate to ${url}`);
		await browser.url(url);
	}

	async waitAndClick(selector) {
		allureReporter.addStep(`Clicking to element ${selector}`);
		const element = await $(selector);
		await element.waitForEnabled();
		await element.click();
	}

	async waitAndType(selector, value) {
		allureReporter.addStep(`Typing "${value}" to element ${selector}`);
		const element = await $(selector);
		await element.waitForEnabled();
		await element.clearValue();
		await element.setValue(value);
	}

	async pressEnter() {
		allureReporter.addStep(`Pressing "Enter"`);
		await browser.keys('Enter');
	}

	async isElementDisplayed(selector) {
		allureReporter.addStep(`Getting display condition of element ${selector}`);
		const element = await $(selector);
		return await element.isDisplayed();
	}

	async getTitle() {
		allureReporter.addStep(`Getting current page title`);
		return await browser.getTitle();
	}

	async getAttribute(selector, attribute) {
		allureReporter.addStep(`Getting attribute "${attribute}" from element ${selector}`);
		const element = await $(selector);
		return element.getAttribute(attribute);
	}

	async getInnerText(selector) {
		return await this.getAttribute(selector, 'innerText');
	}
}

module.exports = Page;