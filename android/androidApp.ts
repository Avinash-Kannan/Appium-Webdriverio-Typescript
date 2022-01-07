import { remote, RemoteOptions, Browser } from "webdriverio";
import ProjectCapabilities from "./emulatorCapabilities";
import AndroidLocators from "./viewObjects/androidLocators";
import { tapElement, setValueOfElement } from "./utils";


describe('Android basic App Testing', function () {
	let driver: Browser<"async">;
	this.timeout(40000);

	before(async function beforeTest() {
		const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});

	it('Perform Baisc test operation', async function main() {

		// Tap the floating action button
		await tapElement(driver, AndroidLocators.locators.floatingActionButton);

		// Provide a First and Last name to the input fields
		// then tap the save button
		await setValueOfElement(driver, `android=${AndroidLocators.locators.firstNameTextField}`, "Satoshi");
		await setValueOfElement(driver, `android=${AndroidLocators.locators.lastNameTextField}`, "Nakamoto");
		await tapElement(driver, AndroidLocators.locators.saveButton);

		// Tap the options menu button
		await tapElement(driver, `android=${AndroidLocators.locators.moreOptionsMenuButon}`);

		// Tap the delete button
		await tapElement(driver, `android=${AndroidLocators.locators.moreOptionsMenuDeleteButton}`);

		// Tap the delete confirmation button
		await tapElement(driver, `android=${AndroidLocators.locators.deleteContactConfirmationButton}`);

	});

	after(async function afterTest() {
		await driver.deleteSession();
	});

});