import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The JobsCollection. It encapsulates state and variable values for job.
 */
class JobsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'JobsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      title: String,
      description: String,
      requirements: String,
      wage: String,
      company: String,
      deadline: String,
      seats: Number,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the JobsCollection.
 * @type {JobsCollection}
 */
export const Jobs = new JobsCollection();
