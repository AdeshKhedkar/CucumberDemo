package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\makemytrip\\CucumberDemo\\src\\main\\java\\Features\\Login.feature",//Feature file path
glue ="StepDefination" ,//StepDefination path
plugin = {"pretty" , "html:test-output"},
dryRun= false,
monochrome = true, 
tags = {"@Login"}

		) 

/*
 * Cucumber options tag is used to provide a link between feature file and step defination file.
 * features : Feature file path
 * glue : StepDefination
 * dryRun : It is used to map feature file steps and step defination file
 * monochrome : It is used to display console output in proper readble format
 * tags = {"@Login" , "@Regression"}   AND Operator
 * tags = {"@Login, @Regression, @Sanity"}  OR operator
 */

public class RunnerClass {
	
	
	

}
