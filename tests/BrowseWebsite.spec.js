const {test, expect} = require('@playwright/test')

test('Browse Website', async({page})=>{


await page.goto('https://demoqa.com/');

console.log('Website browsing Successful')

await page.close();

})