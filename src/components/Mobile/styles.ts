import styled, { css } from "styled-components";
import { GiHamburgerMenu, AiOutlineSearch } from "../../styles/Icons";

export const Container = styled.div`
  display: none;
  @media (max-width: 685px) {
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
  }
`;

const IconsStyle = css`
  width: 2rem;
  height: 2rem;
  &:hover {
    cursor: pointer;
    &,
    svg,
    svg path {
      fill: var(--light-blue);
    }
  }
`;
export const InputBox = styled.input`
  border: 2px solid var(--darker);
  border-radius: 4px;
  padding: 2px 8px;
  ::placeholder {
    font-size: 1rem;
    color: var(--gray-300);
  }
  :focus,
  :hover {
    border: 2px solid var(--light-blue);
    cursor: text;
  }
`;

export const MenuTrigger = styled(GiHamburgerMenu)`
  ${IconsStyle}
`;
export const MenuSearch = styled(AiOutlineSearch)`
  ${IconsStyle}
`;
