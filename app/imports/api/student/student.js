import { Selector } from 'testcafe';

class StudentInfo {
  constructor() {
    this.phone = '';
    this.email = '';
    this.graduationDate = '';
    this.achievements = [];
    this.linkedIn = '';
    this.bio = '';
    this.major = '';
    this.skills = [];
    this.awards = [];
    this.dob = '';
    this.github = '';
  }

  // Setters for updating information
  setPhone(phone) {
    this.phone = phone;
  }

  setEmail(email) {
    this.email = email;
  }

  setGraduationDate(date) {
    this.graduationDate = date;
  }

  addAchievement(achievement) {
    this.achievements.push(achievement);
  }

  setLinkedIn(link) {
    this.linkedIn = link;
  }

  setBio(bio) {
    this.bio = bio;
  }

  setMajor(major) {
    this.major = major;
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  addAward(award) {
    this.awards.push(award);
  }

  setDOB(dob) {
    this.dob = dob;
  }

  setGitHub(github) {
    this.github = github;
  }
}

// Export the class for use in other modules
export default StudentInfo;
