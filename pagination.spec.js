const {test, expect}= require('@playwright/test')
test('pagination_spec',async({page})=>{
    await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/')
  await page.getByText('Backtest', { exact: true }).first().click();
  await page.getByRole('link', { name: 'Strategy Builder' }).first().click();
  await page.getByText('Backtest').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'submit' }).click();
  await page.goto('https://backtest.auth.us-east-1.amazoncognito.com/login?redirect_uri=https%3A%2F%2Fdevelop.d39yyvlacx19xd.amplifyapp.com%2F&response_type=token&client_id=46hc0uqcmunch3kd8vddhspo0h&identity_provider=COGNITO&scope=&state=hGRPr5vVIi8itPc9Tgg3TB7raerbfhVg');
});
