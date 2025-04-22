import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';


const costumer = {
  username: faker.person.firstName(),
  lastname: faker.person.lastName(),
  postcode: faker.location.zipCode(),
}


test.beforeEach( async ({ page }) => {

    const addCustumerPage = new AddCustomerPage(page);
    await addCustumerPage.open();
    await addCustumerPage.fillFirstName(costumer.username);
    await addCustumerPage.fillLastName(costumer.lastname);
    await addCustumerPage.fillPostCodeField(costumer.postcode);
    await addCustumerPage.clickAddCustumerButton();
    await addCustumerPage.reloadPage();
    await page.waitForTimeout(2000);
    
  /* 
  Pre-conditons:
  1. Open Add Customer page
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  6. Reload the page (This is a simplified step to close the popup).
  */

});

test('Assert manager can add new customer', async ({ page }) => {

  const addCustumerPage = new AddCustomerPage(page);
  const openAccountPage = new OpenAccountPage(page);

  await addCustumerPage.clickOpenAccountButton();
  await openAccountPage
    .selectCostumer(costumer.username, costumer.lastname);
  await openAccountPage.selectCurrDollar();
  await openAccountPage.clickProgressButton();
  await openAccountPage.reloadPage();
  await openAccountPage.clickCostumersHeadButton();
  await openAccountPage.assertIdCellIsNotEmpty();



  await page.waitForTimeout(2000);
/* 
Test:
1. Click [Open Account].
2. Select Customer name you just created.
3. Select currency.
4. Click [Process].
5. Reload the page (This is a simplified step to close the popup).
6. Click [Customers].
7. Assert the customer row has the account number not empty.

Tips:
 1. Do not rely on the customer row id for the step 13. Use the ".last()" locator to get the last row.
*/
});