import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg, Container, Col, Button} from 'reactstrap';

const TeamCard = ({member, setMemberToEdit, memberToEdit}) => {

    return(
        <Container>
            <Col>
                <Card>
                    <CardImg src={member.image} />
                    <CardBody>
                        <CardTitle>{member.name}</CardTitle>
                        <CardText>Role: {member.role}</CardText>
                        <CardText>Email: {member.email}</CardText>
                    </CardBody>
                    <Button onClick={()=> setMemberToEdit(member)}>Edit</Button>
                </Card>
            </Col>
        </Container>
    );
}

export default TeamCard;