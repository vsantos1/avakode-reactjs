import styled from "styled-components";
import Typewrite from "typewriter-effect";

export const Container = styled.div`
  position: relative;
  display: flex;
  user-select: none;
  pointer-events: none;
  margin-top: 2px;
  overflow: hidden;
  height: fit-content;
  max-width: (100vw, 100%);
  border: 2px solid var(--white-200);
  background-color: var(--darker);
  justify-content: space-around;
  box-shadow: 19px 24px 80px -41px rgba(0, 0, 0, 0.35);
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  right: 2%;
  width: 300px;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  background: -webkit-linear-gradient(var(--light-blue), var(--blue-300));
  border-left: 1px solid var(--gray-100);
  margin: 2px 4px;
  padding: 4px 8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(1px 1px 0px var(--gray-100));
  @media (max-width: 900px) {
    filter: none;
  }
`;

export const World = styled.div`
  font-size: 24px;
  font-weight: bold;
  border-left: 1px solid var(--white-200);
  overflow: hidden;
  padding: 4px 8px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const BackgroundImage = styled.img`
  height: (5vw, 100%);
  padding: 0 1rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  user-select: none;
  pointer-events: none;
  object-fit: contain;
`;
export const Context = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: var(--gray-300);
  -webkit-text-fill-color: gray;
  background-color: transparent;
`;

export const TypeText = styled(Typewrite)``;
