Feature: couper.io
  Scenario: couper.io in English

    When couper.io is opened in "en" with complete metadata
      Then the URL contains "/en"
        And the header is complete
        And the footer is complete

        And "h1" is present 1 time

    When "use-cases" is chosen in the top menu in "en"
      Then the URL contains "/en/use-cases"
        And "h1" is present 1 time

    When "features" is chosen in the top menu in "en"
      Then the URL contains "/en/features"
        And "h1" is present 1 time

    When "docs" is chosen in the top menu in "en"
      Then the URL contains "/en/docs"
        And "h1" is present 1 time

    When "subscriptions" is chosen in the top menu in "en"
      Then the URL contains "/en/subscriptions"
        And "h1" is present 1 time
