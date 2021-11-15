import Link from 'next/link';//next
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';//icons
import { DiCssdeck } from 'react-icons/di';//icons

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a  style={{display: "flex" , alignItems: "center" , color: 'white' , marginBottom : '20px' }}>
          <DiCssdeck size="3rem" ></DiCssdeck> <Span>Portafolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link  href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link  href="#tech">
          <NavLink>Technologias</NavLink>
        </Link>
      </li>
      <li>
        <Link  href="#about">
          <NavLink>Acerca</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
