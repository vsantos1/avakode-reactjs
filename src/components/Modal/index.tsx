import React, { useState } from "react";
import { ModalContent, DropDown, ModalTrigger, ModalContainer, SubLink, ArrowDown, ArrowUp } from "./styles";

interface ModalProps {
  status: boolean;
  triggerModal: () => void;
}

const Modal = ({ status, triggerModal }: ModalProps) => {
  const [test, setTest] = useState(false);

  return (
    <ModalContainer>
      <DropDown>
        <ModalTrigger onMouseEnter={() => setTest(!test)}>
          Saiba mais
          {test ? <ArrowUp /> : <ArrowDown />}
        </ModalTrigger>
        <ModalContent onMouseLeave={() => setTest(false)}>
          <SubLink to="/">Termos de serviço</SubLink>
          <SubLink to="/faq">Perguntas frequentes</SubLink>
          <SubLink to="/about">Sobre</SubLink>
          <SubLink to="/developers">Developer</SubLink>
          <SubLink to="/contact">Contato</SubLink>
          <SubLink to="/pricing">Preços</SubLink>
        </ModalContent>
      </DropDown>
    </ModalContainer>
  );
};

export default Modal;
