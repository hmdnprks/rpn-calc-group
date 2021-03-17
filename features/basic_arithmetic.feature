Feature: Basic Arithmetic

  Background: Basic Calculator
    
    Scenario: calculate add
        Given I have a calc with 12 3
        When I ask it to say add
        Then it should answer with add 15

    Scenario: calculate add negative number
        Given I have a calc with -1 -2
        When I ask it to say add
        Then it should answer with add -3
        
    Scenario: calculate add
        Given I have a calc with '1 2 3 + - 4 '
        When I ask it to say add
        Then it should answer with add 0

    Scenario: calculate subtract
        Given I have a calc with 12 3
        When I ask it to say subtract
        Then it should answer with sub 9 

    Scenario: calculate multiply
        Given I have a calc with 12 3
        When I ask it to say multiply
        Then it should answer with mul 36 

    Scenario: calculate divide
        Given I have a calc with 12 3
        When I ask it to say divide
        Then it should answer with div 4   