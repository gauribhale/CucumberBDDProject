$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/CreateAccount.feature");
formatter.feature({
  "name": "Facebook create account functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Functional"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Facebook create account Test scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Title of Login Page is Facebook",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters emailid \"\u003cemailid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password \"\u003cnewPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on SignUp button",
  "keyword": "And "
});
formatter.step({
  "name": "user creates account successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "emailid",
        "newPassword",
        "gender"
      ]
    },
    {
      "cells": [
        "selenium",
        "automation",
        "selenium@yahoo.com",
        "Gauri_6494",
        "Female"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Facebook create account Test scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of Login Page is Facebook",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.title_of_login_page_is_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"selenium\" and \"automation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_enters_firstname_and_lastname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters emailid \"selenium@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_enters_emailid(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"Gauri_6494\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_enters_newPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_selects_gender(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on SignUp button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_clicks_on_signup_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Compound class names not permitted\n  (Session info: chrome\u003d80.0.3987.149)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WIN\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\dell\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.149, webStorageEnabled: true}\nSession ID: 5abdb3bf4bde5488ff2ed69837bf1766\n*** Element info: {Using\u003dclass name, value\u003d_42ft _4jy0 layerConfirm _2rsa uiOverlayButton _4jy3 _4jy1 selected _51sy}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.CreateAccountStepDefinition.user_clicks_on_signup_button(CreateAccountStepDefinition.java:62)\r\n\tat ✽.user clicks on SignUp button(file:///D:/Selenium_Tutorials/FreeCRMBDDProject/src/test/java/Features/CreateAccount.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user creates account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CreateAccountStepDefinition.user_creates_account_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/login.feature");
formatter.feature({
  "name": "Facebook login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Functional"
    }
  ]
});
formatter.scenario({
  "name": "Facebook Login Test scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Functional"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of Login Page is Facebook",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.title_of_login_page_is_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email and password",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_enter_email_and_password(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});