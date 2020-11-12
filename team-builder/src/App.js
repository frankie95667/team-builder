import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TeamCard from './components/TeamCard';
import teamMembers from "./team";
import "./App.css";
import { Row, Container } from "reactstrap";
import TeamCardForm from "./components/TeamCardForm";

function App() {
  const [team, setTeam] = useState(teamMembers);
  const [memberToEdit, setMemberToEdit] = useState();

  useEffect(()=> {

  }, [team])

  const editMember = (member) => {
    setTeam(prevState => prevState.map(prevStateMember => {
      if(member.id === prevStateMember.id){
        return member;
      }
      return prevStateMember;
    }))
  }

  return (
    <div className="App">
      <Form
        setTeam={setTeam}
        team={team}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
      />
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {team.map(person => {
            if(memberToEdit && memberToEdit.id === person.id){
              return <TeamCardForm 
                  key={person.id}
                  member={person} 
                  editMember={editMember}
                  setMemberToEdit={setMemberToEdit}
                  memberToEdit={memberToEdit} />
            }
            return (
                <TeamCard 
                  key={person.id}
                  member={person} 
                  setMemberToEdit={setMemberToEdit}
                  memberToEdit={memberToEdit} />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
