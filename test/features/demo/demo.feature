Feature: Demo feature

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first test result
        Then Url should match <ExpecteURL>
        Examples:
            | TestID     | SearchItem | ExpecteURL            |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |