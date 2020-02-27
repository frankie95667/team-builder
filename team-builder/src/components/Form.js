import React, { useState, useEffect } from "react";
import {
  Input,
  Label,
  Button,
  Form as BSForm,
  FormGroup,
  Container
} from "reactstrap";

const Form = props => {
  const [team, setTeam] = useState({
    id: props.team.length,
    name: "",
    email: "",
    role: "",
    image: "https://loremflickr.com/320/240"
  });

  useEffect(() => {}, [props.memberToEdit]);

  const handleChange = e => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMember();
    setTeam({
      name: "",
      email: "",
      role: "",
      image: "https://loremflickr.com/320/240"
    });
  };

  const addMember = () => {
    props.setTeam(prevTeam => [...prevTeam, team]);
  };

  return (
    <Container>
      <BSForm onSubmit={e => handleSubmit(e)}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={handleChange}
            name="name"
            type="text"
            value={team.name}
            placeholder="Enter name..."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={handleChange}
            name="email"
            type="text"
            value={team.email}
            placeholder="Enter email..."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            onChange={handleChange}
            name="role"
            type="text"
            value={team.role}
            placeholder="Enter role..."
          />
        </FormGroup>
        <Button>Submit!</Button>
      </BSForm>
    </Container>
  );
};

export default Form;
