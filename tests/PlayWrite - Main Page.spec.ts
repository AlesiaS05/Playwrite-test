import { test, expect } from '@playwright/test';

test.describe('Main page testing suite', ()=>{
  test.beforeEach(async({ page })=> {
    await page.goto('https://playwright.dev/');
  });

test('Header: Navigation elements visibility check', async ({ page }) => {
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await expect.soft(page.getByLabel('GitHub repository')).toBeVisible();
  await expect.soft(page.getByLabel('Discord server')).toBeVisible();
  await expect.soft(page.getByLabel('Switch between dark and light')).toBeVisible();
  await expect.soft(page.getByLabel('Search (Ctrl+K)')).toBeVisible();
  
});

test('Header: Navigation element names check', async ({ page }) => {
  await expect.soft(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('Docs');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('API');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('Node.js');
  await expect.soft(page.getByLabel('Main', { exact: true })).toContainText('Community');
  
});

test('Header: Navigation element href attributes check', async ({ page }) => {
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute('href','/');
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href','/docs/intro');
  await expect.soft(page.getByRole('link', { name: 'API' })).toHaveAttribute('href','/docs/api/class-playwright');
  await expect.soft(page.getByRole('link', { name: 'Community' })).toHaveAttribute('href','/community/welcome');
  await expect.soft(page.getByLabel('GitHub repository')).toHaveAttribute('href','https://github.com/microsoft/playwright');
  await expect.soft(page.getByLabel('Discord server')).toHaveAttribute('href','https://aka.ms/playwright/discord');
  
});

test('Header: Light/Dark mode toggle check', async ({ page }) => {
 await page.getByLabel('Switch between dark and light').click();
 await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light');
 await page.getByLabel('Switch between dark and light').click();
 await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');

});

test('Page Header Validation', async ({ page }) => {
 await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
 await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');


});

test('Get Started Validation', async ({ page }) => {
 await expect.soft(page.getByRole('link',{ name: 'Get started' })).toBeVisible();
 await expect.soft(page.getByRole('link',{ name: 'Get started' })).toContainText('Get started');
 await expect.soft(page.getByRole('link',{ name: 'Get started' })).toHaveAttribute('href','/docs/intro');
 });


});

