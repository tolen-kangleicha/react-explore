import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo({ data, setData }) {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    ...data
  });

  const handleSubmit = () => {
    setData(info);
    setEditMode(false);
  };

  return (
    <div className="section">
      <h2>General Information</h2>
      {editMode ? (
        <>
          <input placeholder="Name" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
          <input placeholder="Email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} />
          <input placeholder="Phone" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
