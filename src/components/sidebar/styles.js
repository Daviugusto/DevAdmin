import { styled } from "styled-components"
import { NavLink } from "react-router-dom";
import { Responsive } from "../../styles/responsive";

export const MainBar = styled.div`
  width: 250px;
  min-height: 100vh;
  background: #163a63;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

   ${Responsive.tablet`
    width: 80px;
  `}

  ${Responsive.mobile`
    display: none;
  `}
`;



export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  img {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background: #fff;
    padding: 8px;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

export const Nome = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const Email = styled.p`
  color: #d3d3d3;
  font-size: 13px;
`;
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 500;
    transition: 0.2s;
  }

  a:hover {
    color: #3b82f6;
  }
`;

