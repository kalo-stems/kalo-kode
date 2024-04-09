import { Selector } from 'testcafe';

class StudentInfo {
  constructor() {
    this.skills = [];
    this.education = '';
    this.preferredLocation = '';
    this.portfolioLink = '';
    this.otherMediaLink = '';
  }

  setSkills(skills) {
    this.skills = skills;
  }

  setEducation(education) {
    this.education = education;
  }

  setPreferredLocation(location) {
    this.preferredLocation = location;
  }

  setPortfolioLink(link) {
    this.portfolioLink = link;
  }

  setOtherMediaLink(link) {
    this.otherMediaLink = link;
  }
}

export default StudentInfo;


