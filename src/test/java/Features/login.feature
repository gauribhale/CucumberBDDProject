@Functional
Feature: Facebook login functionality
 
@SmokeTest
Scenario: Facebook Login Test scenario 

	Given user is on Login Page 
	When title of Login Page is Facebook 
	Then user enter email and password 
		| gouri_bhale@yahoo.com | Gauri_6494 |
		
	Then user clicks on Login button 
	And user is on Home Page 
	
	#Examples are applicable for entire test case
	#Examples is used only with scenario outline
	
	#Feature:  Facebook login functionality 
	
	#Scenario: Facebook Login Test scenario 
	
	#	Given user is on Login Page 
	#	When title of Login Page is Facebook 
	#	Then user enter "<email>" and "<password>"
	#	
	
	#	Then user clicks on Login button 
	#	And user is on Home Page 
	#		Examples:
	#	| email | password |
	#	| gouri_bhale@yahoo.com | Gauri_6494 |