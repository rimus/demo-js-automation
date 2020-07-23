const Page = require('../../pages/page');
const {describe, it} = require('mocha');
const assert = require('assert');
const allureReporter = require('@wdio/allure-reporter').default;

allureReporter.addStory('Red Test');
describe('Google homepage', function () {
	allureReporter.addFeature('Page title');
	it('should have the right title', async function () {
		const page = new Page();
		await page.openPage('https://www.google.com/');
		const actualTitle = await page.getTitle();
		const expectedTitle = 'Yandex';
		allureReporter.addStep(`Verify that page title is correct`);
		assert.strictEqual(actualTitle, expectedTitle);
	});
});