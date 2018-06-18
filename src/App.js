import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     persons: []
   };
 }

 componentDidMount() {
   fetch("https://randomuser.me/api/")
     .then(res => res.json())
     .then(
       (data) => {
         this.setState({
           isLoaded: true,
           persons: data.results
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
   const { error, isLoaded, persons } = this.state;
   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <main className='card'>
         {persons.map((person, index) => {
           console.log({person})
           return (
             <div key={index}>
             <img src={person.picture.large} alt={person.name.first} />
             <h2 className="name">Name: {person.name.first} {person.name.last}</h2>
             <p><span className="bold">DOB:</span> {person.dob.date} </p>
             <p><span className="bold">Postal code:</span> {person.location.postcode}</p>
             <p><span className="bold">User ID:</span> {person.login.username} </p>
           </div>
           );
         })}

         {/* Photo

First name
Last name
Date of birth
Postal code
User ID*/}

       </main>
     );
   }
 }
}

export default App;
