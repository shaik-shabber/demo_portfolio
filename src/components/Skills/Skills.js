import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../../data/constants';

const Skills = () => {
  const truncateSkillLevel = (level) => {
    if (window.innerWidth <= 768) {
      if (level === 'Beginner' || level === 'Intermediate' || level === 'Advanced') {
        return level.charAt(0); // Display only the first character
      }
    }
    return level; // Return the full level if not one of the specified ones or on larger screens
  };

  return (
    <div id="skills">
      <Wrapper>
        <Title>My Skills</Title>
        <Desc>
          Here are some of My Skills on which I have been working for the Past 2 Years.
        </Desc>
        <SkillsContainer>
          {skillsData.map((item, index) => (
            <SkillCategory key={index}>
              <CategoryTitle>{item.title}</CategoryTitle>
              <SkillsRow>
                {item.skills.map((skill, skillIndex) => (
                  <Skill key={skillIndex}>
                    <Icon src={skill.icon} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{truncateSkillLevel(skill.level)}</SkillLevel>
                  </Skill>
                ))}
              </SkillsRow>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </Wrapper>
    </div>
  );
};

export default Skills;

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const Desc = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillCategory = styled.div`
  width: calc(45% - 2rem);
  margin: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #385270, #000);
  color: white;
  height: auto;
  transition: background-color 0.3s ease;
  border-top: 8px solid #49beb7;
  border-bottom: 8px solid #d64980;
  overflow-wrap: break-word;
  word-wrap: break-word;

  &:hover {
    background-color: #385270;
  }

  @media (max-width: 1024px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    margin: 1rem 0;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Skill = styled.div`
  width: 48%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
`;

const SkillName = styled.span`
  flex: 1;
  font-size: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const SkillLevel = styled.span`
  font-size: 0.8rem;
  color: #ccc;

  @media (max-width: 768px) {
    text-transform: uppercase;
  }
`;
