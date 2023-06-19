import { Container } from '../Container/Conteiner';
import { Button } from '../Button/Button';

import BurgerMenu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../images/logo.svg';

import {
 LogoLink,
 LogoText,
 HeaderWrap,
 HeaderNav,
 //  BtnWrap,
 HeaderDecoration,
} from './Header.styled';

const Header = () => {
 return (
  <HeaderWrap id="home">
   <Container>
    <HeaderDecoration>
     <HeaderNav>
      <LogoLink to={'https://prime-chat.netlify.app/'}>
       <Logo />
       <LogoText>PrimeChat</LogoText>
      </LogoLink>
     </HeaderNav>
     <a a href="https://prime-chat.netlify.app/blog">
      <Button variant="secondary" text={'Blog'} />
     </a>
     <BurgerMenu />
    </HeaderDecoration>
   </Container>
  </HeaderWrap>
 );
};

export default Header;
