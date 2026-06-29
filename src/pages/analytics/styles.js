import styled from "styled-components"
import { Responsive } from "../../styles/responsive"

export const BoxAnalytics = styled.div`
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

export const BoxcardsAnaly = styled.div`
    display: flex;
    justify-content:space-between;
    gap: 10px;
    height: 150px;
    flex-wrap: wrap;
`

export const ChartContainer = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`
export const ChartTitle = styled.h2`
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
`

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
`
export const SummaryContainer = styled.div`
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 15px;
    border-top: 1px solid #e0e0e0;
`

export const SummaryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SummaryItem = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: #333;
`

export const ColorBox = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 2px;
    background-color: ${props => props.color || '#4F46E5'};
    flex-shrink: 0;
`