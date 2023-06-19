import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const LogoLink = styled(NavLink)`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 30px;
 line-height: 1.3;
 color: ${mainVars.colors.headerColor};

 margin-left: 2px;
 @media screen and (min-width: 1920px) {
  margin-left: 10px;
  font-size: 40px;
 }
`;

export const HeaderWrap = styled.header`
 display: flex;
 align-items: flex-start;
 margin: 42px 0 60px 0;

 @media screen and (min-width: 1200px) {
  margin: 42px 0 81px 0;
  align-items: center;
  justify-content: stretch;
 }
`;

export const HeaderNav = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const BtnWrap = styled(NavLink)`
 display: none;
 @media screen and (min-width: 1200px) {
  display: inline-block;
  margin-left: auto;
 }
`;

export const HeaderDecoration = styled.div`
 display: flex;
 position: relative;
`;
