import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class StudentsCollection {
  constructor() {
    this.name = 'StudentsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      phoneNumber: String,
      emailAddress: String,
      gradDate: Date,
      achievements: String,
      linkedIn: String,
      bioDescription: String,
      major: String,
      skillsWanted: [String],
      skillsHave: [String],
      additionalInfo: String,
      resumeUrl: String,
      githubUrl: String,
      owner: String,
    });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Students = new StudentsCollection();

