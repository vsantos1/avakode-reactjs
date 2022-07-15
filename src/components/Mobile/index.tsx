import React, { useState } from "react";
import { Container, MenuTrigger, MenuSearch, InputBox } from "./styles";

const Mobile: React.FC = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <Container>
      <InputBox value={userInput} type="text" placeholder="Pesquisa" onChange={(e) => setUserInput(e.target.value)} />
      <MenuSearch />
      <MenuTrigger />
    </Container>
  );
};

export default Mobile;
