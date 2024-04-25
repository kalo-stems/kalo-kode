import { Selector } from 'testcafe';

class AddStudentPage {
  constructor() {
    this.pageId = '#add-student-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const addStudentPage = new AddStudentPage();
