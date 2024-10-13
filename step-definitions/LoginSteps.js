const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('valid_user', 'valid_password');
});

When(/^I login with invalid credentials$/, async () => {
    await LoginPage.login('invalid_user', 'invalid_password');
});

Then(/^I should see the dashboard$/, async () => {
    await expect(browser).toHaveUrlContaining('/dashboard');
});

Then(/^I should see an error message$/, async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
});
    