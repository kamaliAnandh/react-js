import { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {name,email,password};
    setSubmittedData(data);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
    <div className="card">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" className="input-box" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <label>Email:</label>
        <input type="email" className="input-box" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <label>Password:</label>
        <input type="password" className="input-box" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button type="submit" className="btn">Submit</button>
      </form>
      {submittedData && (
        <div className="output-card">
          <h2>Submitted data</h2>
          <p><strong>Name:</strong>{submittedData.name}</p>
          <p><strong>Email:</strong>{submittedData.email}</p>
          <p><strong>Password:</strong>{submittedData.password}</p>

        </div>
      )}
    </div>
   
    </>
  );
}

export default App
