import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import CVDisplay from './components/CVDisplay';
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [practical, setPractical] = useState({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      {!submitted ? (
        <>
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
          <EducationExperience data={education} setData={setEducation} />
          <PracticalExperience data={practical} setData={setPractical} />
          <button onClick={() => setSubmitted(true)}>Submit All</button>
        </>
      ) : (
        <>
          <CVDisplay generalInfo={generalInfo} education={education} practical={practical} />
          <button onClick={() => window.print()} style={{ display: 'block', margin: '20px auto' }}>
            Download as PDF
          </button>
          <button onClick={() => setSubmitted(false)}>Edit All</button>
        </>
      )}
    </div>
  );
}

export default App;
