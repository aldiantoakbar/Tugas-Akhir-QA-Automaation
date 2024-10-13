Feature: Login Functionality

Scenario: Login with valid credentials
  Given I am on the login page
  When I login with valid credentials
  Then I should see the dashboard

Scenario: Login with invalid credentials
  Given I am on the login page
  When I login with invalid credentials
  Then I should see an error message
