import React from "react";
import { setPageTitle } from "../../hooks/ChangeTitle";
import Header from "../../components/Header";
import { Contact, Container, Image, Links } from "./styles";

function Error() {
  setPageTitle("@vsantos1 | Page not found");
  return (
    <>
      <Header />
      <Container>
        <Image height={250} src="/error404.svg" />
        <Image height={150} src="/taken.svg" />
      </Container>
      <Links>
        <Contact className="first" href="https://www.linkedin.com/in/vinicius-gabriel-09741623b/" target="_blank">
          Frontend developer
        </Contact>
        <Contact href="https://github.com/diamate1" target="_blank">
          Backend developer
        </Contact>
      </Links>
    </>
  );
}

export default Error;
