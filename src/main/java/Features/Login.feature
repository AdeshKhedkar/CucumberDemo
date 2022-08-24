#Author: Aadesh.Khedkar

Feature: Login Page feature
  I want to test login page functionality

  @Login @Regression
  Scenario: To verify the login functionality
  Given user is on login page
  When user enters "9604154175"
  Then user clicks on Submit button
  And user enters "2812" in pinbox
  And user clicks on Submit pin button
  Then user should land on HomePage
  And user closes browser  
    
  #  Scenario Outline :- The Scenario Outline keyword can be used to run the same Scenario multiple times, with different set of data
  #  Examples : It is used to specify a set of data enclosed bt pipes(|)
    
  @Login1  @Sanity
  Scenario Outline: To verify the login functionality
  Given user is on login page
  When user enters "<MobileNumber>"
  Then user clicks on Submit button
  And user enters "<Pin>" in pinbox
  And user clicks on Submit pin button
  Then user should land on HomePage
  And user closes browser
    
    Examples:
    | MobileNumber| Pin  |
    | 9604154175  | 2812 |
    | 8788710785  | 7350 | 
    | 1234567891  | 1250 |
    
    
    

    

