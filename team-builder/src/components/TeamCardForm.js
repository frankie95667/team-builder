import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg, Container, Col, Button, Label, Input} from 'reactstrap';

const TeamCardForm = ({member, setMemberToEdit, editMember}) => {
    const [memberInputs, setMemberInputs] = useState(member);

    const handleChange = (e) => {
        setMemberInputs({
            ...memberInputs,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submitting...');
        editMember(memberInputs);
        setMemberToEdit();
    }

    return(
        <Container>
            <Col>
                <Card>
                    <CardImg src={memberInputs.image} />
                    <form onSubmit={onSubmit}>
                    <CardBody>
                    <Label htmlFor="edit_name">Name</Label>
                    <Input 
                        id="edit_name"
                        onChange={handleChange} 
                        name="name" 
                        type="text" 
                        value={memberInputs.name}
                        placeholder="Enter name..." />
                    <Label htmlFor="edit_email">Email</Label>
                    <Input 
                        id="edit_email"
                        onChange={handleChange} 
                        name="email" 
                        type="text" 
                        value={memberInputs.email}
                        placeholder="Enter email..." />
                    <Label htmlFor="edit_role">Role</Label>
                    <Input 
                        id="edit_role"
                        onChange={handleChange} 
                        name="role" 
                        type="text" 
                        value={memberInputs.role}
                        placeholder="Enter role..." />
                        
                    </CardBody>
                    <Button>Update</Button>
                    </form>
                </Card>
            </Col>
        </Container>
    );
}

export default TeamCardForm;