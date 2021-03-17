Feature: percent Support

  Background: percent Calculator
    
    Scenario:  percent calculate 
        Given I have a calc with percent 50
        When I ask it  to say percent
        Then it should answer with percent 0.5