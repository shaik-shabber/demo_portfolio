import React from 'react';
import styled from 'styled-components';
import heroImg from "../../images/hero_img.jpg";

const About = () => {
  return (
    <AboutSection id="About">
      <ContentWrapper>
        <TextContent>
        <Title>About me</Title>
          <SectionTitle>I am Shabber Shaik</SectionTitle>
          <SectionSubtitle>Full-Stack Developer</SectionSubtitle>
          <SectionText>
            I am a passionate Full-Stack Developer, focusing primarily on backend development. During my academic journey, I have successfully completed several notable projects:
          </SectionText>
          <br />
          <ProjectHighlight color="#357876">Doctor Appointment System:</ProjectHighlight>
          <ProjectDescription>
            Developed as part of my Software Engineering project, this system facilitates seamless appointment scheduling and management.
          </ProjectDescription>
          <br />
          <ProjectHighlight color="#357876">UROP Project - EEG Signal Analysis:</ProjectHighlight>
          <ProjectDescription>
            Collaborated on a project that involved analyzing EEG signals to identify individuals, contributing to advancements in biometric identification.
          </ProjectDescription>
          <br />
          <br />
          <ProjectHighlight color="#357876">College Fest Website:</ProjectHighlight>
          <ProjectDescription>
            Designed and implemented a website for our college fest, enhancing communication and engagement among students and participants.
          </ProjectDescription>
          <SectionText>
            I am enthusiastic about learning new technologies and staying updated with the latest trends in software development. I am actively seeking job opportunities where I can apply my skills, learn, and grow. If you have an opportunity that aligns with my experience and aspirations, feel free to reach out.
          </SectionText>
        </TextContent>
        <ImageContainer>
          <HeroImage src={heroImg} alt="Hero Image" />
        </ImageContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 2rem;
  text-align:center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2e86de;
`;

const SectionSubtitle = styled.h3`
  font-size: 1.8rem;
  color: #555;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
`;

const ProjectHighlight = styled.strong`
  color: ${({ color }) => color || 'inherit'};
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: white;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, orange, violet);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(135deg, violet, orange);
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 calc(40% - 50px);
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 50px;
  object-fit: cover;
`;

export { AboutSection, ContentWrapper, TextContent, SectionTitle, SectionSubtitle, SectionText, ContactButton, ImageContainer, HeroImage };
