package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\makemytrip\\CucumberDemo\\src\\main\\java\\Features\\Login.feature",//Feature file path
glue ="D:\\makemytrip\\CucumberDemo\\src\\main\\java\\StepDefination\\LoginSteps.java") //StepDefination path
public class RunnerClass {
	
	
	

}
