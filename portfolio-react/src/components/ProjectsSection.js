import React from 'react';
import '../styles/main.css';

function ProjectsSection() {
  // Define an array of project objects
  const projects = [
    {
      title: 'MyJourney',
      description:
        'Developed a travel planning website offering customized itinerary creation and seamless navigation through diverse travel options. This platform allows users to explore hotels and restaurants. Built with a focus on intuitive UX/UI, the project utilizes HTML, CSS, JavaScript, and sorting options to help users organize their journeys easily.',
      link: 'https://saja-massimi.github.io/MyJourney/',
    },
    {
      title: 'Waggy',
      description:
        'Waggy, an eCommerce platform for cat and dog lovers, offers everything from clothing and food to toys and essential tools. Developed as part of our Full Stack journey, this project allowed us to combine technical skills with practical team collaboration, creating a space where pet owners can find all they need to keep their furry friends happy and healthy! , ',
      link: 'https://github.com/samiyaseen3/waggy',
    },
    {
      title: 'HTML , CSS Project',
      description:
        'Developed a fully responsive website using HTML and CSS, showcasing a deep understanding of modern web design techniques and the ability to create visually appealing, user-friendly interfaces. The project aimed to ensure that the website\'s layout and functionality adapt smoothly to various screen sizes, enhancing accessibility and usability.',
      link: 'https://0lwrz.github.io/HTML-CSS-Project/',
    },
    {
      title: 'E-commerce Project',
      description:
        'Developed a comprehensive e-commerce website using React, demonstrating proficiency in modern web development practices and a strong understanding of frontend technologies. The project included various features designed to enhance user experience, streamline the shopping process, and ensure efficient management of products and orders.',
      link: 'https://ecommerce-finalproject.onrender.com/',
    },
  ];

  return (
    <section className="projects section" id="Projects">
      <div className="container section-title">
        <h2>Projects</h2>
        <p>My Projects</p>
      </div>
      <div className="container project-item">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Take a look
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
