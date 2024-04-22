import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
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
