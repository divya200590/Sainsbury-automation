const {test,expect} = require('@playwright/test');
 
test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    
    const email = "anshika@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body"); //when we declare here, we will be able to get all the products in that page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
    const count = await products.count();
    for(let i=0;i<count;++i)
    {
       if(await products.nth(i).locator("b").textContent() === productName)
       {
        //add to cart
        await products.nth(i).locator("text =  Add To Cart").click();
        break;
        
       }
    
   
    }
})