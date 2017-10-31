import React, { Component } from 'react';
import AllSkills from './skills.js'
import AllEducation from './educationList.js'
import AllJobs from './jobs.js'

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h4>Skills</h4>
            <div className="skills-list">
              <AllSkills habilities={this.props.habilities}/>
            <span className="skills-list__single">UI Design</span>
          </div>
        </section>
        <section>
          <h4>Education</h4>
              <div className="degree-list">
                <AllEducation formation={this.props.formation}/>
              </div>
        </section>
        <section>
          <div className="job-timeline">
            <AllJobs experience={this.props.experience}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
