import { Selector } from 'testcafe';

class AddCompanyPage {
  constructor() {
    this.pageId = '#add-company-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const addCompanyPage = new AddCompanyPage();
