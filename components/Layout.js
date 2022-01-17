import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

  const LayoutContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
  `;
const Layout = ({ children }) => {

  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
