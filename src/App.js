import React, {useState} from "react";

function App(){
  const[project, setProject] = useState("");
  const[tech, setTech] = useState("");
  const[features, setFeatures] = useState("");
  const[result, setResult] = useState("");

  const generate = () => {
    const output = Developed ${project} using ${tech}, implementing ${features} to improve performance and user experience.;
    setResult(output);
  };

  return (
    <div style={{maxWidth:"600px",margin:"auto",textAlign:"center",paddingTop:"50px"}}>
    <h1>Resume Bullet Generator</h1>
    <input placeholder="Project Name"onChange={(e) => setProject(e.target.value)}/><br /><br />
    <input placeholder="Tech Stack"onChange={(e) => setTech(e.target.value)}/><br /><br />
    <input placeholder="Features"onChange={(e) => setFeatures(e.target.value)}/><br /><br />

    <button style={{padding:"10px",marginTop:"10px",cursor:"ponter"}}onClick={generate}>Generate</button>
    <button onClick={() => navigator.clipboard.writeText(result)}>Copy Output</button>
    <h3>Output:</h3><br />
    <p>{result}</p>

    <hr />

    <a href="https://digitalheroesco.com" target="_blank" rel="noreferrer33">Built for Digital Heroes</a>
    <p>Sanchita Das</p>
    <p>Email:{"sanchitadasniki@gmail.com"}</p>
    </div>
    
  );
  }
export default App;


