Feature: To verify the Dashboard functionality.
  I want to verify dashboard functionality.

 Background: 
  Given user is on login page
  When user enters "9604154175"
  Then user clicks on Submit button
  And user enters "2812" in pinbox
  And user clicks on Submit pin button
  Then user should land on HomePage


#Background : If there are some common steps that we need to execuate just before execuation of every scenario, 
#             then we can add these steps under "Background" keyword instead of "Scenario" keyword.
#             This similar as "@BeforeMethod" of TestNG

   @Adesh
  Scenario: To verify the dashboard expand and collapse
  Then user clicks on Expand and collapse button
 
 
 
  @PendingOrder
  Scenario: To verify the Pending Order link
  Then user clicks on pending order