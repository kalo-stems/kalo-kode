import React from 'react';

const Studentinfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for student profile creation
  };

  return (
    <div>
      <h1>Create Student Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for resume, LinkedIn, GitHub, skills, etc. */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Studentinfo;

