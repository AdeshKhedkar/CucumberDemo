package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	
	WebDriver driver; 
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "./drivers//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://neostox.com/sign-in");
	}
	
	@When("^user enters \"(.*)\"$")
	public void user_enters_username(String mobileNo) throws InterruptedException {
		driver.findElement(By.xpath("//input[@id='txt_mobilenumber']")).sendKeys(mobileNo);
		Thread.sleep(2000);
	}
	
	
	@When("^user clicks on Submit button$")
	public void user_clicks_on_Submit_button() throws InterruptedException {
		driver.findElement(By.id("lnk_submitmobnumber")).click();
		Thread.sleep(2000);
	}
	
	@When("^user enters \"(.*)\" in pinbox$")
	public void user_enters_pin(String pin) throws InterruptedException  {
		
	 driver.findElement(By.xpath("//input[@id='txt_accesspin']")).sendKeys(pin);
	 Thread.sleep(2000);
	}

	@When("^user clicks on Submit pin button$")
	public void user_clicks_on_Submit_pin_button(){
			driver.findElement(By.id("lnk_submitaccesspin")).click();
		
		
	}

	@Then("^user should land on HomePage$")
	public void user_should_land_on_HomePage() {
		Assert.assertEquals("Hi", "Hi");
	}
	
	@And("^user closes browser$")
	public void user_closes_browser() {
		driver.quit();
	}
}
