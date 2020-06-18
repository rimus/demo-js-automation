const Page = require('../../pages/page');
const {describe, it} = require('mocha');
const assert = require('assert');

describe('EPAM homepage', function () {
	it('should have the right title', async function () {
		const page = new Page();
		await page.openPage('https://www.epam.com/');
		const actualTitle = await page.getTitle();
		const expectedTitle = 'EPAM | Enterprise Software Development, Design & Consulting';
		assert.strictEqual(actualTitle, expectedTitle);
	});
})