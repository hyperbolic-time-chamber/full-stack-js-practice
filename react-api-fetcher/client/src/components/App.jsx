import React, { Component } from 'react';
import JobList from './JobList';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      location: "",
      fulltime: false,
      jobs: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    if (e.target.name === "fulltime") {
      this.setState({fulltime: e.target.checked});
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let endpoint = `https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.location}`;
    this.state.fulltime && (endpoint += '&full_time=true');
    console.log(endpoint);
    const payload = { url: endpoint }
    axios.post('/api/jobs', payload)
      .then( response => {
        this.setState({jobs: response.data})
      })
      .catch( err => console.error(err));
  }
  //description: 'node', 'ruby', 'java'
  //location: city name, zip code, or other location search term
  //lat
  //long
  //full_time: set to true
  render() {
    return(
      <div>
        <h1>GitHub Job Fetcher</h1>
        <form  onSubmit={this.handleSubmit}>
          Language Description: <input type="text" onChange={(e) => this.handleInputChange(e)} name="description" required/><br/>
          Location: <input type="text" onChange={(e) => this.handleInputChange(e)} name="location" required/><br/>
          <input type="checkbox" onChange={(e) => this.handleInputChange(e)} name="fulltime"/> fulltime <br/>
          <input type="submit" value="Submit"/>
        </form>

        <JobList />
      </div>
    )
  }
};

export default App;