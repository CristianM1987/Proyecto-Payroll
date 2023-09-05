import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, principalChild } from '../variables/menu';

//el test va a abrir un periodo y luego una nomina de empleados, finalmente, la va a eliminar


test('create benefit Code', async({ page }) => {
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
    await page.locator(principalChild.benefitCodeMenu).click();
    await page.locator('xpath=//*[@id="frm_name"]').fill('Nombre Test Automatico'); //Name
    await page.locator('xpath=//*[@id="frm_description"]').fill('Descripcion test automatico'); //Description
    await page.locator('xpath=//*[@id="frm_rate"]').fill('1'); // Indica rate
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    //modify
    const inputElement = await page.$('#mat-input-9');
    await inputElement?.type('Nombre Test Automatico');
    await page.locator('xpath=//*[@id="ordersDatatable"]/tbody/tr[2]/td[8]/div/a[1]/i').click();
    await page.locator('xpath=//*[@id="frm_name"]').fill('Nombre Test Automatico 2'); //Name
    await page.locator('xpath=//*[@id="frm_description"]').fill('Descripcion test automatico 2'); //Description
    await page.locator('xpath=//*[@id="frm_rate"]').fill('2'); // Indica rate
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(1000);
    //eliminate
    const inputElement2 = await page.$('#mat-input-9');
    await inputElement2?.type('Nombre Test Automatico 2');
    //await page.locator('div').filter({ hasText: /^Search$/ }).fill('Nombre Test Automatico 2');
    await page.locator('xpath=//*[@id="ordersDatatable"]/tbody/tr[2]/td[8]/div/a[2]/i').click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(1000);
    await page.close;
});
