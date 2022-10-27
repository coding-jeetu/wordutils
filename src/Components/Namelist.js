import React from 'react'

function Namelist() {


const persons = [
{
    id:1,
    name:'Adam',
    age:30,
    skill: 'React'
},

{
    id:2,
    name:'Booby',
    age:30,
    skill: 'Angular'
},

{
    id:3,
    name:'Charles',
    age: 30,
    skill: 'vue'
},

{    id:4,
    name:'david',
    age:30,
    skill: 'Node.js'
}
]
const personlist = persons.map(person => <person key = {person.id} person={person}  />)
return <div>{personlist}</div>
} 


export default Namelist