const { expect } = require('@playwright/test');

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByPlaceholder('First Name');
    this.lastNameField = page.getByPlaceholder('Last Name');
    this.postCodeField = page.getByPlaceholder('Post Code');
    this.addCostumerButton = page.getByRole('form')
      .getByRole('button', { name: 'Add Customer' });
    this.costumersButton = page
      .getByRole('button', { name: 'Customers' });
    // this.firstNameInLastCell = page
    //   .locator('tbody > tr:last-child td:first-child');
    // this.lastNameInLastCell = page
    //   .locator('tbody > tr:last-child td:nth-child(2)');
    // this.accountNumberCell = page
    //   .locator('tbody > tr:last-child td:nth-child(3)');
  
  }

  async open() {
    await this.page
      .goto('/angularJs-protractor/BankingProject/#/manager/addCust');
  }
  async fillFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }
  async fillLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }
  async fillPostCodeField(postCode) {
    await this.postCodeField.fill(postCode);
  }
  async clickAddCustumerButton() {
    await this.addCostumerButton.click();
  }
  async reloadPage() {
    await this.page.reload();
  }
  async clickCostumersButton() {
    await this.costumersButton.click();
  }
  // async assertFirstNameInLastCell(firstName) {
  //   expect(this.firstNameInLastCell).toHaveText(firstName);
  // }
  // async assertLastNameInLastCell(lastName) {
  //   expect(this.lastNameInLastCell).toHaveText(lastName);
  // }
  // async assertAccountNumberCellIsEmpty() {
  //   expect(this.accountNumberCell).not.toHaveText();
  // }

  async clickOpenAccountButton () {
    await this.page
      .getByRole('button', { name: 'Open Account' }).click();
  }
  async selectCostumer(firstName, lastName) {
    await this.costumerSelect
      .selectOption({ label: `${firstName} ${lastName}` });
  }
}