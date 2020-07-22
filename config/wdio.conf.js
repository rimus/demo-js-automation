exports.config = {
	runner: 'local',
	specs: [
		'./test/specs/**/*.spec.js'
	],
	exclude: [
		'./test/specs/**/redTest.spec.js'
	],
	maxInstances: 1,
	capabilities: [
		{
			maxInstances: 1,
			browserName: 'chrome',
			'goog:chromeOptions': {
				'args': ['--headless']
			}
		}
	],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'silent',
	bail: 0,
	baseUrl: 'http://localhost',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	services: ['chromedriver'],
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000
	}
}
