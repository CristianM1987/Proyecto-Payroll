import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, principalChild } from '../variables/menu';

//el test va a abrir el modulo de trabajadores y va a revisar que un trabajador se encuentre listado


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
    await page.locator(principalChild.workersMenu).click();
    const expectedText = 'ALNEL MIESES BAUTISTA MIESES BAUTISTA'; //Empleado
    await page.waitForSelector(`text="${expectedText}"`); //Espera que aparezca en pantalla, suele tardar 1 segundo
    const empleadoElement = await page.locator(`text="${expectedText}"`); //Parseo de empleado a text
    const existeValor = await empleadoElement.isVisible(); //condición
    // Comprueba si el valor existe
    await expect(existeValor).toBeTruthy(); //assert

});