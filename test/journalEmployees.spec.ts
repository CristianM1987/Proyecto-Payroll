import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, journalChild } from '../variables/menu';

//el test va a abrir el modulo de trabajadores y va a revisar que un trabajador se encuentre listado


test('journal employees', async({ page }) => {

  
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

    await page.locator(menuPrincipal.journalMenu).click();
    await page.locator(journalChild.journalMenu).click();
    //seleccionar diario N° 15 y valida que haya entrado a ese diario
    await page.locator('xpath=//*[@id="paymentJournalLine"]/tbody/tr[4]/td[5]/div/a/i').click();
    const expectedText = '01_00000015';
    await page.waitForSelector(`text="${expectedText}"`);
    const empleadoElement = await page.locator(`text="${expectedText}"`);
    const existeValor = await empleadoElement.isVisible();
    await expect(existeValor).toBeTruthy();

    //seleccionar archivos descargables
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.locator('xpath=//html/body/app-root/div/div/app-payment-list/div/section/div/div/div[2]/div[2]/div/table/tbody/tr[2]/td[7]/button').click();
    const download = await downloadPromise;
    // Wait for the download process to complete
    console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs('empleado1.pdf');
    await page.locator('xpath=//html/body/app-root/div/div/app-payment-list/div/section/div/div/div[2]/div[2]/div/table/tbody/tr[3]/td[7]/button').click();
    // Wait for the download process to complete
    console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs('empleado2.pdf');


});