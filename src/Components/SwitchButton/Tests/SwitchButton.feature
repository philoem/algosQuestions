Feature: Switch Button clickable

    Testing switch button

    Background: Component well mounted
      Given Switch button is rendered
      And Required elements are mounted
      And Default style is applied

    Scenario: Switch button clicked for the first time
    When Switch button is clicked
    Then Switch button is checked
    And Switch button callback should be called