import React, { Component } from 'react';
import IdCard from './components/idCard';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     person: []
   };
 }

 componentDidMount() {
   fetch("https://randomuser.me/api/")
     .then(res => res.json())
     .then(
       (data) => {
         this.setState({
           isLoaded: true,
           person: data.results
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
   const { error, isLoaded, person } = this.state;
   if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <main>
         {console.log({person})}
       </main>
     );
   }
 }
}

export default App;
