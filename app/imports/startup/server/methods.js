import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

// server-side code
Meteor.methods({
  getUserData: function () {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    if (Roles.userIsInRole(this.userId, 'student')) {
      // get and return data relevant for students
    } else if (Roles.userIsInRole(this.userId, 'company')) {
      // get and return data relevant for companies
    }
  },
});
