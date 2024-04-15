// Define a JobPosition class
class JobPosition {
  constructor(title, acceptedApplications) {
    this.title = title;
    this.acceptedApplications = acceptedApplications;
  }

  // Method to get the title of the job position
  getTitle() {
    return this.title;
  }

  // Method to set the title of the job position
  setTitle(title) {
    this.title = title;
  }

  // Method to get the number of accepted applications
  getAcceptedApplications() {
    return this.acceptedApplications;
  }

  // Method to set the number of accepted applications
  setAcceptedApplications(acceptedApplications) {
    this.acceptedApplications = acceptedApplications;
  }

  // Method to generate HTML table row for the job position
  generateTableRow() {
    return `<tr><td>${this.title}</td><td>${this.acceptedApplications}</td></tr>`;
  }
}

// Create instances of JobPosition
const job1 = new JobPosition("Job Title 1", 20);
const job2 = new JobPosition("Job Title 2", 15);
const job3 = new JobPosition("Job Title 3", 30);

// Generate HTML table
const tableHeader = "<tr><th>Position</th><th>Accepted Applications</th></tr>";
const tableRows = job1.generateTableRow() + job2.generateTableRow() + job3.generateTableRow();
const tableHTML = `<table>${tableHeader}${tableRows}</table>`;

// Display the HTML table
document.body.innerHTML = tableHTML;
