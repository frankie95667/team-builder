import React, {useState, useEffect} from 'react';

const Form = (props) => {

    const [team, setTeam] = useState({
        id: props.team.length,
        name: '',
        email: '',
        role: '',
        image: 'https://loremflickr.com/320/240'
    })

    useEffect(()=> {
    }, [props.memberToEdit])

    const handleChange = e => {
        setTeam({
          ...team,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMember();
        setTeam({
            name: '',
            email: '',
            role: '',
            image: 'https://loremflickr.com/320/240'
        })
        
    }

    const addMember = () => {
        props.setTeam(prevTeam => [
            ...prevTeam,
            team
        ])
    }

    return (
        <form  onSubmit={(e)=>handleSubmit(e)}>
            <input 
                onChange={handleChange} 
                name="name" 
                type="text" 
                value={team.name}
                placeholder="Enter name..." />
            <input 
                onChange={handleChange} 
                name="email" 
                type="text" 
                value={team.email}
                placeholder="Enter email..." />
            <input 
                onChange={handleChange} 
                name="role" 
                type="text" 
                value={team.role}
                placeholder="Enter role..." />
            <button>Submit!</button>
        </form>
    );
}

export default Form;