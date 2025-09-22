Feature: Ecommerce validation


Scenario Outline: Scenario Outline name: Login and adding item to cart

Given user launches an ecommerce website 
When user login with username  "<username>" and password "<password>"
Then user adds "<product>" into cart
Then user navigate to cart

Examples:
    | username                   | password       | product |
    | divyanshurawat1@gmail.com  | Password@123  | Zara coat 3  |
    | testemail@gmail.com        | test@123      | Zara coat 4 |
    