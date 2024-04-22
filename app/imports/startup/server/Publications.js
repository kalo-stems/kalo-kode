import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Jobs } from '../../api/job/Jobs';

Meteor.publish('stuffs', function () {
  if (Roles.userIsInRole(this.userId, ['company', 'student'])) {
    // Only publish data that company or student users are allowed to see
    return Stuffs.find({ owner: this.userId });
  }
  // Optionally, you might want to restrict access for non-authorized users
  return [];

});

Meteor.publish('jobs', function () {
  if (Roles.userIsInRole(this.userId, ['company', 'student'])) {
    // Only publish data that company or student users are allowed to see
    return Jobs.find({ active: true });
  }
  // Optionally, you might want to restrict access for non-authorized users
  return [];

});
