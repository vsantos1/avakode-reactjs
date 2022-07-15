import React, { useState } from "react";
import { Container, Linker, List, Logo, Navigation, Login, Register, MoreInfos } from "./styles";
import Modal from "../Modal";
import Mobile from "../Mobile";
const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTriggerModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Container>
      <a href="/" aria-label="Link para a home">
        <Logo src="/logo2.png" alt="Logomarca da casa, bem-vindo(a)." />
      </a>
      <Mobile />

      <Navigation>
        <List>
          <Linker to="/">Home</Linker>
        </List>
        <MoreInfos>
          <Modal triggerModal={handleTriggerModal} status={isModalOpen} />
        </MoreInfos>
        <List>
          <Linker to="/">Lorem </Linker>
        </List>
        <List>
          <Linker to="/">Ipsum </Linker>
        </List>
        <List>
          <Login to="/login">Login </Login>
        </List>
        <List>
          <Register to="/">Registrar </Register>
        </List>
      </Navigation>
    </Container>
  );
};

export default Header;
