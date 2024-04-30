import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Applications = new Mongo.Collection('applications');

// Define a schema for the collection using SimpleSchema
const ApplicationSchema = new SimpleSchema({
  id: { type: Number },
  name: { type: String },
  status: { type: String, allowedValues: ['Application Sent', 'Application Received', 'Currently Reviewing', 'Status Update'] },
});

// Attach the schema to the collection
Applications.attachSchema(ApplicationSchema);

// Function to update progress bar based on application status
function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.innerHTML = ''; // Clear previous content

  const applications = Applications.find().fetch(); // Fetch applications from MongoDB

  applications.forEach(application => {
    const progressItem = document.createElement('div');
    progressItem.classList.add('progress-item');

    const progressText = document.createElement('p');
    progressText.textContent = application.name;

    const progressStatus = document.createElement('div');
    progressStatus.classList.add('progress-status');
    progressStatus.textContent = application.status;

    progressItem.appendChild(progressText);
    progressItem.appendChild(progressStatus);
    progressBar.appendChild(progressItem);
  });
}

// Initialize progress bar on page load
window.addEventListener('load', () => {
  updateProgressBar();
});
