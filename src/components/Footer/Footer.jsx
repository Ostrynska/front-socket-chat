import { HashLink as Link } from 'react-router-hash-link';
import { Container } from '../Container/Conteiner';
import {
 FooterSection,
 Instagram,
 Facebook,
 Twitter,
 Linkedin,
 Youtube,
 UpToTop,
 FooterSocialWrap,
 FooterSocialTitle,
 FooterSocialList,
 FooterSocial,
 FooterSocialItem,
 FooterCopyrightWrap,
 FooterCopyrightText,
 FooterCopyrightSpan,
 FooterCopyright,
} from './Footer.styled';

const Footer = () => {
 return (
  <FooterSection>
   <Container>
    <FooterSocialWrap>
     <FooterSocial>
      <FooterSocialTitle>Follow Us:</FooterSocialTitle>
      <FooterSocialList>
       <FooterSocialItem>
        <a href="https://www.instagram.com/">
         <Instagram size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://www.facebook.com/">
         <Facebook size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://twitter.com/">
         <Twitter size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://www.linkedin.com/">
         <Linkedin size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://www.youtube.com/s">
         <Youtube size={40} />
        </a>
       </FooterSocialItem>
      </FooterSocialList>
     </FooterSocial>

     <FooterCopyrightWrap>
      <FooterCopyright>
       <FooterCopyrightText>
        Copyright © PrimeChat by{' '}
        <FooterCopyrightSpan>VictorFlow</FooterCopyrightSpan> powered by{' '}
        <FooterCopyrightSpan>Webflow</FooterCopyrightSpan>.
       </FooterCopyrightText>
       <Link smooth to="/#home">
        <UpToTop size={50} />
       </Link>
      </FooterCopyright>
     </FooterCopyrightWrap>
    </FooterSocialWrap>
   </Container>
  </FooterSection>
 );
};

export default Footer;
