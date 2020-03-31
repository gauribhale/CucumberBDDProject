package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CreateAccountStepDefinition {
	
	WebDriver driver;
	WebDriverWait wait;
	 @Given("^User is on Login Page$")
	    public void user_is_on_login_page()  {
		 System.setProperty("webdriver.chrome.driver",
					"D:\\Selenium_Tutorials\\FreeCRMBDDProject\\src\\test\\resources\\Executables\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("https://www.facebook.com/");
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
	   }

	 @When("^Title of Login Page is Facebook$")
	    public void title_of_login_page_is_facebook()  {
	    	Assert.assertTrue(driver.getTitle().toLowerCase().contains("facebook"));
	    }

	 @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_enters_firstname_and_lastname(String firstName, String lastName) {
	    	wait=new WebDriverWait(driver,15);
	    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("firstname")));
	        driver.findElement(By.name("firstname")).sendKeys(firstName);
	        driver.findElement(By.name("lastname")).sendKeys(lastName);
	        }
	    
	 @And("^user enters emailid \"([^\"]*)\"$")
	    public void user_enters_emailid(String emailid) {
	        driver.findElement(By.name("reg_email__")).sendKeys(emailid);
	        driver.findElement(By.name("reg_email_confirmation__")).sendKeys(emailid);
	    }
	    
	 @And("^user enters password \"([^\"]*)\"$")
	    public void user_enters_newPassword(String newPassword) {
	        
	        driver.findElement(By.name("reg_passwd__")).sendKeys(newPassword);
	    }

	 @And("^user selects \"([^\"]*)\"$")
	    public void user_selects_gender(String gender) {
	     driver.findElement(By.xpath("//label[contains(text(),'"+gender+"')]")).click();   
	    }

	 @And("^user clicks on SignUp button$")
	    public void user_clicks_on_signup_button() {
	        driver.findElement(By.name("websubmit")).click();
	        driver.findElement(By.className("_42ft _4jy0 layerConfirm _2rsa uiOverlayButton _4jy3 _4jy1 selected _51sy")).click();
	        driver.findElement(By.name("websubmit")).click();
	        //driver.switchTo().alert().accept();
	    }

	 @Then("^user creates account successfully$")
	    public void user_creates_account_successfully() {
	    	Assert.assertTrue(driver.getTitle().toLowerCase().contains("facebook"));
			driver.quit();
	    }
	    

}


