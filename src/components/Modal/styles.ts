import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { RiArrowUpSFill, RiArrowDownSFill } from "../../styles/Icons";

export const ModalContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  background-color: transparent;
  cursor: pointer;
`;

export const ModalTrigger = styled.div`
  display: inline-block;
  color: var(--darker);
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
`;
const animate = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;

}
`;
export const ModalContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-top: 3px solid var(--darker);
  animation: ${animate};
  animation-duration: 0.4s;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropDown = styled.div`
  display: inline-block;

  &:hover ${ModalContent} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SubLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  font-weight: normal;
  font-size: 14px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    background-color: #0093e9;
    color: var(--white);
  }
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
