class Dashboard {

constructor(page)
{

this.products =  page.locator('.card-body')
this.productstext = page.locator('.card-body b')
this.cart = page.locator("button[routerlink='/dashboard/cart']")

}

async ProductsearchAddtocart(productName)
{
await this.productstext.first().waitFor()
   // here it is waiting for the locator element to be present and it works for single element only
   const titles = await this.productstext.allTextContents();
   console.log(titles);
   const count = await this.products.count();
   for (let i = 0; i < count; ++i)
     {
      if (await this.products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await this.products.nth(i).locator("text= Add To Cart").click();
         break;
      }

}


}

async navigatetocart()
{
 await this.cart.dispatchEvent('click')

}

}
module.exports = {Dashboard};