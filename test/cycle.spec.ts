import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, principalChild } from '../variables/menu';

//no hay una funcionalidad para eliminar cicles, por eso el test va a revisar que puede entrar al apartado 
//cicles y revisar que exista un cicle en particular y terminara


test('check cicle', async({ page }) => {
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
    await page.locator(principalChild.cyclesMenu).click();

    const existSindicatoMensual = page.locator('td:has-text("QUINCENAL")');
    await expect(existSindicatoMensual).toBeVisible();


});
