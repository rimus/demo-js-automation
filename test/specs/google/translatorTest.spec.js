const TranslatorPage = require('../../../pages/google/translatePage');
const {describe, it} = require('mocha');
const assert = require('assert');
const allureReporter = require('@wdio/allure-reporter').default;

allureReporter.addStory('Google Translator Test Suite');
describe('Google Translator', function () {
	allureReporter.addFeature('Translate "geschwindigkeit" to "speed"');
	it('should translate "geschwindigkeit" to "speed"', async function () {
		const page = new TranslatorPage();
		await page.openPage('https://translate.google.com');
		await page.typeTextToTranslate('geschwindigkeit');
		const actualTranslation = (await page.getTranslation()).toLowerCase();
		const expectedTranslation = 'speed';
		allureReporter.addStep(`Verify that translation is correct`);
		assert.strictEqual(actualTranslation, expectedTranslation);
	});
});