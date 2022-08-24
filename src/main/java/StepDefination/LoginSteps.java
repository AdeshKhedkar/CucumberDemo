package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


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
	public void user_clicks_on_Submit_pin_button() throws InterruptedException{
			driver.findElement(By.id("lnk_submitaccesspin")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("(//a[text()='OK'])[1]")).click();
	}

	@Then("^user should land on HomePage$")
	public void user_should_land_on_HomePage() {
		
	}
	
	@And("^user closes browser$")
	public void user_closes_browser() {
		driver.quit();
	}
	
	@And("^user clicks on Expand and collapse button$")
	public void user_clicks_on_Expand_and_collapse_button() {
		
		driver.findElement(By.xpath("//button[@title='Show Instrument List']")).click();
	}
	
	@Then("user clicks on pending order")
	public void user_clicks_on_pending_order() {
	  
		driver.findElement(By.xpath("//a[@id='lnk_pendingorders']")).click();
	}
	
}
