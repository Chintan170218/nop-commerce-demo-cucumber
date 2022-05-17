package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {

    @When("^I click on the register link$")
    public void iClickOnTheRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to the registration page successfully \"([^\"]*)\"$")
    public void iShouldNavigateToTheRegistrationPageSuccessfully(String registrationPage) {
        Assert.assertEquals("Registration page is not displayed", registrationPage, new RegisterPage().getRegisterText());
    }

        @Then("^I should see an \"([^\"]*)\" message for the connected \"([^\"]*)\"$")
    public void iShouldSeeAnMessageForTheConnected(String errorMessage, String fieldName) {
        Assert.assertEquals("Field error message not displayed",new RegisterPage().getValidationErrorMessageForField(fieldName),errorMessage);
    }

    @And("^I click on the register button$")
    public void iClickOnTheRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }


    @And("^I click on the male radio button$")
    public void iClickOnTheMaleRadioButton() {
        new RegisterPage().clickOnGenderButton();
    }


    @And("^I enter into First Name Field \"([^\"]*)\"$")
    public void iEnterIntoFirstNameField(String firstName) {
        new RegisterPage().selectFirstName(firstName);
    }

    @And("^I enter into Last Name Field \"([^\"]*)\"$")
    public void iEnterIntoLastNameField(String lastName) {
        new RegisterPage().selectLastName(lastName);
    }

    @And("^I enter into Day Field \"([^\"]*)\"$")
    public void iEnterIntoDayField(String day) {
        new RegisterPage().selectDateOfBirth(day);
    }

    @And("^I enter into Month Field \"([^\"]*)\"$")
    public void iEnterIntoMonthField(String month) {
        new RegisterPage().selectMonthOfBirth(month);
    }

    @And("^I enter into Year Field \"([^\"]*)\"$")
    public void iEnterIntoYearField(String year) {
        new RegisterPage().selectYearOfBirth(year);
    }

    @And("^I enter into Email Field \"([^\"]*)\"$")
    public void iEnterIntoEmailField(String email) {
        new RegisterPage().sendEmailText(email);
    }

    @And("^I enter into Password Field \"([^\"]*)\"$")
    public void iEnterIntoPasswordField(String password) {
        new RegisterPage().sendPasswordText(password);
    }

    @And("^I enter into Confirm Password Field \"([^\"]*)\"$")
    public void iEnterIntoConfirmPasswordField(String confirmPassword) {
        new RegisterPage().sendConfirmText(confirmPassword);
    }

    @Then("^I should navigate to the Home page successfully \"([^\"]*)\"$")
    public void iShouldNavigateToTheHomePageSuccessfully(String successfulMessage) {
        Assert.assertEquals("Error message is not displayed", successfulMessage, new RegisterPage().getRegistrationCompletedText());
    }
}
