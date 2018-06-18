import React, {Component} from 'react';

class IdCard extends Component {
  render() {
    return(
      <main>
      console.log({this.props.person})
      {/* Photo
        <img src={person.picture.medium} />
First name
Last name
Date of birth
Postal code
User ID*/}
</main>
    );
  }
}

export default IdCard;
