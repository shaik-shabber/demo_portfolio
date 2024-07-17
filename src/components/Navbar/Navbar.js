import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  max-width: 1200px;
  width: 100%;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: orange;
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  margin-right: 20px;
  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  height: 80%;
  padding: 0 6px;
  position: relative;
  top: 3px;
  right: 24px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const LeetcodeButton = styled.a`
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  background: linear-gradient(135deg, orange, violet);
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, violet, orange);
    color: ${({ theme }) => theme.text_light};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
    transform: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(LinkR)`
  color: white;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledBrackets = styled.span`
  font-size: 2rem;
  color: blue;
  & > span {
    color: white;
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <StyledBrackets>
            &lt;<span>shabber / shaik</span>&gt;
          </StyledBrackets>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contactus">Contact us</NavLink>
        </NavItems>
        <ButtonContainer>
          <LeetcodeButton href="https://leetcode.com/u/shabber_shaik/" target="_blank">
            LeetCode Profile
          </LeetcodeButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks to="#">Home</MobileMenuLinks>
          <MobileMenuLinks to="/">About</MobileMenuLinks>
          <MobileMenuLinks to="#skills">Skills</MobileMenuLinks>
          <MobileMenuLinks to="#Projects">Projects</MobileMenuLinks>
          <MobileMenuLinks to="/">Education</MobileMenuLinks>
          <MobileMenuLinks to="https://leetcode.com/u/shabber_shaik/" target="_blank">
            Contact Us
          </MobileMenuLinks>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
