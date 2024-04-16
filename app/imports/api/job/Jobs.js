// job.js
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class JobsCollection {
  constructor() {
    this.name = 'JobsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      title: String,
      description: String,
      requirements: String,
      wage: String,
      company: String,
      deadline: String,
      seats: Number,
      acceptedApplications: Number,
      steps: Array, // Array to store steps
      'steps.$': String, // Each step is a string
      // Add user and company contact information to the schema
      user: {
        type: new SimpleSchema({
          name: String,
          email: String,
          phone: String,
        }),
      },
      company: {
        type: new SimpleSchema({
          name: String,
          address: String,
          phone: String,
          email: String,
        }),
      },
    });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }

  // Method to update the list of steps for a job
  updateSteps(jobId, steps) {
    this.collection.update(jobId, { $set: { steps: steps } });
  }

  // Method to get the list of steps for a job
  getSteps(jobId) {
    const job = this.collection.findOne(jobId);
    return job ? job.steps : [];
  }
}

export const Jobs = new JobsCollection();

