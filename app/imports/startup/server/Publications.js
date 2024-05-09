import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Jobs } from '../../api/job/Jobs';
import { Student } from '../../api/student/Student';
import { Company } from '../../api/company/Company';

// User-level publication.
Meteor.publish(Jobs.userPublicationName, function () {
  return Jobs.collection.find();
});

Meteor.publish(Student.userPublicationName, function () {
  return Student.collection.find();
});

Meteor.publish(Company.userPublicationName, function () {
  return Company.collection.find();
});

// Admin-level publication.
Meteor.publish(Jobs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Jobs.collection.find();
  }
  // Return an empty cursor if the user is not logged in or not an admin.
  return this.ready();
});

// alanning:roles publication
Meteor.publish(null, function () {
  if (this.userId) {
    // Publish roles for the current user.
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  // Return an empty cursor if the user is not logged in.
  return this.ready();
});
