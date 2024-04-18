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
      deadline: String,
      seats: Number,
      acceptedApplications: { // Field for tracking accepted applications
        type: Number,
        defaultValue: 0,
      },
      steps: Array,
      'steps.$': String,
      user: {
        type: new SimpleSchema({
          name: String,
          email: String,
          phone: String,
          company: String, // Company within user schema
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
}

export const Jobs = new JobsCollection();
