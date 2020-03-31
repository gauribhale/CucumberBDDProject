/*
 * package StepDefinitions;
 * 
 * import java.util.List; import java.util.Map;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.chrome.ChromeDriver; import org.testng.Assert;
 * 
 * import io.cucumber.datatable.DataTable; import io.cucumber.java.en.And;
 * import io.cucumber.java.en.Given; import io.cucumber.java.en.Then; import
 * io.cucumber.java.en.When;
 * 
 * public class loginMapStepDefinition {
 * 
 * WebDriver driver;
 * 
 * @Given("^user is on Login Page$") public void user_is_on_login_page() {
 * System.setProperty("webdriver.chrome.driver",
 * "D:\\Selenium_Tutorials\\FreeCRMBDDProject\\src\\test\\resources\\Executables\\chromedriver.exe"
 * ); driver = new ChromeDriver(); driver.get("https://www.facebook.com/");
 * driver.manage().window().maximize(); driver.manage().deleteAllCookies(); }
 * 
 * @When("^title of Login Page is Facebook$") public void
 * title_of_login_page_is_facebook() {
 * Assert.assertTrue(driver.getTitle().toLowerCase().contains("facebook")); }
 * 
 * @Then("^user enter email and password$") public void
 * user_enter_email_and_password(DataTable table) { Map<String, String> data =
 * (Map<String, String>) table.asMaps(String.class, String.class);
 * driver.findElement(By.xpath("//input[@id='email']")).sendKeys(data.get(
 * "email"));
 * driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(data.get(
 * "password")); }
 * 
 * @Then("^user clicks on Login button$") public void
 * user_clicks_on_login_button() {
 * driver.findElement(By.xpath("//input[@type='submit']")).click(); }
 * 
 * @And("^user is on Home Page$") public void user_is_on_home_page() {
 * Assert.assertTrue(driver.getTitle().toLowerCase().contains("facebook"));
 * driver.quit(); }
 * 
 * }
 */