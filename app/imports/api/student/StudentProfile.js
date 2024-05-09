import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StudentsCollection. It encapsulates state and variable values for student.
 */
class StudentProfileCollection {
  constructor() {
    // The name of this collection.
    this.name = 'StudentProfileCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      fullName: { type: String },
      image: { type: String, optional: true },
      email: { type: String },
      phoneNumber: { type: String },
      major: { type: String },
      graduationDate: { type: String },
      skills: { type: String, optional: true },
      awards: { type: String, optional: true },
      description: { type: String },
      linkedIn: { type: String, optional: true },
      gitHub: { type: String, optional: true },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const StudentProfile = new StudentProfileCollection();
