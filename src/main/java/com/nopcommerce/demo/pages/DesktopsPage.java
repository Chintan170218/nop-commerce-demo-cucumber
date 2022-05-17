package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;


public class DesktopsPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement desktopsText;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Sort by')]")
    WebElement sortBy;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Display')]")
    WebElement display;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement productList;



    public String getDesktopsText(){
        log.info("Getting text from : " + desktopsText.toString());
        return getTextFromElement(desktopsText);
    }
    public void  clickOnSortBy(){
        log.info("Click on Sort By button : " + sortBy.toString());
        clickOnElement(sortBy);
    }
    public void  clickOnProductList(){
        log.info("Click on Product List button : " + productList.toString());
        clickOnElement(productList);
    }
    public void  clickDisplay(){
        log.info("Click on Display button : " + display.toString());
        clickOnElement(display);
    }
}