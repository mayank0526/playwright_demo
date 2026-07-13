import { test, expect, request } from '@playwright/test'

test('login', async ({ page }) => {

    await page.goto('https://iengage.coforge.com/ess2/login');

    const lpg = await page.locator('text = Click here to login via iEngage credentials').click();

    const username = await page.getByPlaceholder("Employee ID").fill('50045727');
    const pass = await page.getByPlaceholder("Password").fill('Mayank@0526');



    await page.getByRole('button', { name: 'Login' }).click();
    //  await page.getByRole('button' ,{name:'Close button'}).click();

    const atn = await page.evaluate(async () => {
        const response = await fetch('https://iengage.coforge.com/ess2/Widget/GetAttendanceData',
            {
                method: 'POST'
            }
        );
        return await response.json();
    });
    console.log(atn);
});





