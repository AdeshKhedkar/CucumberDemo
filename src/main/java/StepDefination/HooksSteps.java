package StepDefination;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class HooksSteps {
	
	@Before
	public void setUp() {
		System.out.println("Launching Chrome");
		System.out.println("Entering URL");
	}
	
	
	@After
	public void teardown() {
		System.out.println("Closing the browser");
	}
	
	@Given("user on dashboard Page")
	public void user_on_dashboard_page() {
	   System.out.println("User on dashboard Page");
	}
	
	
	@Then("user clicks on Trade Panel")
	public void user_clicks_on_trade_panel() {
		  System.out.println("User clicks on trade panel");
	}
}
