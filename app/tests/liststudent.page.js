import { Selector } from 'testcafe';

class ListStudentPage {
  constructor() {
    this.pageId = '#list-student-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listStudentPage = new ListStudentPage();
