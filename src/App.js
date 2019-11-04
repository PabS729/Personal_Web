import React from 'react';
import logo from './logo.svg';
import './App.css';
import experienceCard from './ExperienceCard.js';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function App() {
  return (
   <div> 
    <div className="App">
      
      <header className="App-header">
        <p>
          Hi, my name is Minjing. 
        </p>
        <p>I am interested in Software Developer Engineer intern position and I have solid background in Swift, Java, C++, object-oriented design, and mobile development. 
For the past year I have been utilizing Swift and Xcode for a number of projects, coupled with React and Node.js for web development.
 His last internship was also completed with Swift. 
I pick up knowledge with ease, tackles challenges with passion, 
and finishes tasks without compromise. 
</p>
    
    
      <a href="https://github.com/PabS729">Github</a>
      <a href="https://www.linkedin.com/in/minjing-shi-1a2b03175/">LinkedIn</a>
      
      
      </header>
      
      
      
    </div>
    <div className = "Exp-Background">
    <Exp1>My Experience</Exp1>
    
    <Block>
    <Exp>Fullstack Engineer, LaunchIT by CES. 04/2019 – now</Exp>
    <Chunk>
    <ExpBlock>- LaunchIT: a website for students and professors to browse and post projects>and looking for potential candidates for projects and researches.
      </ExpBlock> <ExpBlock>
        
      - Coded features including navigation bar and password reset with React.</ExpBlock> <ExpBlock>
      - Wrote APIs and cloud functions for sending emails and uploading resumes with Firebase and Google Cloud Functions. </ExpBlock> <ExpBlock>
      - Refactored code from the frontend and backend and restructured the app. </ExpBlock> <ExpBlock>
      - Finished the product at the initial release stage with all necessary features. </ExpBlock> <ExpBlock>
      - Programming language: Javascript, HTML, CSS. 
      - Backend: Firebase, Google Cloud Platform.</ExpBlock>
    </Chunk>
    
    </Block>
    
    <Block>
    <Exp>Software Engineer Intern, Golf AI. 06/2019 - 08/2019</Exp>
    <Chunk>
    <ExpBlock>- Golf AI: an iOS app that teaches you how to golf. </ExpBlock> <ExpBlock>
    - Responsible for designing and implementing the User Interface. </ExpBlock> <ExpBlock>
    - Connects machine learning algorithms with interaction in the frontend. </ExpBlock> <ExpBlock>
    - Coded the profile page and past swing video page for the users. </ExpBlock> <ExpBlock>
    - Wrote Unit tests for checking the correctness of the algorithms for angle estimation and user experience. </ExpBlock> <ExpBlock>
    - Refactored the code from the old app and made it lightweight. </ExpBlock> <ExpBlock>
    - Programming language used: Swift. (Private Contributions, not shown on Github)</ExpBlock>
    </Chunk>
    </Block>
    
    

    <Block>
    <Exp>Developer, Codepath iOS University.                                   01/2019 – 06/2019</Exp>
    <ExpBlock>- Developed several iOS apps using XCode and Swift. </ExpBlock> <ExpBlock>
- Flixter, An App for movie browsing and looking up. </ExpBlock> <ExpBlock>
- Twitter: An app emulating the basic functionalities of Twitter</ExpBlock> <ExpBlock>
- Parstagram: Emulating Instagram with the backend set as Parse. </ExpBlock> <ExpBlock>
- Practiced core software engineering techniques, including prototyping, designing and implementing the features. </ExpBlock> <ExpBlock>
- Used UIkit, Spritekit, and various APIs including Twitter API and Parse.</ExpBlock> <ExpBlock>
- Programming Language using: Swift</ExpBlock>
    </Block>
    
    <Block>
    <Exp>Research Collaborator, Nanjing University of Information Science and Technology, 06/2017 - 01/2018</Exp>
    <ExpBlock>- Participated in a research in machine learning algorithms. </ExpBlock> <ExpBlock>
    - Experimented with optimizing a graphical lasso-based algorithm and improved its 
        efficiency by 5 percent. </ExpBlock> <ExpBlock>
        - Recorded the results in the research paper named “ An Infinity Norm Based 
        Dynamic Screening Method for Graphical Lasso Estimation” </ExpBlock> <ExpBlock>
        - Programming language used: MATLAB </ExpBlock> <ExpBlock>
      </ExpBlock>
    </Block>
    </div>
    <div className="Exp-Project">
    <Exp1>Selected Projects</Exp1>
    <Block>
    <Exp>Movshare,          04/2019 - 06/2019</Exp>
    <ExpBlock>- Developed MovShare: An application that helps users see what their friends are watching and locate their friends at movie theaters. </ExpBlock> <ExpBlock>
    - Completed the movie browsing interface using API from theMovieDB.</ExpBlock> <ExpBlock>
    - Worked with the map interface using Google Maps API. </ExpBlock> <ExpBlock>
    - Built the backend to store users' information using Parse. </ExpBlock> <ExpBlock>
    - Programming Language used: Swift. </ExpBlock> <ExpBlock>
    - Backend using: Parse.</ExpBlock>
    </Block>

    <Block>
    <Exp>Unlock!                04/2019 - 05/2019</Exp>
    <ExpBlock>- Developed unlock: An application that warns Uber users if the driver is driving too far off the course. </ExpBlock> <ExpBlock>
    - Connected the car with the application using Node.js and smartcar API.</ExpBlock> <ExpBlock>
    - Worked with building the backend that controls the app using Node.js.</ExpBlock> <ExpBlock>
    - Programming Language used: Javascript, react-native, Node.js. </ExpBlock> <ExpBlock>
    - APIs: Google Cloud Platform, smartcar, Uber</ExpBlock>
    </Block>


    </div>
    </div>
    
    
  );
}

const Exp1 = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  
  
  
`;
const Exp = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 35px;

  
  
  
`;
const ExpBlock = styled.div`
  text-align: left;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Block = styled.div`
  width: 50%;
  display: inline-block;
  padding-top: 20px;
  height: 300px;
  
`;

const MarginBlock = styled.div`
width: 10%;
display:inline-block;
height: 50px;
align-items: center;
`;

const Chunk = styled.div`
  margin-bottom: 20px;
`;
export default App;
