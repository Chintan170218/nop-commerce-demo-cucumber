package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Welcome to our store')]")
    WebElement welcomeText;

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement registerLink;

    @CacheLookup
    @FindBy(linkText = "Computers")
    WebElement computer;

    @CacheLookup
    @FindBy(linkText = "Electronics")
    WebElement electronics;

    @CacheLookup
    @FindBy(linkText = "Apparel")
    WebElement apparel;

    @CacheLookup
    @FindBy(linkText = "Digital downloads")
    WebElement digitalDownloads;

    @CacheLookup
    @FindBy(linkText = "Books")
    WebElement books;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Jewelry')]")
    WebElement jewelry;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Gift Cards')]")
    WebElement giftCards;

    @CacheLookup
    @FindBy(xpath = "//div[@class='header-logo']")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]")
    WebElement accountLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOut;


    public String getWelcomeText() {
        String message = getTextFromElement(welcomeText);
        log.info("Getting text from : " + welcomeText.toString());
        return message;
    }
    public void clickOnLoginLink() {
        log.info("Clicking on login link : " + loginLink.toString());
        clickOnElement(loginLink);
    }

    public void clickOnRegisterLink() {
        log.info("Clicking on register link : " + registerLink.toString());
        clickOnElement(registerLink);
    }

    public void clickOnElectronics() {
        log.info("Clicking on electronics link : " + electronics.toString());
        clickOnElement(electronics);
    }

    public void clickOnApparel() {
        log.info("Clicking on apparel link : " + apparel.toString());
        clickOnElement(apparel);
    }

    public void clickOnDigitalDownloads() {
        log.info("Clicking on Digital Downloads link : " + digitalDownloads.toString());
        clickOnElement(digitalDownloads);
    }

    public void clickOnBooks() {
        log.info("Clicking on books link : " + books.toString());
        clickOnElement(books);
    }

    public void clickOnJewelry() {
        log.info("Clicking on jewelry link : " + jewelry.toString());
        clickOnElement(jewelry);
    }

    public void clickOnGiftCards() {
        log.info("Clicking on giftCards link : " + giftCards.toString());
        clickOnElement(giftCards);
    }

    public void clickOnComputers() {
        log.info("Clicking on computer link : " + computer.toString());
        clickOnElement(computer);
    }

    public String getMyAccountText() {
        log.info("Getting text from : " + accountLink.toString());
        return getTextFromElement(accountLink);
    }

    public String getLogOutText() {
        log.info("Getting text from : " + logOut.toString());
        return getTextFromElement(logOut);
    }

    public void clickOnLogOutLink() {
        log.info("Clicking on the logout button : " + logOut.toString());
        clickOnElement(logOut);
    }
}
