import React from 'react';

const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'VueJS','Node.js','Php','Python', 'SQL'];

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