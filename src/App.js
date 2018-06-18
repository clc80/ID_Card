import React, { Component } from 'react';
import sha256 from 'crypto-js/sha256';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     persons: [],
     firstName: "",
     lastName: "",
     dob:"",
     postalCode: ""
   };
 }

 componentDidMount() {
   fetch("https://randomuser.me/api/")
     .then(res => res.json())
     .then(
       (data) => {
         this.setState({
           isLoaded: true,
           persons: data.results,
           firstName: data.results[0].name.first,
           lastName: data.results[0].name.last,
           dob: data.results[0].dob.date,
           postalCode: data.results[0].location.postcode
         });
       },
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
 }

 render() {

   const { error, isLoaded, persons, firstName, lastName, dob, postalCode } = this.state;
   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <main className='card'>
         {persons.map((person, index) => {
           var encrypted = sha256(firstName + lastName + dob + postalCode, "Secret")
           return (
             <div key={index}>
             <img src={person.picture.large} alt={person.name.first} />
             <h2 className="name">Name: {firstName} {lastName}</h2>
             <p><span className="bold">DOB:</span> {dob} </p>
             <p><span className="bold">Postal code:</span> {postalCode}</p>
             <p><span className="bold">User ID:</span> {encrypted.toString().substr(0, 20)} </p>

           </div>
           );
         })}
       </main>
     );
   }
 }
}

export default App;
