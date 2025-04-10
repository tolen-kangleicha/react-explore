import React, { useState } from 'react';
import '../styles/EducationExperience.css';

function EducationExperience({ data, setData }) {
  const [editMode, setEditMode] = useState(true);
  const [edu, setEdu] = useState({
    school: '',
    title: '',
    date: '',
    ...data
  });

  const handleSubmit = () => {
    setData(edu);
    setEditMode(false);
  };

  return (
    <div className="section">
      <h2>Education Experience</h2>
      {editMode ? (
        <>
          <input placeholder="School Name" value={edu.school} onChange={(e) => setEdu({ ...edu, school: e.target.value })} />
          <input placeholder="Title of Study" value={edu.title} onChange={(e) => setEdu({ ...edu, title: e.target.value })} />
          <input placeholder="Date of Study" value={edu.date} onChange={(e) => setEdu({ ...edu, date: e.target.value })} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Title:</strong> {edu.title}</p>
          <p><strong>Date:</strong> {edu.date}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default EducationExperience;
