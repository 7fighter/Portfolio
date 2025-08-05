// src/pages/Projects.tsx

// Import necessary React libraries
import React, { useEffect, useState } from 'react';

// Import your custom components.
// You will need to uncomment and update these import paths
// based on where your component files are located.
// import DroppingObject from '../components/DroppingObject';
// import ProjectCard from '../components/ProjectCard';
// import DustEffect from '../components/DustEffect';
// import BackButton from '../components/BackButton';

// Define a type for your project data to ensure type safety with TypeScript
// You should update this interface to match the structure of your project objects
interface Project {
  id: number;
  title: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
}

// Example data for your projects. You will replace this with your actual project data.
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Example Project 1',
    stack: ['React', 'TypeScript', 'Node.js'],
    githubLink: 'https://github.com/your-username/your-project-1',
    liveLink: 'https://your-project-1.netlify.app',
  },
  {
    id: 2,
    title: 'Example Project 2',
    stack: ['Vue.js', 'Firebase'],
    githubLink: 'https://github.com/your-username/your-project-2',
    liveLink: 'https://your-project-2.vercel.app',
  },
  // Add more projects here
];

const Projects = () => {
  // You can use state to manage the visibility of elements,
  // for example, to show project cards after an animation completes.
  const [showProjects, setShowProjects] = useState(false);

  // useEffect can be used to trigger animations or set timeouts.
  // For example, after 2 seconds, set the showProjects state to true.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 2000); // 2000ms delay

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this runs only once

  return (
    <div className="projects-page-container">
      {/* This is where you would place your 'DroppingObject' animation. 
        You can conditionally render it, or have a state variable to hide it
        once the animation is complete.
      */}
      {/* <DroppingObject icons={['code', 'wrench', 'keyboard']} onAnimationComplete={() => setShowProjects(true)} /> */}

      {/* Conditionally render your project cards */}
      {showProjects && (
        <div className="project-cards-container">
          {/*
            Map over your project data to render a ProjectCard for each project.
            You will need to create and import a ProjectCard component for this to work.
            This component would handle the display of the title, stack, and buttons.
          */}
          {projectsData.map(project => (
            // Replace `div` with your `ProjectCard` component
            // <ProjectCard
            //   key={project.id}
            //   title={project.title}
            //   stack={project.stack}
            //   githubLink={project.githubLink}
            //   liveLink={project.liveLink}
            // />
            <div key={project.id} className="project-card-placeholder">
              <h3>{project.title}</h3>
              <p>Stack: {project.stack.join(', ')}</p>
              <button onClick={() => navigator.clipboard.writeText(project.githubLink)}>
                Copy GitHub Link
              </button>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button>Visit Live/Demo</button>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* You can include a back button here, just as you planned. 
        Uncomment the line below if you have the BackButton component ready.
      */}
      {/* <BackButton /> */}
    </div>
  );
};

export default Projects;