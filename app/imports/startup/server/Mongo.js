import { Meteor } from 'meteor/meteor';
import { Company } from '../../api/company/Company';
import { Student } from '../../api/student/Student';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Company.collection.insert(data);
};

// Initialize the Company collection if empty.
if (Company.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.CompanyData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.CompanyData.forEach(data => addData(data));
  } else {
    console.log('Cannot initialize the database! Please provide default data in your settings file.');
  }
}

const addCompany = (company) => {
  console.log(`  Adding: ${company.name}`);
  Company.collection.insert(company);
};

if (Company.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.CompanyData) {
    console.log('Creating default company.');
    Meteor.settings.defaultData.CompanyData.forEach(company => addCompany(company));
  }
}

const addStudent = (student) => {
  console.log(`  Adding: ${student.name}`);
  Student.collection.insert(student);
};

if (Student.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.StudentData) {
    console.log('Creating default student.');
    Meteor.settings.defaultData.StudentData.forEach(student => addStudent(student));
  }
}

// Initialize the database with a default Company Profile data document.
const addCompanyProfile = (companyProfile) => {
  console.log(`  Adding: ${companyProfile.name} (${companyProfile.owner})`);
  Company.collection.insert(companyProfile);
};

// Initialize the CompaniesCollection if empty.
if (Company.collection.find().count() === 0) {
  if (Meteor.settings.defaultCompanyProfiles) {
    console.log('Creating default Company Profiles data.');
    Meteor.settings.defaultCompanyProfiles.forEach(companyProfile => addCompanyProfile(companyProfile));
  }
}
