import { Meteor } from 'meteor/meteor';
import { Jobs } from '../../api/job/Jobs';
import { CompanyProfile } from '../../api/company/CompanyProfile';
import { StudentProfile } from '../../api/student/StudentProfile';

/** Define a publication to publish all interests. */
Meteor.publish(CompanyProfile.userPublicationName, () => CompanyProfile.collection.find());

/** Define a publication to publish all profiles. */
Meteor.publish(StudentProfile.userPublicationName, () => StudentProfile.collection.find());

/** Define a publication to publish this collection. */
Meteor.publish(Jobs.userPublicationName, () => Jobs.collection.find());

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
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
