package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	WebDriver driver; 
	
	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "E:\\drivers\\chromedriver_104.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://neostox.com/sign-in");
	}
	
	@When("^user enters mobile number$")
	public void user_enters_username() {
		driver.findElement(By.xpath("//input[@id='txt_mobilenumber']")).sendKeys("9604154175");
	}
	
	
	@When("^user clicks on Submit button$")
	public void user_clicks_on_Submit_button() {
		driver.findElement(By.id("lnk_submitmobnumber")).click();
	}
	
	@When("^user enters pin$")
	public void user_enters_password()  {
	 driver.findElement(By.xpath("//input[@id='txt_accesspin']")).sendKeys("2812");
	}

	@When("^user clicks on Submit pin button$")
	public void user_clicks_on_Submit_pin_button(){
			driver.findElement(By.id("lnk_submitaccesspin")).click();
		
		
	}

	@Then("^user should land on HomePage$")
	public void user_should_land_on_HomePage() {
		
	}
	
	@And("^user closes browser$")
	public void user_closes_browser() {
		driver.quit();
	}
}
