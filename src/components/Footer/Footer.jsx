import { HashLink as Link } from 'react-router-hash-link';
import { Container } from '../Container/Conteiner';
import {
 FooterSection,
 LogoLink,
 LogoText,
 FooterLogoWrap,
 FooterContactsWrap,
 FooterContactsItem,
 FooterContactsLink,
 FooterContactsSpan,
 Instagram,
 Facebook,
 Twitter,
 Linkedin,
 Youtube,
 UpToTop,
 FooterWrap,
 FooterSocialWrap,
 FooterSocialTitle,
 FooterSocialList,
 FooterSocial,
 FooterSocialItem,
 FooterCopyrightWrap,
 FooterCopyrightText,
 FooterCopyrightSpan,
 FooterCopyright,
 Map,
} from './Footer.styled';

import { ReactComponent as Logo } from '../../images/logo.svg';

const Footer = () => {
 return (
  <FooterSection>
   <Container>
    <FooterWrap>
     <FooterLogoWrap>
      <LogoLink to={'https://prime-chat.netlify.app/'}>
       <Logo />
       <LogoText>Primarily.</LogoText>
      </LogoLink>
      <FooterContactsWrap>
       <FooterContactsItem>
        <FooterContactsLink href="https://goo.gl/maps/Cx5XwLTdZTRS3aPP7">
         1811 Silverside Rd, Wilmington,
         <br /> DE 19810, USA
        </FooterContactsLink>
       </FooterContactsItem>
       <FooterContactsItem>
        <FooterContactsLink href="tel:+10012560034">
         US: +1 <FooterContactsSpan>(001) 256-0034</FooterContactsSpan>
        </FooterContactsLink>
        <br />
        <FooterContactsLink href="tel:+05555141245">
         UK: +0 <FooterContactsSpan>(555) 514-1245</FooterContactsSpan>
        </FooterContactsLink>
       </FooterContactsItem>
       <FooterContactsItem>
        <FooterContactsLink href="mailto:support@primchat.com">
         email: support@primchat.com
        </FooterContactsLink>
       </FooterContactsItem>
      </FooterContactsWrap>
     </FooterLogoWrap>
     <div>
      <Map
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.3841100267387!2d-75.49972752375668!3d39.798374993042195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e3623551c401%3A0x3d40fb3224e015d7!2zMTgxMSBTaWx2ZXJzaWRlIFJkLCBXaWxtaW5ndG9uLCBERSAxOTgxMCwg0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1687169912318!5m2!1suk!2sua"
       allowfullscreen=""
       loading="lazy"
       referrerpolicy="no-referrer-when-downgrade"
       title="Map"
      ></Map>
     </div>
    </FooterWrap>

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
