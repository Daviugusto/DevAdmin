import styled from "styled-components"
import { Responsive } from "../../styles/responsive"


export const Background = styled.div`
    background-color: gray;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    overflow-y: auto;

    
    ${Responsive.tablet`
    flex-direction: column;
  `}

  ${Responsive.mobile`
    padding: 10px;
  `}

`

export const Boxcards = styled.div`
    display: flex;
    justify-content:space-around;
    gap: 10px;
    flex-wrap: wrap;
`

export const BoxCharts = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

`
export const Title = styled.h2`
color: #333;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    `