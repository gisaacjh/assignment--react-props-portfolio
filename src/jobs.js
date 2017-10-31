import React, { Component } from 'react'

class AllJobs extends Component {
  render () {
    var works = this.props.experience.map(function (obj) {
      return <div className='job'>
        <div className='job__years'><h6 className='job__start'>{obj.years.start}</h6><h6 className='job__end'>{obj.years.end}</h6>
        </div>
        <h5 className='job_title'>{obj.title}</h5>
        <h5 className='job_company'>{obj.company}</h5>
        <p className='job_description '>{obj.description}</p>
      </div>
    })


    return (
      <div>{works}</div>
    );
  }
};

export default AllJobs
