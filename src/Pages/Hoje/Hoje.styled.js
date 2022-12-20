import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`
export const Data = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-top: 100px;
margin-left: 17px;
margin-bottom: 3px;
`
export const Sts = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: ${props => props.cor ? '#BABABA' : '#8FC549'};
margin-left: 17px;
margin-bottom: 23px;
`