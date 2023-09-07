import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, syndicateChild } from '../variables/menu';

//el test va a abrir el modulo de trabajadores y va a revisar que un trabajador se encuentre listado


test('journal syndicate', async({ page }) => {
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

    await page.locator(menuPrincipal.syndicateMenu).click();
    await page.locator(syndicateChild.syndicatePaymentJournalMenu).click();
    //seleccionar diario N° 10 y valida que haya entrado a ese diario
    await page.locator('xpath=//*[@id="paymentJournalLine"]/tbody/tr[2]/td[8]/div/a/i').click();
    const expectedText = '01_00000010';
    await page.waitForSelector(`text="${expectedText}"`);
    const empleadoElement = await page.locator(`text="${expectedText}"`);
    const existeValor = await empleadoElement.isVisible();
    await expect(existeValor).toBeTruthy();

    //seleccionar archivos descargables
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.locator('xpath=//html/body/app-root/div/div/app-journal-syndicate-details/div/section/div/div/div[2]/div[2]/div/table/tbody/tr[2]/td[9]/button').click();
    const download = await downloadPromise;
    // Wait for the download process to complete
    console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs('abordo.pdf'); // genera el archivo de payroll del sindicato abordo
    await page.locator('xpath=//html/body/app-root/div/div/app-journal-syndicate-details/div/section/div/div/div[2]/div[2]/div/table/tbody/tr[3]/td[9]/button').click();
    // Wait for the download process to complete
    console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs('arrimo.pdf'); // genera el archivo de payroll del sindicato arrimo
    await page.locator('xpath=//html/body/app-root/div/div/app-journal-syndicate-details/div/section/div/div/div[2]/div[2]/div/table/tbody/tr[4]/td[9]/button').click();
    // Wait for the download process to complete
    console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs('unido.pdf'); // genera el archivo de payroll del sindicato unido

    await page.locator('xpath=//html/body/app-root/div/div/app-journal-syndicate-details/div/div[2]/div/div[2]/button').click();
    console.log(await download.path());
    await download.saveAs('Payment_post.txt'); // Generar archivo de envío

    await page.locator('xpath=//html/body/app-root/div/div/app-journal-syndicate-details/div/div[2]/div/div[3]/button').click();
    console.log(await download.path());
    await download.saveAs('Payroll_report.txt'); // Generar archivo de reporte de payroll

    await page.waitForTimeout(1000);


});