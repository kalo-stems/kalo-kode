import { Meteor } from 'meteor/meteor';
import { CompanyProfile } from '../../api/company/CompanyProfile';
import { StudentProfile } from '../../api/student/StudentProfile';

const addCompanyProfileMethod = 'CompanyProfile.addProfile';
Meteor.methods({
  'CompanyProfile.add'({ company, email, address, links, description }) {
    CompanyProfile.collection.insert({ company, email, address, links, description });
  },

});

const addStudentProfileMethod = 'StudentProfile.addProfile';

Meteor.methods({
  'StudentProfile.add'({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub }) {
    StudentProfile.collection.insert({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub });
  },

});

export { addCompanyProfileMethod, addStudentProfileMethod };
