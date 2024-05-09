import { Meteor } from 'meteor/meteor';
import { Company } from '../../api/company/Company';
import { Student } from '../../api/student/Student';

const addCompanyProfileMethod = 'Company.addProfile';
Meteor.methods({
  'CompanyProfile.add'({ company, email, address, links, description }) {
    Company.collection.insert({ company, email, address, links, description });
  },

});

const addStudentProfileMethod = 'Student.addProfile';

Meteor.methods({
  'StudentProfile.add'({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub }) {
    Student.collection.insert({ email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub });
  },

});

export { addCompanyProfileMethod, addStudentProfileMethod };
