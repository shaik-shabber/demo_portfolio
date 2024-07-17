import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>Shabber Shaik</FooterText>
        <FooterText>© 2024 Shabber Shaik. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  padding: 3px;
  text-align: center;
  width: 100%;
  margin-top: 100px;
`;

const FooterContent = styled.div`
  font-size: 0.9rem;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;
