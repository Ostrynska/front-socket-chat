import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const ButtonStyle = styled.button`
 display: inline-block;
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-transform: uppercase;

 height: 86px;
 border-radius: 72px;

 transition: ${mainVars.transitions.main};
`;

export const SecondaryButton = styled(ButtonStyle)`
 display: inline-block;
 color: ${mainVars.colors.whiteColor};
 padding: 28px 66px 29px;
 background-color: ${mainVars.colors.headerColor};
 &:hover {
  color: ${mainVars.colors.textColor};
  background-color: ${mainVars.colors.greyColor};
 }
`;
