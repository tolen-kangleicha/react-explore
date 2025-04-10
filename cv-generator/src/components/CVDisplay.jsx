import React from 'react';

function CVDisplay({ generalInfo, education, practical }) {
  return (
    <div className="section">
      <h2>CV Preview</h2>
      <h3>General Info</h3>
      <p>{generalInfo.name}, {generalInfo.email}, {generalInfo.phone}</p>

      <h3>Education</h3>
      <p>{education.school}, {education.title}, {education.date}</p>

      <h3>Practical Experience</h3>
      <p>{practical.company} — {practical.position}</p>
      <p>{practical.responsibilities}</p>
      <p>{practical.from} - {practical.to}</p>
    </div>
  );
}

export default CVDisplay;
