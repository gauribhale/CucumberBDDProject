@Functional
Feature: Facebook create account functionality 

@RegressionTest
Scenario Outline: Facebook create account Test scenario 

	Given User is on Login Page 
	When Title of Login Page is Facebook 
	Then user enters "<firstName>" and "<lastName>" 
	And user enters emailid "<emailid>" 
	And user enters password "<newPassword>" 
	And user selects "<gender>" 
	And user clicks on SignUp button 
	Then user creates account successfully 
	
	Examples: 
		| firstName | lastName  | emailid | newPassword | gender |
		| selenium  | automation| selenium@yahoo.com | Gauri_6494 | Female |
		
		