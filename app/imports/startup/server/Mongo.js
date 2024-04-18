import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Companies } from '../../api/company/Company.js';
import { Jobs } from '../../api/job/Jobs';
// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the Company database with a default data document.
const addCompany = (companyData) => {
  console.log(`  Adding: ${companyData.name} (${companyData.owner})`);
  Companies.collection.insert(companyData);
};

// Initialize the CompaniesCollection if empty.
if (Companies.collection.find().count() === 0) {
  if (Meteor.settings.defaultCompanyData) {
    console.log('Creating default data.');
    Meteor.settings.defaultCompanyData.forEach(companyData => addCompany(companyData));
  }
}

const addJobs = (job) => {
  console.log(`  Adding: ${job.title} (INSERT COMPANY NAME)`);
  Jobs.collection.insert(job);
};

// Initialize the StuffsCollection if empty.
if (Jobs.collection.find().count() === 0) {
  if (Meteor.settings.defaultJobs) {
    console.log('Creating default jobs.');
    Meteor.settings.defaultJobs.forEach(job => addJobs(job));
  }
}
