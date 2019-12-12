import React from 'react';

class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hits: [],  };
  }

  componentDidMount() {
    fetch('http://localhost/mapeditor/view.php')
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    return (
        <div>
            Hello<br></br>
            {this.state.hits.map((hits) => ( 
                <div>
                    <h4>
                        {hits.id}-{hits.latitude}-{hits.longitude}-{hits.name}-
                        { hits.completed && <span>Completed</span> }
                        { !hits.completed && <span>Pending</span> }      
                    </h4> 
                </div>
            ))}
        </div>
    );
  };

}

export default Api;