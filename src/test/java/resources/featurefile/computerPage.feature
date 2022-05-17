Feature: Build Your Own Computer Test
  As a user, I want to build my own computer on the nop commerce website

  @Sanity, @Regression
  Scenario: I should navigate to the Computer Page successfully
    Given I am on homepage
    When I click on the computer tab
    And I should see the "Computers" page

  @Smoke, @Regression
  Scenario: I should navigate to the Desktops Page successfully
    Given I am on homepage
    When I click on the computer tab
    And I click on Desktops
    Then I should be able see the "Desktops" page


  @Regression
  Scenario Outline: I should be able to build my own computer and add to cart successfully
    Given I am on homepage
    When I click on the computer tab
    And I click on Desktops
    And I should be able see the "Desktops" page
    And I select the "Build your own computer" tile
    And I select processor "<processor>"
    And I select ram "<ram>"
    And I select hdd "<hdd>"
    And I select OS "<os>"
    And I select Software "<software>"
    And I click on add to cart button
    Then I should see product has been added to your shopping cart confirmation message

    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | VistaHome [+$50.00]     | Total Commander [+$5.00]   |

