const Page = require('../../pages/page');
const {describe, it} = require('mocha');
const assert = require('assert');

describe('Red test', function () {
	it('should always fail', async function () {
		const page = new Page();
		await page.openPage('https://www.google.com/');
		const actualTitle = await page.getTitle();
		const expectedTitle = 'Yandex';
		assert.strictEqual(actualTitle, expectedTitle);
	});
});