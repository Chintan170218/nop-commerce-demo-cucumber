package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/button[1]")
    WebElement buildComputer;

    @CacheLookup
    @FindBy(xpath = "//h2[@class='product-title']/a[contains(text(),'Build your own computer')]")
    WebElement buildComputerText;

    @CacheLookup
    @FindBy(id = "product_attribute_1")
    WebElement processorDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ramDropDown;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_3']//li/label")
    List<WebElement> hDDRadios;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_4']//li/label")
    List<WebElement> oSRadios;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_5']//li/label")
    List<WebElement> softwareCheckBoxes;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(id = "add-to-cart-button-1")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//p[@class=\"content\"]")
    WebElement addToCartText;

    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    By verifyTopBar;



    public void clickOnBuildCop() {
        log.info("Click on Build Computer button : " + buildComputer.toString());
        clickOnElement(buildComputer);
    }

    public String getBuildYourComputer() {
        log.info("Getting text from : " + buildComputerText.toString());
        return getTextFromElement(buildComputerText);
    }

    public void ramDropDown(String ram) {
        log.info("Click on Ram Drop Down button : " + ramDropDown.toString());
        selectByVisibleTextFromDropDown(ramDropDown, ram);
    }

    public void processorDropDown(String processor) {
        log.info("Click on Processor Drop Down button : " + processorDropDown.toString());
        selectByVisibleTextFromDropDown(processorDropDown, processor);
    }

    public void selectHDD(String hDdGB) {
        for (WebElement hdd : hDDRadios) {
            if (hdd.getText().equals(hDdGB)) {
                clickOnElement(hdd);
                log.info("Select HDD '" + hDdGB + "'" + "<br>");
                break;
            }
        }
    }

    public void selectOS(String oSName) {
        for (WebElement os : oSRadios) {
            if (os.getText().equals(oSName)) {
                clickOnElement(os);
                log.info("Select HDD '" + oSName + "'" + "<br>");
                break;
            }
        }
    }

    public void selectSoftware(String softwareName) {
        for (WebElement software : softwareCheckBoxes) {
            if (software.getText().equals(softwareName)) {
                clickOnElement(software);
                log.info("Select Software '" + software + "'" + "<br>");
                break;
            }
        }
    }

    public void addToCart() {
        log.info("Click on Add to Cart button : " + addToCart.toString());
        clickOnElement(addToCart);
    }

    public String getAddToCartBarMessage() throws InterruptedException {
        log.info("Get Add to Cart text : " + addToCartText.toString());
        Thread.sleep(1000);
        return getTextFromElement(addToCartText);
    }
}