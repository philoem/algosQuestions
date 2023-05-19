Feature: ScrollToTop

    Test if ScrollToTop's component is mounted

    Background: Component is mounted
      Given ScrollToTop component is rendered
      And Required elements are mounted
      And Default style is applied

    Scenario: ScrollToTop is display
      When User scroll to end of list
      Then ScrollToTop callback should be called
      And ScrollToTop's icon is display

