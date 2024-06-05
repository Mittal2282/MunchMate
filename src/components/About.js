import { Component } from 'react';
// import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent Render');

    return (
      <div className="about-page">
        <h1>About from Class Component</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is About Page</h2>
        <UserClass name={'First'} location={'Badvel class'} />
      </div>
    );
  }
}




export default About;
