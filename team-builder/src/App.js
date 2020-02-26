import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import teamMembers from "./team";
import "./App.css";

function App() {
  const [team, setTeam] = useState(teamMembers);
  const [teamQuery, setTeamQuery] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    const tempTeam = teamMembers.filter(team => {
      return (
        team.name.toLowerCase().includes(teamQuery.name.toLowerCase()) &&
        team.email.toLowerCase().includes(teamQuery.email.toLowerCase()) &&
        team.role.toLowerCase().includes(teamQuery.role.toLowerCase())
      );
    });

    setTeam(tempTeam);
  }, [teamQuery]);

  const submitSearch = query => {
    setTeamQuery(query);
  };
  return (
    <div className="App">
      <Form
        submitSearch={submitSearch}
      />
      {team.map(person => {
        return (
          <div key={person.id} className="team-wrapper">
            <div className="team-image">
              <img alt={person.name} src={person.image} />
            </div>
            <div className="info-wrapper">
              <h2>{person.name}</h2>
              <p>Role: {person.role}</p>
              <p>Email: {person.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
