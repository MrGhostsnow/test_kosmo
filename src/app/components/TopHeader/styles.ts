"use client";
import styled from "styled-components";

export const ContainerTopHeader = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    width: 100%;
`;

export const ContentTopHeader = styled.div`
    width: 1059px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const LanguageOptions = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #fafafa;
`;

export const SectionText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const SpanTopHeader = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: #fafafa;
    text-decoration: underline;
`;

export const TextTopHeader = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #fafafa;
`