import React from 'react';
import PersonCard from './PersonCard'

let Person = (props) => {
    return props.person.map(person => <PersonCard person={person} />)
    }
    

export default Person;