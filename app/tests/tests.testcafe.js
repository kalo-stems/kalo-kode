import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addCompanyPage } from './addcompany.page';
import { addStudentPage } from './addstudent.page';
import { listJobPage } from './listjob.page';
import { listStudentPage } from './liststudent.page';
import { listCompanyPage } from './listcompany.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that Add Company page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddCompanyPage(testController);
  await addCompanyPage.isDisplayed(testController);
});

test('Test that Add Student page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddStudentPage(testController);
  await addStudentPage.isDisplayed(testController);
});

test('Test that List Job page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListJobPage(testController);
  await listJobPage.isDisplayed(testController);
});

test('Test that List Student page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListStudentPage(testController);
  await listStudentPage.isDisplayed(testController);
});

test('Test that List Company page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListCompanyPage(testController);
  await listCompanyPage.isDisplayed(testController);
});
