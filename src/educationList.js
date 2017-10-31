import React, { Component } from 'react';

class AllEducation extends Component {
  render () {

  var schools = this.props.formation.map(function (obj) {
      return <div>
        <h5 className='degree_institute'>{obj.institute}</h5>
        <p className='degree_field'>{obj.fieldOfStudy}</p>
        <p className='degree_dates'>{obj.dates}</p>
      </div>
    });

    return (
      <div className='degree-list'>
        {schools}
      </div>
    );
  }
};

export default AllEducation
