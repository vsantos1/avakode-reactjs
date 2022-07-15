import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { setPageTitle } from "../../hooks/ChangeTitle";
import { Container, Logo } from "./styles";

const seeToken = (key: string) => {
  let Token = localStorage.getItem(key);
  return Token;
};

export const Tokenizer = seeToken(`session_cookie`);

const Auth: React.FC = () => {
  setPageTitle("@vsantos1 | Login page");
  const testRef = useRef(null);

  const [userName, setUserName] = useState("");

  const submitToken = (key: string, value: boolean) => {
    let newValue = String(value);
    localStorage.setItem(key, newValue);
  };

  const deleteToken = (key: string) => {
    localStorage.removeItem(key);
  };

  return (
    <Container>
      <Logo>
        <h1 ref={testRef}></h1>
      </Logo>
      {/* <video height={300} src="/music.mp4" role="music" controlsList="nodownload" translate="yes" title="Lil peep song" controls poster="/poster.jpg" /> */}
      <Link to="/dashboard">Test</Link>
      <button onClick={() => submitToken("session_cookie", true)}>ADD Token</button>
      <button onClick={() => seeToken("session_cookie")}>Ver token</button>
      <button onClick={() => deleteToken("session_cookie")}>Deletar token</button>
    </Container>
  );
};

export default Auth;
