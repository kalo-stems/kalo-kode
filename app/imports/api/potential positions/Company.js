import React from 'react';
import { ProgressBar, Card } from 'react-bootstrap';

const ApplicationDetails = () => {
  // Dummy data for demonstration
  const positions = ['Software Engineer Intern', 'Marketing Coordinator', 'Data Analyst'];
  const daysLeft = 7; //days left until application closes
  const materials = ['Letter of Recommendation', 'Resume', 'Personal Statements'];

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container mt-4">
      <Card>
        <Card.Header>
          <h2>Potential Positions</h2>
        </Card.Header>
        <Card.Body>
          <ul>
            {positions.map((position, index) => (
              <li key={index}>{position}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header>
          <h2>Application Closing Progress</h2>
        </Card.Header>
        <Card.Body>
          <ProgressBar now={100 - (daysLeft / 30) * 100} label={`${daysLeft} days left`} />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header>
          <h2>Necessary Materials</h2>
        </Card.Header>
        <Card.Body>
          <ul>
            {materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplicationDetails;
