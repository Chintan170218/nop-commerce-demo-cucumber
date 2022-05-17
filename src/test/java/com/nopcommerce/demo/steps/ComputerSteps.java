package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {

    @Then("^I should be able see the \"([^\"]*)\" page$")
    public void iShouldBeAbleSeeThePage(String expectedText) {
        Assert.assertEquals("Desktops page not displayed", expectedText, new DesktopsPage().getDesktopsText());
    }

    @And("^I select the \"([^\"]*)\" tile$")
    public void iSelectTheTile(String buildYourOwnComputerText) {
        new BuildYourOwnComputerPage().clickOnBuildCop();
    }

    @When("^I click on the computer tab$")
    public void iClickOnTheComputerTab() {
        new HomePage().clickOnComputers();
    }

    @And("^I should see the \"([^\"]*)\" page$")
    public void iShouldSeeThePage(String computerText) {
        Assert.assertEquals("Computer Page is not displayed", computerText, new ComputerPage().getComputerText());
    }

    @And("^I click on Desktops$")
    public void iClickOnDesktops() {
        new ComputerPage().clickOnDesktopLink();
    }


    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().processorDropDown(processor);
    }

    @And("^I select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram) {
        new BuildYourOwnComputerPage().ramDropDown(ram);
    }

    @And("^I select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd) throws InterruptedException {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os) {
        new BuildYourOwnComputerPage().selectOS(os);
    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software) {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().addToCart();
    }

    @Then("^I should see product has been added to your shopping cart confirmation message$")
    public void iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage() throws InterruptedException {
        String expectedMessage = "The product has been added to your shopping cart";
        Assert.assertEquals("Product does not added to cart", expectedMessage, new BuildYourOwnComputerPage().getAddToCartBarMessage());
    }
}
