import React from "react";
import { Container, Content, BackgroundImage, TypeText, World, Context } from "./styles";

const Background: React.FC = () => {
  return (
    <Container>
      <BackgroundImage height={400} src="/world.svg" alt="jose" />

      <World>
        <BackgroundImage height={400} src="/connect.svg" alt="jose" />
        <Context>• Conectando pessoas através da tecnologia,</Context>
        <Context>• Desenvolvimento para aplicações web e mobile,</Context>
        <Context>• Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Context>
      </World>

      <Content>
        <TypeText
          options={{
            strings: ["Praesentium perferendis vero placeat ?", "Lorem vero earm non quae?", "Earm non quae?"],
            autoStart: true,
            loop: true,
            delay: 200,
            deleteSpeed: 50,
            skipAddStyles: true,
          }}
        />
        <Context>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Context>
      </Content>
    </Container>
  );
};

export default Background;
