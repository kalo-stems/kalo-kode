import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Jobs } from '../../api/job/Jobs';
import { Students } from '../../api/student/Student';

/* eslint-disable no-console */

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

const addStudents = (student) => {
  console.log(`  Adding: ${student.fullName} (${student.owner})`);
  Students.collection.insert(student);
};

// Initialize the StudentsCollection if empty.
if (Students.collection.find().count() === 0) {
  if (Meteor.settings.defaultStudents) {
    console.log('Creating default data.');
    Meteor.settings.defaultStudents.forEach(student => addStudents(student));
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
