import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Lantern from './lantern.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      from: 'a secret admirer',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    if (this.state.name !== event.target.value) {
      var name = event.target.value;
      this.setState({name: name}, () => {console.log(this.state.name)});
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios.post('/lantern', {
      name: this.state.name,
      from: this.state.from
    })
    .then((res) => {
      this.setState({submitted: true}, () => {console.log(this.state.submitted)});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    if (!this.state.submitted) {
      return (
        <div>
      <div className="formsubmit">
        <form>
        <input type="text" id="name" name="name" placeholder="someone" minLength="4" maxLength="20" value={this.state.name} onChange={this.handleChange} />
      <br />
        <input type="submit" value="light a lantern" onClick={this.handleFormSubmit} id="submit"/>
        </form>
      </div>
    </div>
      )
    } else {
      return (
      <div>
      <div className="submitted">
        <p id="litname">{this.state.name}</p>
        <p id="lit">lights up my life.</p>
      </div>
      </div>
    )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));