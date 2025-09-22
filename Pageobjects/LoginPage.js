class LoginPage {
    //creating class same name as file name.

    constructor(page) {
        // its better to declare locators in a constructor

        this.page = page;
        //from this we can use page everywhere in this file.
        this.signinbutton = page.locator('#login');
        //this belongs to current class, here signinbutton is a class variable and class is loginpage
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');

    }

    async launchwebsite() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    async validLogin(email, password) {

        await this.email.fill(email)
        await this.password.fill(password)
        await this.signinbutton.click()
         await this.page.waitForLoadState('networkidle')
            await this.page.locator('.card-body b').first().waitFor()

        //pageobject file should not have data it should come through test.

    }



}
module.exports = { LoginPage };
//make this class available to whole framework.