import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CompaniesCollection. It encapsulates state and variable values for company.
 */
class CompanyProfileCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CompanyProfileCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      company: { type: String, optional: true },
      email: { type: String, index: true, unique: true },
      address: { type: String, optional: true },
      links: { type: String, optional: true },
      description: { type: String, optional: true },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CompaniesCollection.
 * @type {CompaniesCollection}
 */
export const Company = new CompanyProfileCollection();
