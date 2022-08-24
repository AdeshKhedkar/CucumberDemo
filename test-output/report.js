$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Login.feature");
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
  "duration": 58165305500,
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
  "duration": 6821837300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 7180118500,
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
  "duration": 9494437400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Submit_pin_button()"
});
formatter.result({
  "duration": 268634400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_HomePage()"
});
formatter.result({
  "duration": 187062000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_closes_browser()"
});
formatter.result({
  "duration": 5876711000,
  "status": "passed"
});
});