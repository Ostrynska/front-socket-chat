import { Container } from '../Container/Conteiner';

import BurgerMenu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../images/logo.svg';

import {
 LogoLink,
 LogoText,
 HeaderWrap,
 HeaderNav,
 BtnWrap,
 Button,
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
     <BtnWrap to={'https://prime-chat.netlify.app/blog'}>
      <Button>Blog</Button>
     </BtnWrap>
     <BurgerMenu />
    </HeaderDecoration>
   </Container>
  </HeaderWrap>
 );
};

export default Header;
