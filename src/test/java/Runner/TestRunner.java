package Runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
		features = "src/test/java/Features", 
		glue = {"StepDefinitions" }, 
		monochrome = true, 			
		plugin = { "pretty", 
				"html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt",
                "json:target/cucumber-reports/CucumberTestReport.json"},
		dryRun = false
		
		)
/*
 * Cucumber options:
 *  dry run: to check feature and step definitions are mapped correctly 
 *  feature: path of feature files 
 *  glue: path of step definition files
 * OR tag: tags= {"@RegressionTest, @SmokeTest"}
 * AND tag:  {"@RegressionTest", "@SmokeTest"}
 * tags to not include: {"--@SmokeTest"}
 * strict: fail test if any steps are not defined 
 * monochrome: display the console output in readable form
 */

 public class TestRunner extends AbstractTestNGCucumberTests {
  
  }
 

/*public class TestRunner extends AbstractTestNGCucumberTests {
    private TestNGCucumberRunner testNGCucumberRunner;
 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runScenario(cucumberFeature.getClass());
    }
 
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideScenarios();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() {
        testNGCucumberRunner.finish();
    }
}*/