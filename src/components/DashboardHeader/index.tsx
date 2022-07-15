import React, { useState } from "react";
import { Container, Linker, List, Logo, Navigation, Login, Register, MoreInfos } from "./styles";
import Mobile from "../Mobile";
import Settings from "../Settings";

const DashboardHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTriggerModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Container>
      <a href="/dashboard" aria-label="Link para a dashboard">
        <Logo src="/logo2.png" alt="Logomarca da casa, bem-vindo(a)." />
      </a>

      <Navigation>
        <MoreInfos>
          <Mobile />
          <Settings />
        </MoreInfos>
      </Navigation>
    </Container>
  );
};

export default DashboardHeader;
