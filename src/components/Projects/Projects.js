import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';
import './overrides.css';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>
      <div className='slide'>
        <h3>Slide 2.1</h3>
      </div>
      <div className='slide'>
        <h3>Slide 2.2</h3>
      </div>
      <div className='slide'>
        <h3>Slide 2.3</h3>
      </div>
      {/* <div className='projects__grid'>
        {projects.map(project => <ProjectContainer key={uniqid()} project={project} />)}
      </div> */}
    </section>
  );
};

export default Projects;
