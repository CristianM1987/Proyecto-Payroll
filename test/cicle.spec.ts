import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menu } from '../variables/menu';

test('create period', async({ page }) => {
    await page.goto(variables.payrollTest);
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill(variables.emailAdmin);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(variables.passwordAdmin);
    await page.locator('div').filter({ hasText: /^Login$/ }).click();
    try{
      await expect(page).toHaveURL('https://payrollfront.azurewebsites.net/#/');
  
    } catch(error) {
      console.error("Algo pasó con el usuario administrador, no pudo logearse correctamente o la URL no es la misma", error);
      throw error;
    }
    
    await page.locator('xpath=//*[@id="sidebar"]/ul/li[6]/a/span').click();
    await page.locator('xpath=//*[@id="mainDropdown"]/li[3]/a').click();


    


    //await page.getByRole('button', { name: 'Login' }).click();
    //await page.getByRole('button', { name: 'Main' }).click();
    //await page.getByRole('link', { name: 'Periods' }).click();
   // await page.getByRole('link', { name: '+ Create' }).click();
   // await page.getByLabel('Pay Cycle').selectOption('1: 7');
   // await page.getByLabel('Open calendar').click();
    //await page.getByLabel('Next month').click();
   // await page.getByLabel('Next month').dblclick();
   // await page.getByText('1', { exact: true }).click();
    //await page.getByText('30').click();
    //await page.getByLabel('Open calendar').click();
    //await page.getByLabel('Next month').click();
    //await page.getByLabel('1 de diciembre de 2023', { exact: true }).getByText('1').click();
    //await page.getByText('31', { exact: true }).click();
    //await page.getByRole('button', { name: 'Save' }).click();


    });





  