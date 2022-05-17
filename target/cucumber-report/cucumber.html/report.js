$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Build Your Own Computer Test",
  "description": "As a user, I want to build my own computer on the nop commerce website",
  "id": "build-your-own-computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11455252000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should navigate to the Computer Page successfully",
  "description": "",
  "id": "build-your-own-computer-test;i-should-navigate-to-the-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity,"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the \"Computers\" page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 506794800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheComputerTab()"
});
formatter.result({
  "duration": 1819782400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iShouldSeeThePage(String)"
});
formatter.result({
  "duration": 90114800,
  "status": "passed"
});
formatter.after({
  "duration": 1248251500,
  "status": "passed"
});
formatter.before({
  "duration": 6266848900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should navigate to the Desktops Page successfully",
  "description": "",
  "id": "build-your-own-computer-test;i-should-navigate-to-the-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke,"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able see the \"Desktops\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheComputerTab()"
});
formatter.result({
  "duration": 1093374200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 2181813800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleSeeThePage(String)"
});
formatter.result({
  "duration": 148912300,
  "status": "passed"
});
formatter.after({
  "duration": 1831695400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "I should be able to build my own computer and add to cart successfully",
  "description": "",
  "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able see the \"Desktops\" page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select the \"Build your own computer\" tile",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 34,
      "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 35,
      "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 36,
      "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 37,
      "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4941705400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "I should be able to build my own computer and add to cart successfully",
  "description": "",
  "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able see the \"Desktops\" page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select the \"Build your own computer\" tile",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheComputerTab()"
});
formatter.result({
  "duration": 1576282700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 1394083200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleSeeThePage(String)"
});
formatter.result({
  "duration": 88774500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectTheTile(String)"
});
formatter.result({
  "duration": 174472000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 1474699800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 162967300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 129175600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 118792900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 102220700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 83843600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 1875347300,
  "status": "passed"
});
formatter.after({
  "duration": 1137884900,
  "status": "passed"
});
formatter.before({
  "duration": 5574416800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "I should be able to build my own computer and add to cart successfully",
  "description": "",
  "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able see the \"Desktops\" page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select the \"Build your own computer\" tile",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheComputerTab()"
});
formatter.result({
  "duration": 1323856100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 718622200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleSeeThePage(String)"
});
formatter.result({
  "duration": 73860400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectTheTile(String)"
});
formatter.result({
  "duration": 132549100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 1796921900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 200235300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 231282600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 276855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 247397700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 136513200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 2066695600,
  "status": "passed"
});
formatter.after({
  "duration": 1207733700,
  "status": "passed"
});
formatter.before({
  "duration": 6188268000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should be able to build my own computer and add to cart successfully",
  "description": "",
  "id": "build-your-own-computer-test;i-should-be-able-to-build-my-own-computer-and-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able see the \"Desktops\" page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select the \"Build your own computer\" tile",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select OS \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see product has been added to your shopping cart confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 93900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnTheComputerTab()"
});
formatter.result({
  "duration": 1374047000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 1238121900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleSeeThePage(String)"
});
formatter.result({
  "duration": 74693600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectTheTile(String)"
});
formatter.result({
  "duration": 170241400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 1248042300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 139120500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 149738000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 102327100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 219106200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 103396800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeProductHasBeenAddedToYourShoppingCartConfirmationMessage()"
});
formatter.result({
  "duration": 1891840400,
  "status": "passed"
});
formatter.after({
  "duration": 1021766500,
  "status": "passed"
});
formatter.uri("loginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user, I want to login into the nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4690931600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to the login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-the-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity,"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1111934000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 78519400,
  "status": "passed"
});
formatter.after({
  "duration": 1205576800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity,"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 23,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4681795000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Sanity,"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1092938200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 322042300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 171391300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1244328800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 65292400,
  "status": "passed"
});
formatter.after({
  "duration": 1465540200,
  "status": "passed"
});
formatter.before({
  "duration": 3802684000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Sanity,"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 81500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1018811400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 336951400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 215916000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 851341400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 168702400,
  "status": "passed"
});
formatter.after({
  "duration": 1177573600,
  "status": "passed"
});
formatter.before({
  "duration": 5007956700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Sanity,"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1052880900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 252501700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 144587100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 619620000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 63875800,
  "status": "passed"
});
formatter.after({
  "duration": 990250700,
  "status": "passed"
});
formatter.before({
  "duration": 3928456900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Smoke,"
    },
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"Chintan192@outlook.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"nUuhK089uoiu781!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should login successfully \"My account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 918636500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chintan192@outlook.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 140932000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nUuhK089uoiu781!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 168302400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 780267900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 29
    }
  ],
  "location": "LoginSteps.iShouldLoginSuccessfully(String)"
});
formatter.result({
  "duration": 74372500,
  "status": "passed"
});
formatter.after({
  "duration": 1024024100,
  "status": "passed"
});
formatter.before({
  "duration": 3955549900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that the User should logout successFully",
  "description": "",
  "id": "login-test;verify-that-the-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter email \"Chintan192@outlook.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter password \"nUuhK089uoiu781!\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should login successfully \"My account\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the Home page displayed \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 923631300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chintan192@outlook.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 234168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nUuhK089uoiu781!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 162616400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 859840200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 29
    }
  ],
  "location": "LoginSteps.iShouldLoginSuccessfully(String)"
});
formatter.result({
  "duration": 88273000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 788340900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 38
    }
  ],
  "location": "LoginSteps.iShouldSeeTheHomePageDisplayed(String)"
});
formatter.result({
  "duration": 70787900,
  "status": "passed"
});
formatter.after({
  "duration": 1012367600,
  "status": "passed"
});
formatter.uri("registerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user, I want to register into the nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3627062000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to the register page successfully",
  "description": "",
  "id": "register-test;user-should-navigate-to-the-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity,"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to the registration page successfully \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 1006630700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 57
    }
  ],
  "location": "RegisterSteps.iShouldNavigateToTheRegistrationPageSuccessfully(String)"
});
formatter.result({
  "duration": 63985600,
  "status": "passed"
});
formatter.after({
  "duration": 927790100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify that all mandatory fields are required",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke,"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see an \"\u003cerrorMessage\u003e\" message for the connected \"\u003cfieldName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required;",
  "rows": [
    {
      "cells": [
        "fieldName",
        "errorMessage"
      ],
      "line": 19,
      "id": "register-test;verify-that-all-mandatory-fields-are-required;;1"
    },
    {
      "cells": [
        "FirstName",
        "First name is required."
      ],
      "line": 20,
      "id": "register-test;verify-that-all-mandatory-fields-are-required;;2"
    },
    {
      "cells": [
        "LastName",
        "Last name is required."
      ],
      "line": 21,
      "id": "register-test;verify-that-all-mandatory-fields-are-required;;3"
    },
    {
      "cells": [
        "Email",
        "Email is required."
      ],
      "line": 22,
      "id": "register-test;verify-that-all-mandatory-fields-are-required;;4"
    },
    {
      "cells": [
        "Password",
        "Password is required."
      ],
      "line": 23,
      "id": "register-test;verify-that-all-mandatory-fields-are-required;;5"
    },
    {
      "cells": [
        "ConfirmPassword",
        "Password is required."
      ],
      "line": 24,
      "id": "register-test;verify-that-all-mandatory-fields-are-required;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4562654000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that all mandatory fields are required",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see an \"First name is required.\" message for the connected \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 1139581800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 215894800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 17
    },
    {
      "val": "FirstName",
      "offset": 69
    }
  ],
  "location": "RegisterSteps.iShouldSeeAnMessageForTheConnected(String,String)"
});
formatter.result({
  "duration": 199121300,
  "status": "passed"
});
formatter.after({
  "duration": 886504500,
  "status": "passed"
});
formatter.before({
  "duration": 3799634500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that all mandatory fields are required",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see an \"Last name is required.\" message for the connected \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 1475847800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 313121500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 17
    },
    {
      "val": "LastName",
      "offset": 68
    }
  ],
  "location": "RegisterSteps.iShouldSeeAnMessageForTheConnected(String,String)"
});
formatter.result({
  "duration": 460599900,
  "status": "passed"
});
formatter.after({
  "duration": 1515938100,
  "status": "passed"
});
formatter.before({
  "duration": 3870622200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that all mandatory fields are required",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see an \"Email is required.\" message for the connected \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 970378700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 153375900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 17
    },
    {
      "val": "Email",
      "offset": 64
    }
  ],
  "location": "RegisterSteps.iShouldSeeAnMessageForTheConnected(String,String)"
});
formatter.result({
  "duration": 183830400,
  "status": "passed"
});
formatter.after({
  "duration": 868193800,
  "status": "passed"
});
formatter.before({
  "duration": 3662852800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that all mandatory fields are required",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see an \"Password is required.\" message for the connected \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 768200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 1352838200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 178191000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 17
    },
    {
      "val": "Password",
      "offset": 67
    }
  ],
  "location": "RegisterSteps.iShouldSeeAnMessageForTheConnected(String,String)"
});
formatter.result({
  "duration": 233843900,
  "status": "passed"
});
formatter.after({
  "duration": 908595300,
  "status": "passed"
});
formatter.before({
  "duration": 4115696700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that all mandatory fields are required",
  "description": "",
  "id": "register-test;verify-that-all-mandatory-fields-are-required;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    },
    {
      "line": 11,
      "name": "@Smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see an \"Password is required.\" message for the connected \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 747642400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 123865400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 17
    },
    {
      "val": "ConfirmPassword",
      "offset": 67
    }
  ],
  "location": "RegisterSteps.iShouldSeeAnMessageForTheConnected(String,String)"
});
formatter.result({
  "duration": 179885100,
  "status": "passed"
});
formatter.after({
  "duration": 1068694400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "User should be able to create an account successfully",
  "description": "",
  "id": "register-test;user-should-be-able-to-create-an-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on the male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter into First Name Field \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter into Last Name Field \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter into Day Field \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter into Month Field \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter into Year Field \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter into Email Field \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter into Password Field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter into Confirm Password Field \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should navigate to the Home page successfully \"Your registration completed\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "register-test;user-should-be-able-to-create-an-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "day",
        "month",
        "year",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 43,
      "id": "register-test;user-should-be-able-to-create-an-account-successfully;;1"
    },
    {
      "cells": [
        "Jay",
        "Vaghani",
        "10",
        "May",
        "1969",
        "jaySinghuPinghuDinghuBhadungu123@gmail.com",
        "Asdqwe123123zxc456",
        "Asdqwe123123zxc456"
      ],
      "line": 44,
      "id": "register-test;user-should-be-able-to-create-an-account-successfully;;2"
    },
    {
      "cells": [
        "Amit",
        "Kathrotiya",
        "12",
        "July",
        "1968",
        "amitSinghuPinghuDinghuBhadungu123@gmail.com",
        "Asdqwe123123zxc456",
        "Asdqwe123123zxc456"
      ],
      "line": 45,
      "id": "register-test;user-should-be-able-to-create-an-account-successfully;;3"
    },
    {
      "cells": [
        "Aum",
        "Vaghani",
        "14",
        "August",
        "1967",
        "aumSinghuPinghuDinghuBhadungu123@gmail.com",
        "Asdqwe123123zxc456",
        "Asdqwe123123zxc456"
      ],
      "line": 46,
      "id": "register-test;user-should-be-able-to-create-an-account-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3593605900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User should be able to create an account successfully",
  "description": "",
  "id": "register-test;user-should-be-able-to-create-an-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on the male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter into First Name Field \"Jay\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter into Last Name Field \"Vaghani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter into Day Field \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter into Month Field \"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter into Year Field \"1969\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter into Email Field \"jaySinghuPinghuDinghuBhadungu123@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter into Password Field \"Asdqwe123123zxc456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter into Confirm Password Field \"Asdqwe123123zxc456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should navigate to the Home page successfully \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 46500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 1367632500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheMaleRadioButton()"
});
formatter.result({
  "duration": 241011400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jay",
      "offset": 31
    }
  ],
  "location": "RegisterSteps.iEnterIntoFirstNameField(String)"
});
formatter.result({
  "duration": 201042200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vaghani",
      "offset": 30
    }
  ],
  "location": "RegisterSteps.iEnterIntoLastNameField(String)"
});
formatter.result({
  "duration": 818036800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "RegisterSteps.iEnterIntoDayField(String)"
});
formatter.result({
  "duration": 616858800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterIntoMonthField(String)"
});
formatter.result({
  "duration": 214902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1969",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.iEnterIntoYearField(String)"
});
formatter.result({
  "duration": 171455100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jaySinghuPinghuDinghuBhadungu123@gmail.com",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterIntoEmailField(String)"
});
formatter.result({
  "duration": 291574300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdqwe123123zxc456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterIntoPasswordField(String)"
});
formatter.result({
  "duration": 265749500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdqwe123123zxc456",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iEnterIntoConfirmPasswordField(String)"
});
formatter.result({
  "duration": 192917100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 1450838300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 49
    }
  ],
  "location": "RegisterSteps.iShouldNavigateToTheHomePageSuccessfully(String)"
});
formatter.result({
  "duration": 48456200,
  "status": "passed"
});
formatter.after({
  "duration": 1397502900,
  "status": "passed"
});
formatter.before({
  "duration": 3413471600,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User should be able to create an account successfully",
  "description": "",
  "id": "register-test;user-should-be-able-to-create-an-account-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on the male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter into First Name Field \"Amit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter into Last Name Field \"Kathrotiya\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter into Day Field \"12\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter into Month Field \"July\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter into Year Field \"1968\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter into Email Field \"amitSinghuPinghuDinghuBhadungu123@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter into Password Field \"Asdqwe123123zxc456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter into Confirm Password Field \"Asdqwe123123zxc456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should navigate to the Home page successfully \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 1131976900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheMaleRadioButton()"
});
formatter.result({
  "duration": 160819500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amit",
      "offset": 31
    }
  ],
  "location": "RegisterSteps.iEnterIntoFirstNameField(String)"
});
formatter.result({
  "duration": 179897000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kathrotiya",
      "offset": 30
    }
  ],
  "location": "RegisterSteps.iEnterIntoLastNameField(String)"
});
formatter.result({
  "duration": 169585700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 24
    }
  ],
  "location": "RegisterSteps.iEnterIntoDayField(String)"
});
formatter.result({
  "duration": 134582500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterIntoMonthField(String)"
});
formatter.result({
  "duration": 136321200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1968",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.iEnterIntoYearField(String)"
});
formatter.result({
  "duration": 154607700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amitSinghuPinghuDinghuBhadungu123@gmail.com",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterIntoEmailField(String)"
});
formatter.result({
  "duration": 278984300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdqwe123123zxc456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterIntoPasswordField(String)"
});
formatter.result({
  "duration": 188725000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdqwe123123zxc456",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iEnterIntoConfirmPasswordField(String)"
});
formatter.result({
  "duration": 192978300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 1455558400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 49
    }
  ],
  "location": "RegisterSteps.iShouldNavigateToTheHomePageSuccessfully(String)"
});
formatter.result({
  "duration": 42126600,
  "status": "passed"
});
formatter.after({
  "duration": 1085609200,
  "status": "passed"
});
formatter.before({
  "duration": 3903855000,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User should be able to create an account successfully",
  "description": "",
  "id": "register-test;user-should-be-able-to-create-an-account-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on the register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on the male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter into First Name Field \"Aum\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter into Last Name Field \"Vaghani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter into Day Field \"14\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter into Month Field \"August\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter into Year Field \"1967\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter into Email Field \"aumSinghuPinghuDinghuBhadungu123@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter into Password Field \"Asdqwe123123zxc456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter into Confirm Password Field \"Asdqwe123123zxc456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should navigate to the Home page successfully \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterLink()"
});
formatter.result({
  "duration": 748250800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheMaleRadioButton()"
});
formatter.result({
  "duration": 92651800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aum",
      "offset": 31
    }
  ],
  "location": "RegisterSteps.iEnterIntoFirstNameField(String)"
});
formatter.result({
  "duration": 108887600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vaghani",
      "offset": 30
    }
  ],
  "location": "RegisterSteps.iEnterIntoLastNameField(String)"
});
formatter.result({
  "duration": 111210800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 24
    }
  ],
  "location": "RegisterSteps.iEnterIntoDayField(String)"
});
formatter.result({
  "duration": 107409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "August",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterIntoMonthField(String)"
});
formatter.result({
  "duration": 105214700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1967",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.iEnterIntoYearField(String)"
});
formatter.result({
  "duration": 128085600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aumSinghuPinghuDinghuBhadungu123@gmail.com",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterIntoEmailField(String)"
});
formatter.result({
  "duration": 160638000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdqwe123123zxc456",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterIntoPasswordField(String)"
});
formatter.result({
  "duration": 124386900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asdqwe123123zxc456",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iEnterIntoConfirmPasswordField(String)"
});
formatter.result({
  "duration": 128444900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnTheRegisterButton()"
});
formatter.result({
  "duration": 792772000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 49
    }
  ],
  "location": "RegisterSteps.iShouldNavigateToTheHomePageSuccessfully(String)"
});
formatter.result({
  "duration": 38444000,
  "status": "passed"
});
formatter.after({
  "duration": 1216248300,
  "status": "passed"
});
});