'use strict';

const BasePage = function () {

	const EC = protractor.ExpectedConditions;

	this.visit = function () {
		return browser.get(browser.params.baseUrl);
	};

	this.isVisible = function (locator) {
		return browser.wait(EC.visibilityOf(locator));
	};

	this.isNotVisible = function (locator) {
		return browser.wait(EC.invisibilityOf(locator));
	};

	this.titleContains = function (text) {
		return browser.wait(EC.titleContains(text));
	};

	this.timeout = {
		'xxl': 15000
	};

	this.selectDropdown = function (locator, value) {
		locator.element(by.cssContainingText("option", value)).click();
	};

	this.displayElement = function (locator) {
		return browser.executeScript('arguments[0].style.display = "block"', locator.getWebElement());
	};
};

module.exports = BasePage;
