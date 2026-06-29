import styled from "styled-components";

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 20px;
    left: 20px;

    width: 48px;
    height: 48px;

    border: none;
    border-radius: 12px;

    background: #1f2937;
    color: #fff;

    cursor: pointer;

    z-index: 2000;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

    transition: all .25s ease;

    &:hover {
      background: #374151;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;