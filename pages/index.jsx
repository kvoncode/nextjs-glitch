import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Pulsar } from "../components/Pulsar";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.primary};
`;

export default () => (
  <StyledMain>
    <Head>
      <title>Next.js template</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Alata&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    
    <Pulsar></Pulsar>
  </StyledMain>
);
