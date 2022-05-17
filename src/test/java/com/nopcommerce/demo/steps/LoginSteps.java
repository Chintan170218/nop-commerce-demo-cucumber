package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login Page is not displayed", expectedMessage, actualMessage);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }


    @Then("^I should login successfully \"([^\"]*)\"$")
    public void iShouldLoginSuccessfully(String loggedInMessage) {
        Assert.assertEquals("Home page is not displayed", loggedInMessage, new HomePage().getMyAccountText());
    }


    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        Assert.assertEquals("Error message is not displayed", errorMessage, new LoginPage().getErrorMessage());
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^I should see the LogIn Link Display \"([^\"]*)\"$")
    public void iShouldSeeTheLogInLinkDisplay(String loginMessage) {
    }

    @Then("^I should see the Home page displayed \"([^\"]*)\"$")
    public void iShouldSeeTheHomePageDisplayed(String homePageMessage) {
        Assert.assertEquals("Home page is not displayed", homePageMessage, new HomePage().getWelcomeText());
    }
}

