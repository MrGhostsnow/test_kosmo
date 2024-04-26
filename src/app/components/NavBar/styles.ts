import styled from "styled-components";

export const ContainerNavBar = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.5px solid #00000066;
`;

export const ContentNavBar = styled.div`
    height: 24px;
    width: 1170px;
    display: flex;
    justify-content: space-around;
`;

export const Logo = styled.p`
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    color: #000000;
`;

export const LinksNavBar = styled.div`
    display: flex;
    gap: 48px;
`;

export const Links = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000000;
    cursor: pointer;
`;

export const InputSearch = styled.input`
    height: 38px;
    width: 243px;
    border-radius: 4px;
    border: none;
    gap: 10px;
    padding: 7px 12px;
    background-color: #F5F5F5;
`;

export const IconSearch = styled.span`
    position: absolute;
    right: 9rem;
    top: 5.6rem;
`;