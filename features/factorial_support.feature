Feature: factorial Support

  Background: factorial Calculator
    
    Scenario:  factorial calculate 
        Given I have a calc with factorial 5
        When I ask it  to say factorial
        Then it should answer with factorial 120