const { test, expect, mergeTests } = require('@playwright/test')

test('@webMore validations tests', async ({page}) => {
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    /*await page.goto ("https://www.google.com/")
   await page.goBack()
   await page.goForward() */

     await expect (page.locator('#displayed-text')).toBeVisible()
     await page.locator('#hide-textbox').click()
     await expect(page.locator('#displayed-text')).toBeHidden()
     await page.once('dialog', dialog => dialog.accept());
     await page.locator('#confirmbtn').click()
     await page.locator('#mousehover').hover() 
     // to hover over an element
     const framepage = page.frameLocator("#courses-iframe")
      await framepage.locator('li a[href*="lifetime-access"]:visible').click()
     const textcheck =  await framepage.locator('.text h2').textContent()
     console.log(textcheck.split(" ")[1])
     










})