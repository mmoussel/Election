import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <ButtonsContainer>
        <ObtionButton href={"/"}>
          <ObtionText>Home</ObtionText>
        </ObtionButton>
        <ObtionButton href={"/about"}>
          <ObtionText>About</ObtionText>
        </ObtionButton>
      </ButtonsContainer>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  margin: 10px auto 80px;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid #ddd;
`;

const ButtonsContainer = styled.div`
  width: 30%;
  display: flex;
`;

const ObtionButton = styled(Link)`
  margin: 0px 10px;
  font-size: 30px;
`;

const ObtionText = styled.a`
  margin: 0px 10px;
  cursor: pointer;
`;
