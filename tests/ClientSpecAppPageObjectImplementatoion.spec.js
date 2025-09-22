const { test, expect } = require('@playwright/test');
//const { LoginPage } = require('../Pageobjects/LoginPage');
//const { Dashboard } = require('../Pageobjects/Dashboard');
//importing login page, and then getting rid of it as we have POmanager file where we have imported these.
//and we will directly import POmanager file
const {POmanager} = require('../Pageobjects/POmanager');
const { json } = require('stream/consumers');
const dataset = JSON.parse(JSON.stringify(require('../Utils/Testdata.json')))

test('register and login', async ({ page }) => {
   await page.goto('https://rahulshettyacademy.com/client')
   await page.locator('.text-reset').click()
   await page.locator('#firstName').fill('Divyanshu')
   await page.locator('#lastName').fill('Rawat')
   await page.locator('#userEmail').fill('divyanshurawat1@gmail.com')
   await page.locator('#lastName').fill('Rawat')
   await page.locator('#userMobile').fill('9891412234')

   await page.locator('[formcontrolname="occupation"]', 'Engineer')

   await page.click('input[type="radio"][value="Female"]');
   await expect(page.locator('input[type="radio"][value="Female"]')).toBeChecked()
   await page.locator('#userPassword').fill("Password@123")
   await page.locator('#confirmPassword').fill("Password@123")
   await page.check('input[type="checkbox"]')
   await expect(page.locator('input[type="checkbox"]')).toBeChecked()
   await page.locator('#login').click()

})

for (const data of dataset)
   {
test.only(`Cleint app login for ${data.productName}`, async ({ page }) => {



   //const products = page.locator('.card-body')
   //const productName = 'ZARA COAT 3';
   //const email = 'divyanshurawat1@gmail.com'
   //const password = 'Password@123'


   const pomanager =  new POmanager(page);

   const loginpage = pomanager.getloginpage();
   await loginpage.launchwebsite();
   await loginpage.validLogin(data.email, data.password)

   const dashboard = pomanager.getdashboard();
   await dashboard.ProductsearchAddtocart(data.productName);
   await dashboard.navigatetocart();
  

   // creating object for loginpage class and passing page as an argument.
   //this page value will come to the constructor in loginpage file and page will get activated.

  
   // networkidle will wait for all the network calls to complete so that the page 
   //is fully loaded. by this way it will be easier to locate elements.

   // here it is waiting for the locator element to be present and it works for single element only
   

   
   await page.locator('div li').first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();

   await page.locator("text= Checkout").click();
   await page.locator("[placeholder*='Country']").click();
   await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 });
   // typing single word and then searching for matching text
   const dropdown = page.locator(".ta-results");

   await expect(dropdown).toBeVisible({ timeout: 5000 });
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

   await expect(page.locator('.user__name [type ="text"]').first()).toHaveText(data.email)
   await page.locator('.action__submit').click()
   await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')
   const orderid = await page.locator(' .em-spacer-1 .ng-star-inserted').textContent()
   console.log(orderid)

   await page.locator('button[routerlink = "/dashboard/myorders"]').click()
   await page.locator('tbody').waitFor()
   const rows = page.locator('tbody tr')
   let roworderid;
   for (let i = 0; i < await rows.count(); i++) {
      const roworderid = await rows.nth(i).locator('th').textContent();
      if (orderid.includes(roworderid)) {
         await rows.nth(i).locator('.btn').first().click()
         break;
      }
   }

   const orderdetails = await page.locator('.col-text ').textContent()
   expect(roworderid.includes(orderdetails)).toBeTruthy()


})
}

test('Child page', async ({ browser }) => {

   const context = await browser.newContext()
   const page = await context.newPage()


   await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
   const documentlink = page.getByRole('link', { name: 'Free Access to InterviewQues/' })
   await page.getByRole('link', { name: 'Free Access to InterviewQues/' }).click()
   //await documentlink.click()
   const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      documentlink.click()])
   const Doctext = await newPage.locator('.red').textContent()

   console.log(Doctext)
   await page.locator('#username').fill("test")

})


   