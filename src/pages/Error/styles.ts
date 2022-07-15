import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  pointer-events: none;
  display: flex;
  width: 100vw;
  height: 50vh;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 2rem;
`;
export const Contact = styled.a`
  padding: 0.5rem 1rem;
  text-decoration: none;
  border: 1px solid var(--light-blue);
  background-color: transparent;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 500;
  &:hover {
    border: 1px solid var(--light-blue);

    background-color: var(--light-blue);
    color: white;
    transition: 0.2s ease-in-out;
  }
  &.first {
    background-color: var(--light-blue);
    border: 1px solid var(--light-blue);

    color: white;
    :hover {
      background-color: transparent;
      color: var(--darker);
    }
  }
`;
