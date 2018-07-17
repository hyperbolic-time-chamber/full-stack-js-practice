import React from 'react';

const JobListEntry = props => {
  const job = props.job;
  return (
    <div className="job-list-entry-container">
      <a href={job.company_url}>
        <img className="job-logo" src={job.company_logo} alt={job.company}/>
      </a>
      <div>company: {job.company}</div>
      <div>title: {job.title}</div>
      <div>location: {job.location}</div>
      <div><a href={job.url}>Find out more!</a></div>
    </div>
  )
}

export default JobListEntry;

/*
company: 'name'
company_logo: url string
company_url: url string
created_at: 
description
how_to_apply
location
title
*/