import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { CompanyProfile } from '../../api/company/CompanyProfile';
import { StudentProfile } from '../../api/student/StudentProfile';

/* eslint-disable no-console */

/** Define a user in the Meteor accounts package. This enables login. Username is the email address. */
function createUser(email, role) {
  const userID = Accounts.createUser({ username: email, email, password: 'foo' });
  if (role === 'student') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'student');
    return '/add-student'; // Redirect to student dashboard
  } if (role === 'company') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'company');
    return '/add-company'; // Redirect to company dashboard
  }
  // Return a default redirection or handle the case where role is neither student nor company
  return '/default-dashboard';
}

/** Defines a new company user and associated profile. Error if user already exists. */
function addCompanyProfile({ company, email, address, links, description, role }) {
  console.log(`Defining profile ${email}`);
  // Define the user in the Meteor accounts package.
  createUser(email, role);
  // Create the profile.
  CompanyProfile.collection.insert({ company, email, address, links, description, role });
}

/** Defines a new student user and associated profile. Error if user already exists. */
function addStudentProfile({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub, role }) {
  console.log(`Defining profile ${email}`);
  // Define the user in the Meteor accounts package.
  createUser(email, role);
  // Create the profile.
  StudentProfile.collection.insert({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub, role });
}

/** Initialize DB if it appears to be empty (i.e. no users defined.) */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultProjects && Meteor.settings.defaultProfiles) {
    console.log('Creating the default profiles');
    Meteor.settings.defaultProfiles.map(profile => addCompanyProfile(profile));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

/**
 * If the loadAssetsFile field in settings.development.json is true, then load the data in private/data.json.
 * This approach allows you to initialize your system with large amounts of data.
 * Note that settings.development.json is limited to 64,000 characters.
 * We use the "Assets" capability in Meteor.
 * For more info on assets, see https://docs.meteor.com/api/assets.html
 * User count check is to make sure we don't load the file twice, which would generate errors due to duplicate info.
 */
if (Meteor.settings.loadAssetsFile && Meteor.users.find().count() < 7) {
  const assetsFileName = 'data.json';
  console.log(`Loading data from private/${assetsFileName}`);
  // eslint-disable-next-line no-undef
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  // eslint-disable-next-line array-callback-return
  jsonData.profiles.map(profile => {
    if (profile.role === 'admin') {
      addCompanyProfile(profile);
    } else {
      addStudentProfile(profile);
    }
  });
}
