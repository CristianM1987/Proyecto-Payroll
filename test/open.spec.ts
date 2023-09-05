import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, principalChild } from '../variables/menu';

//el test va a abrir un periodo y luego una nomina de empleados, finalmente, la va a eliminar


test('open payroll', async({ page }) => {
    await page.goto(variables.payrollTest);
    await page.waitForTimeout(1000);
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
    await page.reload(),
    await page.getByLabel('Pay Cycle').selectOption('2: 1');
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Pay Cycle').selectOption('2: 1');
    await page.getByLabel('Choose month and year').click();
    await page.getByText('2025').click();
    await page.getByText('ENE.').click();
    await page.getByText('1', { exact: true }).click();
    await page.getByText('31').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    await page.locator(menuPrincipal.openPayrollMenu).click();
    await expect(page).toHaveURL('https://payrollfront.azurewebsites.net/#/open-payroll'); 
    await page.waitForTimeout(2000);
    await page.getByLabel('Cycles').selectOption('3: 1');
    await page.getByLabel('Periods').selectOption({ label: '1/01/25 - 31/01/25'});
    //const selector = ('option:has-text("1/01/25 - 31/01/25")');
    await page.getByLabel('Type Header').selectOption('3: 3');
    await page.getByRole('button', { name: 'Open' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();
    //await page.getByRole('button', { name: 'Main' }).click();
    await page.locator(menuPrincipal.mainMenu).click();
    await page.locator(principalChild.periodsMenu).click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(2000);
    const invisible = await page.getByLabel('1/01/25 - 31/01/25').isHidden();
  

});
