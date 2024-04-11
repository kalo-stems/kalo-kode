import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { StudentsCollection } from '../../api/students/Students'; // Assuming the StudentsCollection is defined in 'Students.js'

// User-level publication for student data.
Meteor.publish('students.user', function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return StudentsCollection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication for student data.
Meteor.publish('students.admin', function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return StudentsCollection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

// Export the publications.
export { default as studentsUserPublication } from './studentsUserPublication';
export { default as studentsAdminPublication } from './studentsAdminPublication';
