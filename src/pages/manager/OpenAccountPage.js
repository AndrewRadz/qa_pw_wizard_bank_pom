const { expect } = require('@playwright/test');

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.currencySelect = page
      .locator('#currency');
    this.costumerSelect = page
      .getByTestId('userSelect');
    this.progressButton = page
      .getByRole('button', { name: 'Process' });
    this.custumersHeadButton = page
      .getByRole('button', { name: 'Customers' });
    this.lastCostumerRow = page
      .locator('tbody > tr').last();
  }

  async open() {
    await this.page
      .goto('/angularJs-protractor/BankingProject/#/manager/openAccount');
  }
  async selectCurrDollar() {
    await this.currencySelect.selectOption('Dollar');
  }
  async assertCurrencyDollarChoised() {
    expect(await this.currencySelect.inputValue())
      .toBe('Dollar');
  }
  async selectCurrPound() {
    await this.currencySelect.selectOption('Pound');
  }
  async assertCurrencyPoundChoised() {
    expect(await this.currencySelect.inputValue())
      .toBe('Pound');
  }
  async selectCurrRupee() {
    await this.currencySelect.selectOption('Rupee');
  }
  async assertCurrencyRupeeChoised() {
    expect(await this.currencySelect.inputValue())
      .toBe('Rupee');
  }
  async selectCostumer(firstName, lastName) {
    await this.costumerSelect
      .selectOption({ label: `${firstName} ${lastName}` });
  }
  async clickProgressButton() {
    await this.progressButton.click();
  }
  async reloadPage() {
    await this.page.reload();
  }
  async clickCostumersHeadButton() {
    await this.custumersHeadButton.click();
  }
  async assertIdCellIsNotEmpty() {
    await expect(this.lastCostumerRow.locator('td:nth-child(4)'))
      .not.toBeEmpty();
  }
}