Feature: Decimal Support

  Background: Decimal Calculator
    
    Scenario: calculate decimal add
        Given I have a calc with decimal 12.1 3.2
        When I ask it decimal to say add
        Then it decimal should answer with add 15.3

    Scenario: calculate subtract
        Given I have a calc with decimal 12.5 3.2
        When I ask it decimal to say subtract
        Then it decimal should answer with sub 9.3

    Scenario: calculate multiply
        Given I have a calc with decimal 12.1 3.2
        When I ask it decimal to say multiply
        Then it decimal should answer with mul 38.72

    Scenario: calculate divide
        Given I have a calc with decimal 38.72 3.2
        When I ask i decimal to say divide
        Then it decimal should answer with div 12.1   