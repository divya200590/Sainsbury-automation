const { test, expect } = require('@playwright/test')
const { text } = require('node:stream/consumers')


test('my first test case', async ({ page }) => {

    const username = page.locator('#username')
    const password = page.locator('#password')
    const signinbutton = page.locator('#signInBtn')
    const cardtitles = page.locator('.card-title a')
   

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
     console.log(await(page.title))
     await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy') 
     await page.locator('#username').fill("rahulshetty")
     await page.locator('#password').fill("learning")
     await page.locator('#signInBtn').click()
     console.log(await page.locator('[style*="block"]').textContent())
     await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
     await username.fill("")
     await username.fill("rahulshettyacademy")
     await signinbutton.click()
     console.log (await cardtitles.nth(0).textContent())
     //textcontent will wait for the locator elemet to load
     //alltextcontent will not wait for the list of locator to load, it will returm 0 items in list. 
    const allcardtitles =  (await cardtitles.allTextContents())
    console.log(allcardtitles)

})


test('UI Controls', async ({ page }) => {

   
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.pause()   
    await page.locator('#username').fill("rahulshetty")
    await page.locator('#password').fill("learning")
    await page.locator('#signInBtn').click()
    await page.locator('select.form-control').selectOption("consult")
    
    await page.locator('.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    //assertion for radio button to be checkd
     await expect (page.locator('.radiotextsty').last()).toBeChecked()
     await page.locator('#terms').click()
     //assertion for checkbox to be checked
     await expect(page.locator('#terms')).toBeChecked()
      await page.locator('#terms').uncheck()
      await expect (page.locator('.blinkingText')).toHaveAttribute('class','blinkingText')
    })


    test('Child window handling', async ({ browser }) => {

        const context = await browser.newContext()
        const page = await context.newPage()

        const documentlink = page.locator('.blinkingText')
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
        const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentlink.click() 
    ]) // here we want these two operations to run parallely means there are two 
    // promises which needs to be resolved, there fore we used promise.all and 
    // it creates an array of promises(operations) and will return a fulfilled 
    // promise here is taking  waitforevent and click promises and retuning a new page,
    //  a new page is opened here.

        const Doctext = await newPage.locator('.red').textContent()

       console.log(Doctext)

       await page.locator('#username').fill("test") // here we are going back to 
       // the main page as we have used page.locator and if we want to use shild 
       // window then we have to use newpage.locator



        
    
    
    

    })
