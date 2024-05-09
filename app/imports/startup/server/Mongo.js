import { Meteor } from 'meteor/meteor';
import { Companies } from '../../api/company/Company';
import { Students } from '../../api/student/Student';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Companies.collection.insert(data);
};

// Initialize the collection if empty.
if (Companies.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.CompanyData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.CompanyData.forEach(data => addData(data));
  } else {
    console.log('Cannot initialize the database! Please provide default data in your settings file.');
  }
}

if (Students.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.StudentData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.StudentData.forEach(data => addData(data));
  } else {
    console.log('Cannot initialize the database! Please provide default data in your settings file.');
  }
}

const addCompany = (company) => {
  console.log(`  Adding: ${company.name}`);
  Companies.collection.insert(company);
};

if (Companies.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.CompanyData) {
    console.log('Creating default company.');
    Meteor.settings.defaultData.CompanyData.forEach(company => addCompany(company));
  }
}

const addStudent = (student) => {
  console.log(`  Adding: ${student.name}`);
  Students.collection.insert(student);
};

if (Students.collection.find().count() === 0) {
  if (Meteor.settings.defaultData && Meteor.settings.defaultData.StudentData) {
    console.log('Creating default student.');
    Meteor.settings.defaultData.StudentData.forEach(student => addStudent(student));
  }
}

// Initialize the database with a default Company Profile data document.
const addCompanyProfile = (companyProfile) => {
  console.log(`  Adding: ${companyProfile.name} (${companyProfile.owner})`);
  Companies.collection.insert(companyProfile);
};

// Initialize the CompaniesCollection if empty.
if (Companies.collection.find().count() === 0) {
  if (Meteor.settings.defaultCompanyProfiles) {
    console.log('Creating default Company Profiles data.');
    Meteor.settings.defaultCompanyProfiles.forEach(companyProfile => addCompanyProfile(companyProfile));
  }
}

const addStudentProfile = (studentProfile) => {
  console.log(`  Adding: ${studentProfile.name} (${studentProfile.owner})`);
  Students.collection.insert(studentProfile);
};

// Initialize the CompaniesCollection if empty.
if (Students.collection.find().count() === 0) {
  if (Meteor.settings.defaultStudentProfiles) {
    console.log('Creating default Student Profiles data.');
    Meteor.settings.defaultStudentProfiles.forEach(studentProfile => addStudentProfile(studentProfile));
  }
}
