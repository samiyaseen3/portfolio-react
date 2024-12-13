import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact } from 'react-icons/fa';


function SkillsSection() {
  const skills = [
    {
      title: "HTML5",
      description: "Proficient in crafting semantic and accessible HTML structures.",
      Icon: FaHtml5,
    },
    {
      title: "CSS3",
      description: "Skilled in styling websites with modern CSS techniques, including Flexbox and Grid layouts.",
      Icon: FaCss3Alt,
    },
    {
      title: "JavaScript",
      description: "Dynamic and interactive web development using ES6+ and frameworks.",
      Icon: FaJs,
    },
    {
      title: "PHP",
      description: "Expertise in server-side scripting and building RESTful APIs.",
      Icon: FaPhp,
    },
    {
      title: "Laravel",
      description: "Skilled in using Laravel for building scalable, efficient web applications.",
      Icon: FaLaravel,
    },
    {
      title: "React",
      description: "Proficient in building dynamic, high-performance web applications using React.",
      Icon: FaReact,
    },
  ];

  return (
    <section className="skills section" id="Skills">
      <div className="container section-title">
        <h2>Skills</h2>
        <p>My Skills</p>
      </div>
      <div className="container skills-item">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="icon">
              <skill.Icon size={50} color="#fff" />
            </div>
            <div className="skill-title">
              <h2>{skill.title}</h2>
            </div>
            <div className="skill-des">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
