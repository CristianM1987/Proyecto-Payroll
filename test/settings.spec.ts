
import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';
import { menuPrincipal, principalChild, settingsChild } from '../variables/menu';

test('cambio language', async ({ page }) => {
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
    
    await page.locator(menuPrincipal.settingsMenu).click();
    await page.locator(settingsChild.settingsMenu).click();
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'LANGUAGE SP Español ' }).locator('div').first().click();
    await page.reload();
    await page.waitForTimeout(1000);
    //await page.goto('https://payrollfront.azurewebsites.net/#/settings');
    await page.locator('li').filter({ hasText: 'Configuración' });
    await page.waitForTimeout(1000);
    await page.getByRole('row', { name: 'LANGUAGE EN English ' }).locator('div').nth(2).click();
    await page.reload();
    await page.waitForTimeout(1000);
    await page.locator('app-setting-list').getByRole('list').getByText('Settings');
    await page.waitForTimeout(1000);
});