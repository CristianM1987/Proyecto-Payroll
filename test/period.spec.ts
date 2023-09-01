import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, principalChild } from '../variables/menu';

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
    
    await page.locator(menuPrincipal.mainMenu).click();
    await page.locator(principalChild.periodsMenu).click();
    await page.getByRole('link', { name: '+ Create' }).click();
    await page.reload();
    await page.getByLabel('Pay Cycle').selectOption('1: 7');
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Next month').click();
    await page.getByLabel('Next month').dblclick();
    await page.getByText('1', { exact: true }).click();
    await page.getByText('30').click();
    const alreadyexist = page.locator('span:text("There are Periods already registered. Remove for save.")');
    await expect(alreadyexist).toBeVisible();
  
    
    //Si yo quiero crear periodo, elimino utilizando lo de abajo y luego le doy save
    //await page.locator('i.far.fa-trash-alt').click();
    //await page.locator('i.far.fa-trash-alt').click();
    //await page.getByRole('button', { name: 'Save' }).click();
    

    });





  