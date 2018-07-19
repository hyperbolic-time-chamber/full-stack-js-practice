import React, { Component } from 'react';
import JobList from './JobList';
import BouncingLoader from './BouncingLoader';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "", //description: 'node', 'ruby', 'java'
      location: "", //location: city name, zip code, or other location search term
      fulltime: false, //false or true
      jobs: [],
      searching: false
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
    this.setState({searching: true});
    let endpoint = `https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.location}`;
    this.state.fulltime && (endpoint += '&full_time=true');
    const payload = { url: endpoint }
    axios.post('/api/jobs', payload)
      .then( response => {
        this.setState({jobs: response.data, searching: false});
        console.log(this.state.jobs);
      })
      .catch( err => console.error(err));
  }

  render() {
    const jobList = this.state.jobs.length ? <JobList jobs={this.state.jobs}/> : null;
    const loader = this.state.searching ? <BouncingLoader /> : null;
    return(
      <div>
        <h1 className="navHead">GitHub Job Fetcher</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          Language Description: <input type="text" className="search-field" onChange={(e) => this.handleInputChange(e)} name="description" placeholder="javascript" required/><br/>
          Location: <input type="text" className="search-field" onChange={(e) => this.handleInputChange(e)} name="location" placeholder="seattle" required/><br/>
          <input type="checkbox" className="search-field" onChange={(e) => this.handleInputChange(e)} name="fulltime"/> fulltime <br/>
          <input type="submit" className="search-field" value="Submit"/>
        </form>
        {loader}
        {jobList}
      </div>
    )
  }
};

export default App;