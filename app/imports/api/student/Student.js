import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StudentsCollection. It encapsulates state and variable values for student.
 */
class StudentsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'StudentsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      image: String,
      email: String,
      phoneNumber: String,
      major: String,
      graduationDate: String,
      skills: String,
      awards: String,
      description: String,
      linkedIn: String,
      gitHub: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StudentsCollection.
 * @type {StudentsCollection}
 */
export const Students = new StudentsCollection();
