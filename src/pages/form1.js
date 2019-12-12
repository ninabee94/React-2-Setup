import React from 'react'

class Form1 extends React.Component {
  onSubmit = () => { this.props.history.push('/page1/3') }

  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form1