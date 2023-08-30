import { test, expect } from '@playwright/test';
import { variables } from '../variables/variables';

test('ingresar a la página', async ({ page }) => {
  try {
    await page.goto(variables.payrollTest);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Payroll/);
  } catch (error) {
    console.error('Hubo un problema al ingresar a la página, revise si el ambiente está encendido:', error);
    throw error; // Esto asegura que la prueba falle explícitamente en caso de error.
  }
});

test('login vacio', async ({ page }) => {
  await page.goto(variables.payrollTest);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('Password').click();
  await page.locator('div').filter({ hasText: /^Login$/ }).click();
  const errorMessage = await page.textContent(':text("Please provide a valid email address.")');
  expect(errorMessage).toContain('Please provide a valid email address.');
  const errorMessage2 = await page.textContent(':text("Required")');
  expect(errorMessage2).toContain('Required');
});

test('login wrong', async({ page }) => {
  await page.goto(variables.payrollTest);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(variables.emailWrong);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(variables.passwordWrong);
  await page.locator('div').filter({ hasText: /^Login$/ }).click();
  const errorMessage = await page.textContent(':text("Login failed")');
  expect(errorMessage).toContain('Login failed');
});