import React, { useState } from 'react';
import styled from 'styled-components';
import projectsData from '../../data/Projects';

const categories = ['All', 'Web Apps', 'Android Apps', 'Machine Learning'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleExpand = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.type === selectedCategory);

  return (
    <ProjectsContainer id="Projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <Categories>
        {categories.map(category => (
          <CategoryButton
            key={category}
            onClick={() => setSelectedCategory(category)}
            selected={selectedCategory === category}
          >
            {category}
          </CategoryButton>
        ))}
      </Categories>
      <ProjectsSubtitle>
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
      </ProjectsSubtitle>
      <ProjectsList>
        {filteredProjects.map((project, index) => (
          <Project key={index}>
            <ProjectHeader onClick={() => handleExpand(project)}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDuration>{project.duration}</ProjectDuration>
              <TechnologiesList>
                {project.technologies.map((tech, i) => (
                  <Technology key={i}>{tech}</Technology>
                ))}
              </TechnologiesList>
            </ProjectHeader>
          </Project>
        ))}
      </ProjectsList>
      {selectedProject && (
        <ProjectModal>
          <ModalContent>
            <ModalHeader>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            </ModalHeader>
            <ProjectImageExpanded src={selectedProject.image} alt={selectedProject.title} />
            <Technologies>
              <TechnologiesTitle>Technologies Used:</TechnologiesTitle>
              <TechnologiesListModal>
                {selectedProject.technologies.map((tech, i) => (
                  <Technology key={i}>{tech}</Technology>
                ))}
              </TechnologiesListModal>
              <Description>{selectedProject.description}</Description>
              <ActionLinks>
                {selectedProject.codeLink && (
                  <ActionLink href={selectedProject.codeLink} target="_blank">View Code</ActionLink>
                )}
                {selectedProject.liveLink && (
                  <ActionLink href={selectedProject.liveLink} target="_blank">View Live App</ActionLink>
                )}
              </ActionLinks>
            </Technologies>
          </ModalContent>
        </ProjectModal>
      )}
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  background-color: ${({ selected, theme }) => (selected ? theme.primary : 'transparent')};
  color: ${({ selected, theme }) => (selected ? 'white' : theme.text)};
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary_light};
    color: white;
  }
`;

const ProjectsSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 40px;
  color: white;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Project = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.card_light_hover};
  }
  text-align: center;
`;

const ProjectHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

const ProjectTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  color: white;
`;

const ProjectDuration = styled.span`
  font-size: 0.9rem;
  color: white;
  margin-top: 5px;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const TechnologiesListModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

const Technology = styled.span`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const ProjectModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  padding: 40px;
  border-radius: 12px;
  width: 80%;
  max-width: 800px;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary_light};
  }
`;

const Technologies = styled.div`
  margin-bottom: 12px;
  text-align: center;
`;

const TechnologiesTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: white;
  text-align: center;
`;

const ProjectImageExpanded = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 12px;
`;

const ActionLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  justify-content: center;
`;

const ActionLink = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary_light};
  }
`;
