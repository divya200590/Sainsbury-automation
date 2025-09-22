# Test info

- Name: @Web Client App login
- Location: /Users/divyanshu/Learning/Gitrepo/Playwright-automation/tests/SpecialLocators.spec.js:3:1

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

    at /Users/divyanshu/Learning/Gitrepo/Playwright-automation/tests/SpecialLocators.spec.js:14:48
```

# Page snapshot

```yaml
- banner:
  - text: Ecom
  - link " dummywebsite@rahulshettyacademy.com":
    - /url: emailto:dummywebsite@rahulshettyacademy.com
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
  - link "":
    - /url: "#"
- heading "We Make Your Shopping Simple" [level=3]
- heading "Practice Website for Rahul Shetty Academy Students" [level=1]:
  - text: Practice Website for
  - emphasis: Rahul Shetty Academy
  - text: Students
- link "Register":
  - /url: /client/auth/register
- paragraph: Register to sign in with your personal account
- heading "Log in" [level=1]
- text: Email
- textbox "email@example.com": anshika@gmail.com
- text: Password
- textbox "enter your passsword": Iamking@000
- button "Login"
- link "Forgot password?":
  - /url: /client/auth/password-new
- paragraph: Don't have an account? Register here
- heading "Why People Choose Us?" [level=1]
- text: 
- heading "3546540" [level=1]
- paragraph: Successfull Orders
- text: 
- heading "37653" [level=1]
- paragraph: Customers
- text: 
- heading "3243" [level=1]
- paragraph: Sellers
- text: 
- heading "4500+" [level=1]
- paragraph: Daily Orders
- text: 
- heading "500+" [level=1]
- paragraph: Daily New Customer Joining
```

# Test source

```ts
   1 | const {test,expect} = require('@playwright/test');
   2 |  
   3 | test('@Web Client App login', async ({ page }) => {
   4 |     //js file- Login js, DashboardPage
   5 |     
   6 |     const email = "anshika@gmail.com";
   7 |     const productName = 'ZARA COAT 3';
   8 |     const products = page.locator(".card-body"); //when we declare here, we will be able to get all the products in that page
   9 |     await page.goto("https://rahulshettyacademy.com/client");
  10 |     await page.locator("#userEmail").fill(email);
  11 |     await page.locator("#userPassword").type("Iamking@000");
  12 |     await page.locator("[value='Login']").click();
  13 |     await page.waitForLoadState('networkidle');
> 14 |     await page.locator(".card-body b").first().waitFor();
     |                                                ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  15 |     const titles = await page.locator(".card-body b").allTextContents();
  16 |     console.log(titles); 
  17 |     const count = await products.count();
  18 |     for(let i=0;i<count;++i)
  19 |     {
  20 |        if(await products.nth(i).locator("b").textContent() === productName)
  21 |        {
  22 |         //add to cart
  23 |         await products.nth(i).locator("text =  Add To Cart").click();
  24 |         break;
  25 |         
  26 |        }
  27 |     
  28 |    
  29 |     }
  30 | })
```