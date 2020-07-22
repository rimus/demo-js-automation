const TranslatorPage = require('../../../pages/google/translatePage');
const {describe, it} = require('mocha');
const assert = require('assert');

describe('Google', function () {
	it('should translate "geschwindigkeit" to "speed"', async function () {
		const page = new TranslatorPage();
		await page.openPage('https://translate.google.com');
		await page.typeTextToTranslate('geschwindigkeit');
		const actualTranslation = (await page.getTranslation()).toLowerCase();
		const expectedTranslation = 'speed';
		assert.strictEqual(actualTranslation, expectedTranslation);
	});
});