import React, { Component } from 'react';
import animal from './animal.jpg';
import food from './food.jpg';
import people from './people.jpg';
import travel from './travel.jpg';

import './Artist.css';


class Artist extends Component {
  render() {
    return (
      <div>
      <section>
          <h1 className='intro'>Welcome to <b>Maddie's</b> portfolio.</h1>
              <div class = "column">
                  <div class = "row">
                      <img className='animal' src={animal} alt='Animal'/>
                      <img className='food' src={food} alt='Food'/>
                  </div>
                  <div class = "row">
                      <img className='people' src={people} alt='People'/>
                      <img className='travel' src={travel} alt='Travel'/>
                  </div>
              </div>
          <div className='text'>Name: Maddie<br/>Age: 24<br/>Major: Bachelor of Arts<br/>Address: -</div>
        <br/>
        <h3>About Me</h3>
        <div className='aboutme'>
          <h4>Paragraph 1 <br/><br/><h6>1st Paragraph</h6></h4>
          <h4>Paragraph 2 <br/><br/><h6>2nd Paragraph</h6></h4>
          <h4>Paragraph 3 <br/><br/><h6>3rd Paragraph</h6></h4>
        </div>
      </section>
    </div>
    );
  }
}

export default Artist;
