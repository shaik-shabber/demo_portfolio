import React from 'react';
import styled from 'styled-components';
import { bioData } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import hero_img from "../../images/hero_img.jpg";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  min-height: 90vh;
  z-index: 1;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.card_dark};
  clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
  z-index: -1;
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const ImageContainer = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: red;
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  appearance: button;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  background: linear-gradient(135deg, #ff0080, #ff8c00);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff8c00, #ff0080);
  }
`;

const Hero = () => {
  return (
    <div id="Home">
      <HeroContainer>
        <HeroBg />
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br /> {bioData.name}
            </Title>
            <TextLoop>
              I am a{' '}
              <Span>
                <Typewriter
                  options={{
                    strings: bioData.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{bioData.description}</SubTitle>
            <ResumeButton href={bioData.resume} download>
              Download Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <ImageContainer>
              <Image src={hero_img} alt="Hero" />
            </ImageContainer>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
