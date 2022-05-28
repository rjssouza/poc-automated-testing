#language: en
Feature: Google
    As google user
    I want to search for an item
    To receive the result

@google
Scenario: Navigating google
    Given Access google
    When Type "<search>"
    Then Receive "<expectedResult>" on first page

Examples:
    | search | expectedResult |
    | Red    | Red  |