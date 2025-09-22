const { test, expect, request } = require('@playwright/test');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { text } = require('stream/consumers');
const loginpayload = { userEmail: "divyanshurawat1@gmail.com", userPassword: "Password@123" }
let token;


test.beforeAll(async () => {
    const apicontext =  await request.newContext();
    const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginpayload })

    expect(loginresponse.ok()).toBeTruthy();
    const loginresponsejson = await loginresponse.json(); 
     token = loginresponsejson.token
    console.log(token);
    


}
)

test.beforeEach(() => {

}
)

test('@API my first test case', async ({ page }) => {
    const products =  page.locator('.card-body')
    const productName = 'ZARA COAT 3';
   
    /* await page.locator('.text-reset').click()
    await page.locator('#firstName').fill("testfisrtname")
    await page.locator('#lastName').fill("testlastname") 
    await page.locator('#userEmail').fill("test.email@example.com")  
    await page.locator('#userMobile').fill("9891413357")  */
    
    //await page.locator('#userEmail').fill("anshika@gmail.com")
    //await page.locator('#userpassword').fill("")
   // await page.locator('#userPassword').fill("Iamking@000")
    //await page.locator('[value="Login"]').click()
    //await page.waitForLoadState('networkidle');
    //await  page.locator(".card-body b").first().waitFor()

    await page.addInitScript((token) => {
        window.localStorage.setItem('token', token);
      }, token);
      await page.goto('https://rahulshettyacademy.com/client')
    const titles = await page.locator(".card-body b").allTextContents()
    console.log(titles)
    const count = await products.count()
    console.log("products", products)
    
    var i;
    for(i=0; i<count; ++i)
    {
        console.log(i)
    
        if (products.nth(i).locator('b').textContent()== productName)
            {
            //add to cart
            productName.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }

    
    
    })