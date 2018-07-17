import React from 'react';
import JobListEntry from './JobListEntry';

const JobList = props => {
  return(
    <div className="job-list-container">
      {props.jobs.map( (job, i) => {
        return <JobListEntry key={i} job={job}/>
      })}
    </div>
  )
}

export default JobList