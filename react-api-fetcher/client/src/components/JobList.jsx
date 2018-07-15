import React, { Component } from 'react';
import JobListEntry from './JobListEntry';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <JobListEntry />
      </div>
    )
  }
}

export default JobList