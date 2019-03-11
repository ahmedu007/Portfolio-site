import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.png";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={3}>
      <Hero offset={0}>
        <BigTitle>
          Hello 👋, <br /> I'm Umair.
        </BigTitle>
        <Subtitle>
          Currently working for{" "}
          <a href="https://and.digital/" target="_blank" rel="noopener">
            AND digital
          </a>{" "}
          as a Product Developer.
          <br />I code and absolutely love what I do.
        </Subtitle>
      </Hero>
      {/* <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Freiheit"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
          <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects> */}
      <About offset={1}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Umair Ahmed" title="Profile Picture" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a JavaScript enthusiast who loves ReactJS. I'm passionate about a great UX/UI and love building one or
          two. I have also worked on several projects with NodeJS, GraphQL and AWS Microservices. I have been also been
          a fulltime developer for React Native, and have fallen in love with it ever since.
        </AboutDesc>
      </About>
      <Contact offset={2}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:umair170@hotmail.com">Hi</a> or find me on other platforms:{" "}
            <a href="https://twitter.com/umair170">Twitter</a>,{" "}
            <a href="https://www.linkedin.com/in/umair-ahmed-0222b377/">LinkedIn</a> &{" "}
            <a href="https://github.com/ahmedu007">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Umair Ahmed Portfolio.{" "}
          <a href="https://github.com/ahmedu007/Portfolio-site">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
