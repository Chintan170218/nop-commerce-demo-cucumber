package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement maleFemaleRadio;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfDay;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[2]")
    WebElement dateofMonth;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement dateOfYear;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement email;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(css = "#register-button")
    WebElement registerButton;

    @CacheLookup
    @FindBy(css = ".result")
    WebElement verifyRegistrationMessage;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement verifyFirstNameError;

    @CacheLookup
    @FindBy(id = "LastName-error")
    WebElement verifyLastNameError;

    @CacheLookup
    @FindBy(id = "Email-error")
    WebElement verifyEmailError;

    @CacheLookup
    @FindBy(id = "Password-error")
    WebElement verifyPasswordError;

    @CacheLookup
    @FindBy(id = "ConfirmPassword-error")
    WebElement verifyConfPasswordError;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueButton;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldValidationErrors;

    public String getRegisterText() {
        log.info("Getting text from : " + registerText.toString());
        return getTextFromElement(registerText);
    }

    public void clickOnGenderButton() {
        log.info("Click on Male Gender radio button : " + maleFemaleRadio.toString());
        clickOnElement(maleFemaleRadio);
    }

    public void selectFirstName(String text) {
        log.info("Enter text into : " + firstName.toString());
        sendTextToElement(firstName, text);
    }

    public void selectLastName(String text) {
        log.info("Enter text into : " + lastName.toString());
        sendTextToElement(lastName, text);
    }

    public void selectDateOfBirth(String date) {
        log.info("Enter text into : " + dateOfDay.toString());
        selectByVisibleTextFromDropDown(dateOfDay, date);
    }

    public void selectMonthOfBirth(String month) {
        log.info("Enter text into : " + dateofMonth.toString());
        selectByVisibleTextFromDropDown(dateofMonth, month);
    }

    public void selectYearOfBirth(String year) {
        log.info("Enter text into : " + dateOfYear.toString());
        selectByVisibleTextFromDropDown(dateOfYear, year);
    }

    public void sendEmailText(String text) {
        log.info("Enter text into : " + email.toString());
        sendTextToElement(email, text);
    }

    public void sendPasswordText(String text) {
        log.info("Enter text into : " + password.toString());
        sendTextToElement(password, text);
    }

    public void sendConfirmText(String text) {
        log.info("Enter text into : " + confirmPassword.toString());
        sendTextToElement(confirmPassword, text);
    }

    public void clickOnRegisterButton() {
        log.info("Click on Register button : " + registerButton.toString());
        clickOnElement(registerButton);
    }

    public String getRegistrationCompletedText() {
        log.info("Getting text from : " + verifyRegistrationMessage.toString());
        return getTextFromElement(verifyRegistrationMessage);
    }

    public String getFirstNameErrorText() {
        log.info("Getting text from : " + verifyFirstNameError.toString());
        return getTextFromElement(verifyFirstNameError);
    }

    public String getLastNameErrorText() {
        log.info("Getting text from : " + verifyLastNameError.toString());
        return getTextFromElement(verifyLastNameError);
    }

    public String getEmailErrorText() {
        log.info("Getting text from : " + verifyEmailError.toString());
        return getTextFromElement(verifyEmailError);
    }

    public String getPasswordErrorText() {
        log.info("Getting text from : " + verifyPasswordError.toString());
        return getTextFromElement(verifyPasswordError);
    }

    public String getPasswordConfErrorText() {
        log.info("Getting text from : " + verifyConfPasswordError.toString());
        return getTextFromElement(verifyConfPasswordError);
    }

    public String getValidationErrorMessageForField(String fieldName) {
        String validationMessage = null;
        for (WebElement message : fieldValidationErrors) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();
                log.info("Getting text from : " + verifyConfPasswordError.toString());
                break;
            }
        } return validationMessage;
    }
}