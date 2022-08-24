package Runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;


@CucumberOptions(features = "src/main/java/Features",//Feature file path
glue ="StepDefination", //StepDefination path
dryRun=false, monochrome = true, tags= ("@hooks or @Login") 
		) 

/*
 * Cucumber options tag is used to provide a link between feature file and step defination file.
 * features : Feature file path
 * glue : StepDefination
 * dryRun : It is used to map feature file steps and step defination file
 * monochrome : It is used to display console output in proper readble format
 * tags = {"@Login" , "@Regression"}   AND Operator
 * tags = {"@Login, @Regression, @Sanity"}  OR operator --> Junit
 * tags= ("@Adesh or @PendingOrder or @Login")   OR operator --> TestNG
 */

public class RunnerClass extends AbstractTestNGCucumberTests {
	

}
