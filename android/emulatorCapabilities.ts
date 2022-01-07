import common from "mocha/lib/interfaces/common";
import { RemoteOptions } from "webdriverio";

class ProjectCapabilities {
	

	private static webDriverPath: string = '/wd/hub';
	private static webDriverPort: number = 4723;

//appPackage: string = "com.android.contacts", appActivity: string = "com.android.contacts.activities.PeopleActivity",
	static androidBaseCapabilities(): RemoteOptions {

		const desiredCapabilities = {
			platformName: "Android",
			deviceName: "TestPixel",
			app: '/Users/avinashkannan/Documents/webdriverio-typescript-appium-reference-main/android/app/ApiDemos-debug.apk', 
			//appPackage: 'com.android.ApiDemo',    //anything related to the app
			//appActivity: 'com.android.ApiDemo.Test',  //anything related to the app
			browserName: '', // browser name is empty for native apps
			automationName: "UiAutomator2",
		
		}; 

		return {
			path: this.webDriverPath,
			port: this.webDriverPort,
			capabilities: desiredCapabilities
		}
	}

		static iosBaseCapabilities(): RemoteOptions {

			const desiredCapabilities = {
				platformName: "iOS",
				platformVersion: "15.2",
				deviceName: "iPhone 12 Pro",
				app: '/Users/avinashkannan/Documents/UIKitCatalog.app', 
				//appPackage: 'com.android.ApiDemo',
				//appActivity: 'com.android.ApiDemo.Test',
				automationName: "XCUITest",
			
			};

		return {
			path: this.webDriverPath,
			port: this.webDriverPort,
			capabilities: desiredCapabilities
		}
	}

}

export default ProjectCapabilities;