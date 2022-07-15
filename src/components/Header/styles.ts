import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowDownSFill, RiArrowUpSFill } from "../../styles/Icons";

export const Container = styled.div`
  border: 1px solid var(--white);
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4.5px 4.5px 3.6px rgba(0, 0, 0, 0.035), 12.5px 12.5px 10px rgba(0, 0, 0, 0.05), 30.1px 30.1px 24.1px rgba(0, 0, 0, 0.065), 100px 100px 80px rgba(0, 0, 0, 0.1);
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  min-width: min(40vw, 100%);
  margin: 0 4px;
  gap: 0.5rem;
  justify-content: center;
  @media (max-width: 685px) {
    display: none;
  }
`;
export const List = styled.li`
  display: flex;
  list-style: none;
`;

export const MoreInfos = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsStyle = css`
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 4px 1rem;
  display: flex;
  align-items: center;
  &:hover,
  &.active {
    border-bottom: 4px solid var(--light-blue);
    transition: 0.1s ease-in-out;
    color: var(--light-blue);
  }
`;

export const Linker = styled(Link)`
  ${ButtonsStyle}
`;

export const Login = styled(Link)`
  ${ButtonsStyle}
  border: 1px solid  var(--light-blue);
  border-radius: 4px;
  &:hover {
    background-color: var(--light-blue);
    transition: 0.2s ease-in-out;
    border: 1px solid var(--white);
    color: var(--white);
  }
`;
export const Register = styled(Link)`
  ${ButtonsStyle}
  border: 1px solid var(--white);
  border-radius: 4px;
  background-color: var(--light-blue);

  &:hover {
    background-color: var(--blue-300);
    border: 1px solid var(--blue-100);
    transition: 0.2s ease-in-out;
    color: var(--white);
  }
`;
export const Logo = styled.img`
  height: 2rem;
  flex-shrink: 0;
  object-fit: cover;
`;

const IconsStyle = css`
  width: 1rem;
  height: 1rem;
`;
export const ArrowDown = styled(RiArrowDownSFill)`
  ${IconsStyle};
`;
export const ArrowUp = styled(RiArrowUpSFill)`
  ${IconsStyle};
`;
