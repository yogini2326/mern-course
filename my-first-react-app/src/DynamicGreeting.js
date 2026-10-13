import React from 'react';

function DynamicGreeting() {
  const userName = 'Yogini';
  const currentYear = new Date().getFullYear();
  const isEnrolled = true;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome, {userName}!</h1>
      <p>You are currently enrolled in the MERN Stack Course ({currentYear}).</p>
      <p>Status: {isEnrolled ? 'Active Student' : 'Not Enrolled'}</p>
      {isEnrolled && <p>Keep up the great work in Module 3!</p>}
    </div>
  );
}

export default DynamicGreeting;