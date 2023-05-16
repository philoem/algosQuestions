Feature: ProgressBar

    Test if ProgressBar's component is mounted

    Background: Component is mounted
      Given ProgressBar component is rendered
      And Required elements are mounted
      And Default style is applied

    Scenario: Default progress bar
      And Correct value is applied

    Scenario: Math round value
      And Value is rounded

