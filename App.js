import React from 'react';
import './App.css';
import aboutPic from './aboutPic.JPG';
import Posts from './posts/posts';

//make this reusable so that with different parameters, you can pass an image
class PreviewImage extends React.Component {
  render() {
    return (
      <img
        src={aboutPic} 
        alt='Aarti Vasudevan!' 
        width='100%' 
        height='auto'/>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hi, I'm Aarti, a Computer Engineering undergraduate student from the University of Waterloo, and I love learning more about front-end systems everyday! My interests include learning how to use JavaScript (React) on webpages like this one, working on full-stack development in organizations, singing, and creating art. 
        </p>
        <p>
          Looking for Fall 2020 internships!
        </p>
      </div>
    )
  }
}

class Links extends React.Component {
  render() {
    return (
      <div>
        <h1> Links </h1>
        <li>
          <a 
            href="https://github.com/rtvasu"
            target="_blank"
            rel="noopener noreferrer"
          >
              GitHub
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/aarti-vasudevan/"
            target="_blank"
            rel="noopener noreferrer"
          >
              LinkedIn
          </a>
        </li>
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PreviewImage />
        <About />
        <Links />
        <Posts />
    </div>
    )
  }
}
