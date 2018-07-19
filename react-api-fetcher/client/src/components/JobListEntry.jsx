import React from 'react';

const JobListEntry = props => {
  const job = props.job;
  return (
    <div className="job-list-entry-container">
      <a href={job.company_url} target="_blank">
        <img className="job-logo" src={job.company_logo} alt={job.company}/>
      </a>
      <div className="job-texts">
        <div>company: {job.company}</div>
        <div>title: {job.title}</div>
        <div>location: {job.location}</div>
        <div><a href={job.url} target="_blank">Find out more!</a></div>
      </div>
    </div>
  )
}

export default JobListEntry;