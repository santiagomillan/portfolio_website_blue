import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { SectionDivider } from '../../styles/GlobalComponents';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br/>
        My personal portfolio
      </SectionTitle>
      <SectionDivider/>
      <SectionTitle main center>
        Santiago Millan
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
      </SectionText>
      <Button onClick={()=> window.location = 'http://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;