
package StepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinition {
	WebDriver driver;
	
	@Before  //runs before all the scenarios //Global hooks
	//@Before("@First") runs for tagged scenario only and not for all
	//@Before(order=0) to run in order
	public void setUp() {
		System.out.println("launch chrome");
		System.out.println("enter url");
	}
	
	@After//runs after all te scenarios
	public void tearDown() {
		System.out.println("close browser");
	}
	
	
	@Given("^user is on Login Page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Selenium_Tutorials\\FreeCRMBDDProject\\src\\test\\resources\\Executables\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}

	@When("^title of Login Page is Facebook$")
	public void title_of_login_page_is_facebook() {
		Assert.assertTrue(driver.getTitle().toLowerCase().contains("facebook"));
	}

	@Then("^user enter email and password$")
	public void user_enter_email_and_password(DataTable table) {
		List<List<String>> data = table.asLists();
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(data.get(0).get(0));
		driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on Login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@And("^user is on Home Page$")
	public void user_is_on_home_page() {
		Assert.assertTrue(driver.getTitle().toLowerCase().contains("facebook"));
		driver.quit();
	}

}
