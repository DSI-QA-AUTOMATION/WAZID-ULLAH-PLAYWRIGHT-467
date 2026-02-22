const {test, expect} = require('@playwright/test')

test('Submit text input form', async({page})=>{


await page.goto('https://demoqa.com/text-box');

await page.fill('#userName', 'DSI');
await page.fill('#userEmail', 'DSI@dsi.com');
await page.fill('#currentAddress', 'Mohakhali');
await page.fill('#permanentAddress', 'Dhaka');
await page.click('#submit');

await page.close();


});