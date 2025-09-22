const { test, expect } = require('@playwright/test')
const { title } = require('node:process')
const { text } = require('node:stream/consumers')




test('@Web my first test case', async ({ page }) => {
    const products = await page.locator('.card-body')
    const productName = 'ZARA COAT 3';
    await page.goto('https://rahulshettyacademy.com/client')
    /* await page.locator('.text-reset').click()
    await page.locator('#firstName').fill("testfisrtname")
    await page.locator('#lastName').fill("testlastname") 
    await page.locator('#userEmail').fill("test.email@example.com")  
    await page.locator('#userMobile').fill("9891413357")  */

    await page.locator('#userEmail').fill("anshika@gmail.com")
    //await page.locator('#userpassword').fill("")
    await page.locator('#userPassword').fill("Iamking@000")
    await page.locator('[value="Login"]').click()
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor()

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles)
    const count = await products.count();
   
    for (let i = 0; i < count; ++i) 
        {
        if(await products.nth(i).locator('b').textContent() === productName) 
             {
            //add to cart
            await products.nth(i).locator('text = Add To Cart').click();
            break;
        }
       }
       await page.pause();
}


)