import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Typography, Link } from "@mui/material";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px;
`;

const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.5);
  }
`;

const HeartIcon = styled.span`
  vertical-align: middle;
  animation: ${heartbeat} 1.5s infinite;
  display: inline-block;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Typography variant="body1" color="inherit">
          Made with <HeartIcon>❤️</HeartIcon> by{" "}
          <Link
            href="https://github.com/rahulsharmaah"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            Rahul Sharma
          </Link>
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
