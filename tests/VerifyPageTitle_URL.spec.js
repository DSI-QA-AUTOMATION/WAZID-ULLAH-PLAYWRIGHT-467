const {test, expect} = require ('@playwright/test')

test('Verify Page Title and URL', async({page})=>{

await page.goto('https://demoqa.com/');   

const pageTitle = page.title();
console.log('Page Title is: ', pageTitle);

await expect(page).toHaveTitle('DEMOQA');

const pageUrl = page.url();
console.log('page URL is: ', pageUrl);

await expect(page).toHaveURL('https://demoqa.com/');

await page.close();

})