const {test, expect} = require('@playwright/test')

test('Navigate home page', async({page})=>{


await page.goto('https://demoqa.com/');

console.log('Website browsing Successful')

await page.close();

})