Feature: Register Test
  As a user, I want to register into the nop commerce website

  @Sanity, @Regression
  Scenario: User should navigate to the register page successfully
    Given I am on homepage
    When I click on the register link
    Then I should navigate to the registration page successfully "Register"


  @Smoke, @Regression
  Scenario Outline: Verify that all mandatory fields are required
    Given I am on homepage
    When I click on the register link
    And I click on the register button
    Then I should see an "<errorMessage>" message for the connected "<fieldName>"

    Examples:
      | fieldName       | errorMessage            |
      | FirstName       | First name is required. |
      | LastName        | Last name is required.  |
      | Email           | Email is required.      |
      | Password        | Password is required.   |
      | ConfirmPassword | Password is required.   |

  @Regression
  Scenario Outline: User should be able to create an account successfully
    Given I am on homepage
    When I click on the register link
    And I click on the male radio button
    And I enter into First Name Field "<firstName>"
    And I enter into Last Name Field "<lastName>"
    And I enter into Day Field "<day>"
    And I enter into Month Field "<month>"
    And I enter into Year Field "<year>"
    And I enter into Email Field "<email>"
    And I enter into Password Field "<password>"
    And I enter into Confirm Password Field "<confirmPassword>"
    And I click on the register button
    Then I should navigate to the Home page successfully "Your registration completed"

    Examples:
      | firstName | lastName   | day | month  | year | email                 | password           | confirmPassword    |
      | Jay       | Vaghani    | 10  | May    | 1968 | jayWong123@gmail.com  | Asdqwe123123zxc456 | Asdqwe123123zxc456 |
      | Amit      | Kathrotiya | 12  | July   | 1942 | amitWong123@gmail.com | Asdqwe123123zxc456 | Asdqwe123123zxc456 |
      | Aum       | Vaghani    | 14  | August | 1918 | aumWong123@gmail.com  | Asdqwe123123zxc456 | Asdqwe123123zxc456 |
