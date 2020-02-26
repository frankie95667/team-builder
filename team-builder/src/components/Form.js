import React, {useState} from 'react';

const Form = ({submitSearch}) => {

    const [team, setTeam] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChange = e => {
        setTeam({
          ...team,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch(team);
        setTeam({
            name: '',
            email: '',
            role: ''
        })
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