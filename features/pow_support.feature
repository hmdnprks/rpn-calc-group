Feature: Pow Support

  Background: Pow Calculator
    
    Scenario:  pow calculate 
        Given I have a calc with pow 3 2 
        When I ask it  to say pow
        Then it should answer with pow 9