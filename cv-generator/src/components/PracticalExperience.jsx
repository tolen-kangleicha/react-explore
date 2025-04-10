import React, { useState } from 'react';
import '../styles/PracticalExperience.css';

function PracticalExperience({ data, setData }) {
  const [editMode, setEditMode] = useState(true);
  const [exp, setExp] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: '',
    ...data
  });

  const handleSubmit = () => {
    setData(exp);
    setEditMode(false);
  };

  return (
    <div className="section">
      <h2>Practical Experience</h2>
      {editMode ? (
        <>
          <input placeholder="Company Name" value={exp.company} onChange={(e) => setExp({ ...exp, company: e.target.value })} />
          <input placeholder="Position Title" value={exp.position} onChange={(e) => setExp({ ...exp, position: e.target.value })} />
          <input placeholder="Main Responsibilities" value={exp.responsibilities} onChange={(e) => setExp({ ...exp, responsibilities: e.target.value })} />
          <input placeholder="From" value={exp.from} onChange={(e) => setExp({ ...exp, from: e.target.value })} />
          <input placeholder="Until" value={exp.to} onChange={(e) => setExp({ ...exp, to: e.target.value })} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          <p><strong>From:</strong> {exp.from}</p>
          <p><strong>Until:</strong> {exp.to}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default PracticalExperience;
