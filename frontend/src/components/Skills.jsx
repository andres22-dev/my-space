import React from 'react';

const skills = ['JavaScript', 'React', 'CSS', 'Node.js'];

const Skills = () => {

  return(
    <section id="skills">
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>  
  )
}
  
  export default Skills