import {styled} from "styled-components";

export const Container = styled.div`
    width: 190px;
    height: 130px;

    background: ${({$background}) => $background};

    border-radius: 8px;

    padding: 20px;

    box-shadow: 0 6px 15px rgba(0,0,0,.15);

    display:flex;
    justify-content:space-between;
`;

export const Top = styled.div`
    display:flex;

    justify-content:space-between;

    align-items:center;

    h4{
        font-size:14px;
        font-weight:500;
    }
`;