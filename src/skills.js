import React, { Component } from 'react'

class AllSkills extends Component {
  render () {
  var arreglo = this.props.habilities.map( function (array) {
      return <li className='skills-list__single'>{array}</li>
    })

// console.log(this.props);
    return (
        <div>
          <span className='skills-list'>{arreglo}</span>
        </div>
    );
  }
};

export default AllSkills
