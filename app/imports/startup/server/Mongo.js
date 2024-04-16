import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
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

// Initialize the database with a default student document.
const addStudent = (student) => {
  console.log(`  Adding: ${student.name} (${student.owner})`);
  Students.collection.insert(student);
};

// Initialize the StudentsCollection if empty.
if (Students.collection.find().count() === 0) {
  if (Meteor.settings.defaultStudent) {
    console.log('Creating default data.');
    Meteor.settings.defaultStudent.forEach(student => addStudent(student));
  }
}
