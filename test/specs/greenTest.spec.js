const Page = require('../../pages/page');
const {describe, it} = require('mocha');
const assert = require('assert');
const allureReporter = require('@wdio/allure-reporter').default;

allureReporter.addStory('Green Test');
describe('EPAM homepage', function () {
	allureReporter.addFeature('Page title');
	it('should have the right title', async function () {
		const page = new Page();
		await page.openPage('https://www.epam.com/');
		const actualTitle = await page.getTitle();
		const expectedTitle = 'EPAM | Enterprise Software Development, Design & Consulting';
		allureReporter.addStep(`Verify that page title is correct`);
		assert.strictEqual(actualTitle, expectedTitle);
	});
});