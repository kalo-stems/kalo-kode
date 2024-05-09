import { Meteor } from 'meteor/meteor';
import { Companies } from '../../api/company/Company';
import { Students } from '../../api/student/Student';

const addCompanyProfileMethod = 'Company.addProfile';
Meteor.methods({
  'CompanyProfile.add'({ company, email, address, links, description }) {
    Companies.collection.insert({ company, email, address, links, description });
  },

});

const addStudentProfileMethod = 'Student.addProfile';

Meteor.methods({
  'StudentProfile.add'({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub }) {
    Students.collection.insert({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub });
  },

});

export { addCompanyProfileMethod, addStudentProfileMethod };
