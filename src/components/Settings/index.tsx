import React, { useState } from "react";
import { ModalContent, DropDown, ModalTrigger, ModalContainer, SubLink, ArrowDown, ArrowUp } from "./styles";

const Settings = () => {
  const [test, setTest] = useState(false);
  const handleUserExit = () => {
    localStorage.removeItem(`session_cookie`);
    window.location.reload();
  };

  return (
    <ModalContainer>
      <DropDown>
        <ModalTrigger onMouseEnter={() => setTest(!test)}>
          <img height={32} src="/user.svg" />
          {test ? <ArrowUp /> : <ArrowDown />}
        </ModalTrigger>
        <ModalContent onMouseLeave={() => setTest(false)}>
          <SubLink to="/">Configurações</SubLink>
          <SubLink to="/faq">Ajuda</SubLink>
          <SubLink onClick={handleUserExit} to="/">
            Sair
          </SubLink>
        </ModalContent>
      </DropDown>
    </ModalContainer>
  );
};

export default Settings;
