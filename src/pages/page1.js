import React from 'react';
import { Link } from 'react-router-dom'


class Page1 extends React.Component {
    render() {
      const { params } = this.props.match
      return (
        <div>  
            <h1> Page 1</h1><br></br>
            <p>Subpage {params.id}</p><br></br><br></br>

            <h1>Subpage</h1>
            <strong>select a user</strong>
            <ul>
                <li><Link to="/page1/1">subpage 1</Link></li>
                <li><Link to="/page1/2">subpage 2</Link></li>
                <li><Link to="/page1/3">subpage 3</Link></li>
            </ul>
        </div>
      );
    }
}
  
export default Page1;