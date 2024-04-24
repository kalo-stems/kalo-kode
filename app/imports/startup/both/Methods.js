import { Meteor } from 'meteor/meteor';
import { Jobs } from '../../api/job/Jobs';
import { CompanyProfile } from '../../api/company/CompanyProfile';
import { StudentProfile } from '../../api/student/StudentProfile';

const updateCompanyProfileMethod = 'CompanyProfile.update';

/**
 * The server-side CompanyProfile.update Meteor Method is called by the client-side Home page after pushing the update button.
 * Its purpose is to update the CompanyProfile collections to reflect the
 * updated situation specified by the user.
 */
Meteor.methods({
  'CompanyProfile.update'({ company, email, address, links, description }) {
    CompanyProfile.collection.update({ email }, { $set: { company, email, address, links, description } });
  },
});

const updateStudentProfileMethod = 'StudentProfile.update';

/**
 * The server-side StudentProfile.update Meteor Method is called by the client-side Home page after pushing the update button.
 * Its purpose is to update the StudentProfile collections to reflect the
 * updated situation specified by the user.
 */
Meteor.methods({
  'StudentProfile.update'({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub }) {
    StudentProfile.collection.update({ email }, { $set: { phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub } });
  },
});

const updateJobs = 'Jobs.update';

/**
 * The server-side JobsProfile.update Meteor Method is called by the client-side Home page after pushing the update button.
 * Its purpose is to update the JobsProfile collections to reflect the
 * updated situation specified by the user.
 */
Meteor.methods({
  'updateJobs'({ jobId, title, description, requirements, wage, company, deadline, seats }) {
    Jobs.collection.update({ _id: jobId }, { $set: { title, description, requirements, wage, company, deadline, seats } });
  },
});

export { updateCompanyProfileMethod, updateStudentProfileMethod, updateJobs };
