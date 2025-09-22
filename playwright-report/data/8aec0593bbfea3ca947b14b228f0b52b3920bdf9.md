# Test info

- Name: Cleint app login for Adidas Original
- Location: /Users/divyanshu/Learning/Gitrepo/Playwright-automation/tests/ClientSpecAppPageObjectImplementatoion.spec.js:33:6

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

    at /Users/divyanshu/Learning/Gitrepo/Playwright-automation/tests/ClientSpecAppPageObjectImplementatoion.spec.js:65:41
```

# Page snapshot

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- heading "No Products in Your Cart !" [level=1]
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 | //const { LoginPage } = require('../Pageobjects/LoginPage');
   3 | //const { Dashboard } = require('../Pageobjects/Dashboard');
   4 | //importing login page, and then getting rid of it as we have POmanager file where we have imported these.
   5 | //and we will directly import POmanager file
   6 | const {POmanager} = require('../Pageobjects/POmanager');
   7 | const { json } = require('stream/consumers');
   8 | const dataset = JSON.parse(JSON.stringify(require('../Utils/Testdata.json')))
   9 |
   10 | test('register and login', async ({ page }) => {
   11 |    await page.goto('https://rahulshettyacademy.com/client')
   12 |    await page.locator('.text-reset').click()
   13 |    await page.locator('#firstName').fill('Divyanshu')
   14 |    await page.locator('#lastName').fill('Rawat')
   15 |    await page.locator('#userEmail').fill('divyanshurawat1@gmail.com')
   16 |    await page.locator('#lastName').fill('Rawat')
   17 |    await page.locator('#userMobile').fill('9891412234')
   18 |
   19 |    await page.locator('[formcontrolname="occupation"]', 'Engineer')
   20 |
   21 |    await page.click('input[type="radio"][value="Female"]');
   22 |    await expect(page.locator('input[type="radio"][value="Female"]')).toBeChecked()
   23 |    await page.locator('#userPassword').fill("Password@123")
   24 |    await page.locator('#confirmPassword').fill("Password@123")
   25 |    await page.check('input[type="checkbox"]')
   26 |    await expect(page.locator('input[type="checkbox"]')).toBeChecked()
   27 |    await page.locator('#login').click()
   28 |
   29 | })
   30 |
   31 | for (const data of dataset)
   32 |    {
   33 | test.only(`Cleint app login for ${data.productName}`, async ({ page }) => {
   34 |
   35 |
   36 |
   37 |    const products = page.locator('.card-body')
   38 |    //const productName = 'ZARA COAT 3';
   39 |    //const email = 'divyanshurawat1@gmail.com'
   40 |    //const password = 'Password@123'
   41 |
   42 |
   43 |    const pomanager =  new POmanager(page);
   44 |
   45 |    const loginpage = pomanager.getloginpage();
   46 |    await loginpage.launch();
   47 |    await loginpage.validLogin(data.email, data.password)
   48 |
   49 |    const dashboard = pomanager.getdashboard();
   50 |    await dashboard.ProductsearchAddtocart(data.productName);
   51 |    await dashboard.navigatetocart();
   52 |   
   53 |
   54 |    // creating object for loginpage class and passing page as an argument.
   55 |    //this page value will come to the constructor in loginpage file and page will get activated.
   56 |
   57 |   
   58 |    // networkidle will wait for all the network calls to complete so that the page 
   59 |    //is fully loaded. by this way it will be easier to locate elements.
   60 |
   61 |    // here it is waiting for the locator element to be present and it works for single element only
   62 |    
   63 |
   64 |    
>  65 |    await page.locator('div li').first().waitFor();
      |                                         ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
   66 |    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   67 |    expect(bool).toBeTruthy();
   68 |
   69 |    await page.locator("text= Checkout").click();
   70 |    await page.locator("[placeholder*='Country']").click();
   71 |    await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 });
   72 |    // typing single word and then searching for matching text
   73 |    const dropdown = page.locator(".ta-results");
   74 |
   75 |    await expect(dropdown).toBeVisible({ timeout: 5000 });
   76 |    const optionsCount = await dropdown.locator("button").count();
   77 |    for (let i = 0; i < optionsCount; ++i) {
   78 |       const text = await dropdown.locator("button").nth(i).textContent();
   79 |       if (text === " India") {
   80 |          await dropdown.locator("button").nth(i).click();
   81 |          break;
   82 |       }
   83 |    }
   84 |
   85 |    await expect(page.locator('.user__name [type ="text"]').first()).toHaveText(data.email)
   86 |    await page.locator('.action__submit').click()
   87 |    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')
   88 |    const orderid = await page.locator(' .em-spacer-1 .ng-star-inserted').textContent()
   89 |    console.log(orderid)
   90 |
   91 |    await page.locator('button[routerlink = "/dashboard/myorders"]').click()
   92 |    await page.locator('tbody').waitFor()
   93 |    const rows = page.locator('tbody tr')
   94 |    let roworderid;
   95 |    for (let i = 0; i < await rows.count(); i++) {
   96 |       const roworderid = await rows.nth(i).locator('th').textContent();
   97 |       if (orderid.includes(roworderid)) {
   98 |          await rows.nth(i).locator('.btn').first().click()
   99 |          break;
  100 |       }
  101 |    }
  102 |
  103 |    const orderdetails = await page.locator('.col-text ').textContent()
  104 |    expect(roworderid.includes(orderdetails)).toBeTruthy()
  105 |
  106 |
  107 | })
  108 | }
  109 |
  110 | test('Child page', async ({ browser }) => {
  111 |
  112 |    const context = await browser.newContext()
  113 |    const page = await context.newPage()
  114 |
  115 |
  116 |    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  117 |    const documentlink = page.getByRole('link', { name: 'Free Access to InterviewQues/' })
  118 |    await page.getByRole('link', { name: 'Free Access to InterviewQues/' }).click()
  119 |    //await documentlink.click()
  120 |    const [newPage] = await Promise.all([
  121 |       context.waitForEvent('page'),
  122 |       documentlink.click()])
  123 |    const Doctext = await newPage.locator('.red').textContent()
  124 |
  125 |    console.log(Doctext)
  126 |    await page.locator('#username').fill("test")
  127 |
  128 | })
  129 |
  130 |
  131 |    
```