$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/makemytrip/CucumberDemo/src/main/java/Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aadesh.Khedkar"
    }
  ],
  "line": 3,
  "name": "Login Page feature",
  "description": "I want to test login page functionality",
  "id": "login-page-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "To verify the login functionality",
  "description": "",
  "id": "login-page-feature;to-verify-the-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters \"9604154175\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"2812\" in pinbox",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Submit pin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should land on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 13055658900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9604154175",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 2189833000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2139746701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2812",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_pin(String)"
});
formatter.result({
  "duration": 3830365999,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_pin_button()"
});
formatter.result({
  "duration": 5107573900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_HomePage()"
});
formatter.result({
  "duration": 75186001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_browser()"
});
formatter.result({
  "duration": 1585950901,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#  Scenario Outline :- The Scenario Outline keyword can be used to run the same Scenario multiple times, with different set of data"
    },
    {
      "line": 17,
      "value": "#  Examples : It is used to specify a set of data enclosed bt pipes(|)"
    }
  ],
  "line": 20,
  "name": "To verify the login functionality",
  "description": "",
  "id": "login-page-feature;to-verify-the-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login1"
    },
    {
      "line": 19,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enters \"\u003cMobileNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"\u003cPin\u003e\" in pinbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Submit pin button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-page-feature;to-verify-the-login-functionality;",
  "rows": [
    {
      "cells": [
        "MobileNumber",
        "Pin"
      ],
      "line": 30,
      "id": "login-page-feature;to-verify-the-login-functionality;;1"
    },
    {
      "cells": [
        "9604154175",
        "2812"
      ],
      "line": 31,
      "id": "login-page-feature;to-verify-the-login-functionality;;2"
    },
    {
      "cells": [
        "8788710785",
        "7350"
      ],
      "line": 32,
      "id": "login-page-feature;to-verify-the-login-functionality;;3"
    },
    {
      "cells": [
        "1234567891",
        "1250"
      ],
      "line": 33,
      "id": "login-page-feature;to-verify-the-login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "To verify the login functionality",
  "description": "",
  "id": "login-page-feature;to-verify-the-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login1"
    },
    {
      "line": 19,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enters \"9604154175\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"2812\" in pinbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Submit pin button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 9682194800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9604154175",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 2146778201,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2089108800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2812",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_pin(String)"
});
formatter.result({
  "duration": 2323767000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_pin_button()"
});
formatter.result({
  "duration": 335028401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_HomePage()"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_browser()"
});
formatter.result({
  "duration": 1334496100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "To verify the login functionality",
  "description": "",
  "id": "login-page-feature;to-verify-the-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login1"
    },
    {
      "line": 19,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enters \"8788710785\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"7350\" in pinbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Submit pin button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 8929127401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8788710785",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 2174287801,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2112139301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7350",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_pin(String)"
});
formatter.result({
  "duration": 2230034401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_pin_button()"
});
formatter.result({
  "duration": 431454499,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_HomePage()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_browser()"
});
formatter.result({
  "duration": 1219576200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To verify the login functionality",
  "description": "",
  "id": "login-page-feature;to-verify-the-login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Login1"
    },
    {
      "line": 19,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enters \"1234567891\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters \"1250\" in pinbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Submit pin button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should land on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 8941690601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 2213080500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 2116148901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1250",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_pin(String)"
});
formatter.result({
  "duration": 1108209100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027txt_accesspin\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.101)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-F5U5V1J\u0027, ip: \u0027192.168.43.122\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.101, chrome: {chromedriverVersion: 104.0.5112.20 (9ac43f954ebb..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:54027}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6df21af37fb1c63d8617b6e19adb505f\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027txt_accesspin\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefination.LoginSteps.user_enters_pin(LoginSteps.java:41)\r\n\tat ✽.And user enters \"1250\" in pinbox(D:/makemytrip/CucumberDemo/src/main/java/Features/Login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_pin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_closes_browser()"
});
formatter.result({
  "status": "skipped"
});
});