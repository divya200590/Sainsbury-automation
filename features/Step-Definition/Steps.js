const {Given, When, Then } = require('@cucumber/cucumber')
const {POmanager} = require('../../Pageobjects/POmanager'); 
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');
const { chromium } = require('playwright');
// importing playwright keyword so we can generate  a brower object and through that browser object we can use page.


Given('user launches an ecommerce website', async function () {
           // Write code here that turns the phrase above into concrete actions
          

        
               
               // const pomanager =  new POmanager(page);
              //these (with const infront of them like above)variables have scope limited to this block only
              //using this. will activate world constructor and we can use this is any of our step definition for a scenario.

// derivimg page as (page) has no meaning here as we are not using tests from mocha framework but we are using given from cucmber.

            this.loginpage = this.pomanager.getloginpage();
           await this.loginpage.launchwebsite();
         });


When('user login with username  {string} and password {string}', async function (username, password) {
// Write code here that turns the phrase above into concrete actions
             this.loginpage = this.pomanager.getloginpage();
           await this.loginpage.validLogin(username, password)
         });
       
Then('user adds {string} into cart', async function (productName) {
           // Write code here that turns the phrase above into concrete actions
               this.dashboard = this.pomanager.getdashboard();
   await this.dashboard.ProductsearchAddtocart(productName);
         });

 Then('user navigate to cart', async function () {
           // Write code here that turns the phrase above into concrete actions
      
        await this.dashboard.navigatetocart();

         });