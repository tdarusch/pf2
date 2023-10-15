import React from "react";
import PageContainer from "../../Components/PageContainer/PageContainer";
import HeaderText from "../../Components/TextComponents/HeaderText/HeaderText";
import BodyText from "../../Components/TextComponents/BodyText/BodyText";
import InlineContainer from "../../Components/InlineContainer/InlineContainer";
import VerticalContainer from "../../Components/VerticalContainer/VerticalContainer";
import CircularImage from "../../Components/CircularImage/CircularImage";
import { Box, Divider } from "@mui/material";
import Headshot from "../../Images/headshot.png";
import cpp from "../../Images/cpp.png";
import csharp from "../../Images/csharp.png";
import java from "../../Images/java.png";
import lua from "../../Images/lua.png";
import ocaml from "../../Images/ocaml.png";
import python from "../../Images/python.png";
import react from "../../Images/react.png";

const Landing = (props) => {
  return(
    <>
      <PageContainer>
        <InlineContainer>
          <VerticalContainer orientation='left'>
            <CircularImage
              src={Headshot}
              alt='Headshot'
            />
          </VerticalContainer>
          <VerticalContainer orientation='right' justify='top'>
            <HeaderText text='Hello!' variant='h3'/>
            <Divider/>
            <BodyText variant='h5' mt={1}
              text='My name is Tommy Rusch, though I usually just go by Tom. This site is meant to be a showcase of my past, ongoing, and future work as well as a repository for me to post articles, thoughts, and updates.
              This project is built with ReactJS and Java Spring, as well as MaterialUI v5 styling. Plan to mess around with animation too'
            />
            <BodyText variant='h5'
              text='To consider this site complete, I need to finish building the UI, link & host the accompanying Spring service, containerize the project, and enable user validation for myself any any other authenticated users
              to post/moderate accordingly. I am not intending to make the next revolutionary webapp, but I have always wanted somewhere for peers to browse my work and interact with me.'
            />
          </VerticalContainer>
        </InlineContainer>
      </PageContainer>
      <PageContainer>
        <HeaderText justify='left' text='About me' variant='h4'/>
      </PageContainer>
      <PageContainer>
        <HeaderText justify='center' text='Development' variant='h4'/>
        <InlineContainer>
          <CircularImage maxWidth="200px" maxHeight="200px" src={react} alt="React" />
          <CircularImage maxWidth="200px" maxHeight="200px" src={csharp} alt="C#" />
          <CircularImage maxWidth="200px" maxHeight="200px" src={cpp} alt="C++" />
          <CircularImage maxWidth="200px" maxHeight="200px" src={java} alt="Java" />
          <CircularImage maxWidth="200px" maxHeight="200px" src={python} alt="Python" />
          <CircularImage maxWidth="200px" maxHeight="200px" src={lua} alt="Lua" />
          <CircularImage maxWidth="200px" maxHeight="200px" src={ocaml} alt="OCaml" />
        </InlineContainer>
      </PageContainer>
    </>
  );
};

export default Landing;