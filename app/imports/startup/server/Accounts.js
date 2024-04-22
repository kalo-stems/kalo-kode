import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

const createUser = (email, password, role) => {
  console.log(`  Creating user ${email}.`);
  const userId = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });

  // Validate role before assigning
  if (['company', 'student'].includes(role)) {
    // Create role if it doesn't exist
    Roles.createRole(role, { unlessExists: true });
    // Assign role to user
    Roles.addUsersToRoles(userId, role);
  } else {
    throw new Meteor.Error('invalid-role', 'Invalid user role');
  }
};

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
