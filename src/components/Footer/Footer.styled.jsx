import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import {
 AiOutlineInstagram,
 AiFillFacebook,
 AiOutlineTwitter,
 AiFillLinkedin,
 AiFillYoutube,
} from 'react-icons/ai';

import { IoIosArrowDropupCircle } from 'react-icons/io';

export const Map = styled.iframe`
 display: none;
 @media screen and (min-width: 768px) {
  display: flex;
  border: 0;
  width: 415px;
  height: 350px;
 }

 @media screen and (min-width: 1200px) {
  width: 450px;
  height: 350px;
 }
 @media screen and (min-width: 1920px) {
  width: 820px;
  height: 350px;
 }
`;

export const Instagram = styled(AiOutlineInstagram)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Facebook = styled(AiFillFacebook)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Twitter = styled(AiOutlineTwitter)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Linkedin = styled(AiFillLinkedin)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Youtube = styled(AiFillYoutube)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const UpToTop = styled(IoIosArrowDropupCircle)`
 color: ${mainVars.colors.headerColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
 @media screen and (min-width: 1920px) {
  margin-left: 100px;
 }
`;

export const FooterSection = styled.footer``;

export const FooterWrap = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;

 background: ${mainVars.colors.bgFooter};
 border-radius: 30px;
 padding: 20px 21px;
 width: 100%;

 @media screen and (min-width: 768px) {
  gap: 40px;
  padding: 30px 31px;
 }

 @media screen and (min-width: 1200px) {
  gap: 0;
  align-items: center;
  flex-direction: row;

  padding: 40px 41px;
 }
 @media screen and (min-width: 1920px) {
  padding: 60px 61px;
 }
`;

export const FooterLogoWrap = styled.div``;

export const FooterContactsWrap = styled.ul`
 margin-top: 40px;
 display: flex;
 flex-direction: column;
 gap: 50px;
`;

export const FooterContactsItem = styled.li``;

export const FooterContactsLink = styled.a`
 all: initial;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const FooterContactsSpan = styled.span`
 font-weight: 600;
`;

export const LogoLink = styled(NavLink)`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 40px;
 line-height: 1.3;
 color: ${mainVars.colors.headerColor};

 margin-left: 14px;
`;

export const FooterSocial = styled.div`
 margin-top: 30px;
 margin-bottom: 15px;

 display: flex;
 flex-wrap: wrap;
 justify-content: stretch;
 @media screen and (min-width: 480px) {
  justify-content: space-between;
 }
 @media screen and (min-width: 1200px) {
  padding: 26.5px 0 30.5px 0;
  margin-top: 0px;
  margin-bottom: 0px;
 }
`;

export const FooterSocialTitle = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 25px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;
export const FooterSocialList = styled.ul`
 display: flex;
 gap: 15px;
 flex-direction: row;
 align-items: baseline;
 margin-top: 15px;
 @media screen and (min-width: 417px) {
  margin-top: 0px;
  mardin-left: 10px;
  display: inline-flex;
 }
 @media screen and (min-width: 430px) {
  margin-top: 0px;
  margin-left: 5px;
 }
 @media screen and (min-width: 768px) {
  margin-left: 32px;
 }
 @media screen and (min-width: 1200px) {
  margin-left: 0px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 32px;
 }
`;

export const FooterSocialItem = styled.li``;
export const FooterSocialLink = styled.a`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 20px;
 line-height: 248.5%;

 color: ${mainVars.colors.textColor};
`;

export const FooterSocialWrap = styled.div`
 @media screen and (min-width: 1200px) {
  display: flex;
 }
`;

export const FooterCopyrightWrap = styled.div`
 max-width: 751px;
 border-top: 1px solid ${mainVars.colors.lineColor};
 @media screen and (min-width: 1200px) {
  border-top: 0;
  margin-left: 180px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 244px;
 }
`;

export const FooterCopyright = styled.div`
 display: flex;
 align-items: center;
 padding: 26.5px 0px 30.5px;

 @media screen and (min-width: 1920px) {
  padding: 18px 0 22px 0;
 }
`;

export const FooterCopyrightText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.headerColor};
`;

export const FooterCopyrightSpan = styled.span`
 font-weight: 500;
 color: ${mainVars.colors.primaryColor};
 &:hover {
  color: ${mainVars.colors.checkOrange};
 }
`;
