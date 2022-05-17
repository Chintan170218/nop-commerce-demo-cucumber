package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement computerText ;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/ul[1]/li[1]/a[1]")
    WebElement desktopsLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/ul[1]/li[2]/a[1]")
    WebElement noteBookLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[2]/div[1]/div[2]/ul[1]/li[1]/ul[1]/li[3]/a[1]")
    WebElement softWareLink;



    public String getComputerText(){
        log.info("Getting text from : " + computerText.toString());
        return getTextFromElement(computerText);
    }

    public void clickOnDesktopLink(){
        log.info("Click on Desktops button : " + desktopsLink.toString());
        clickOnElement(desktopsLink);
    }
    public void clickOnNoteBookLink(){
        log.info("Click on NoteBook button : " + noteBookLink.toString());
        clickOnElement(noteBookLink);
    }

    public void clickOnSoftWareLink(){
        log.info("Click on Software Link  : " + desktopsLink.toString());
        clickOnElement(desktopsLink);
    }
}