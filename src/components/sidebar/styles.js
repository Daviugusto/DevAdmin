import { styled } from "styled-components"
import { NavLink } from "react-router-dom";


export const MainBar = styled.aside`
  width: 240px;
  height: 100vh;
  background: #111827;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

 @media (max-width: 768px) {
    position: fixed;
    left: ${({ open }) => (open ? "0" : "-260px")};
    top: 0;
    z-index: 1000;
  }
`;

export const User = styled.div`
  margin-bottom: 40px;
`;

export const Nome = styled.h3`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Email = styled.p`
  font-size: 12px;
  color: #9ca3af;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #9ca3af;
    padding: 10px;
    border-radius: 8px;
    transition: 0.2s;
  }

  a:hover {
    background: #1f2937;
    color: white;
  }

  @media (max-width: 768px) {
    a span {
      display: none;
    }
  }
`;

