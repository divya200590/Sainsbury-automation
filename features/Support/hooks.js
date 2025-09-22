const { Before, After, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium } = require('playwright');
const {POmanager} = require('../../Pageobjects/POmanager'); 







Before(async function(){

  this.browser = await chromium.launch({ headless: false });
         this.context = await this.browser.newContext();
         this.page = await this.context.newPage();
         this.pomanager =  new POmanager(this.page);

})

After(async function(){
if (this.browser) {
    await this.browser.close();
  }

  BeforeStep (function(){

  })

  AfterStep(async function({result}){
if (result.status = Status.FAILED){
    await this.page.screenshot({path : 'Screenshot 1.png'})
}

 //After every step result will be sent to after step and here we can catch it  

  })


})