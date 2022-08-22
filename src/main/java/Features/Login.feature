#Author: your.email@your.domain.com

Feature: Login Page feature
  I want to test login page functionality

  @tag1
  Scenario: To verify the login functionality
  Given user is on login page
  When user enters mobile number
  Then user clicks on Submit button
  And user enters pin
  And user clicks on Submit pin button
  Then user should land on HomePage
  And user closes browser  
    
    

