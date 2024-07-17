import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <div id="Education">
      <EducationContainer>
        <EducationContent>
          <SectionTitle>Education</SectionTitle>
          <EducationDetails>
            <EducationItem>
              <EducationYear>2021 - Current</EducationYear>
              <EducationInfo>
                <EducationTitle>B.Tech in Computer Science Engineering</EducationTitle>
                <EducationSubtitle>SRM University AP</EducationSubtitle>
                <EducationDescription>
                  I am currently pursuing my B.Tech in Computer Science Engineering at SRM University AP.
                  I am passionate about exploring various aspects of computer science, including software development,
                  machine learning, and web technologies.
                  My Currennt CGPA: 8.65
                </EducationDescription>
              </EducationInfo>
            </EducationItem>
            <EducationItem>
              <EducationYear>2019 - 2021</EducationYear>
              <EducationInfo>
                <EducationTitle>Intermediate</EducationTitle>
                <EducationSubtitle>Krishna Chaitanya Junior College</EducationSubtitle>
                <EducationDescription>
                  Completed my Intermediate education with a focus on Mathematics, Physics, and Chemistry.
                  Achieved an outstanding percentage of 94.5%.
                </EducationDescription>
              </EducationInfo>
            </EducationItem>
          </EducationDetails>
        </EducationContent>
      </EducationContainer>
    </div>
  );
};

export default Education;

const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

const EducationContent = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
`;

const EducationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px; /* Adjust gap between items */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; /* Adjust gap for smaller screens */
  }
`;

const EducationItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0; /* Ensure flex items can shrink */
`;

const EducationYear = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const EducationInfo = styled.div`
  background-color: #0e151c;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  width: 100%;
  overflow: hidden; /* Hide overflow if content exceeds */
`;

const EducationTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

const EducationSubtitle = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-top: 8px;
`;

const EducationDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-top: 8px;
`;
