import { Container } from '../Container/Conteiner';
import { Button } from '../Button/Button';

import BurgerMenu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../images/logo.svg';

import {
 LogoLink,
 LogoText,
 HeaderWrap,
 HeaderNav,
 MenuList,
 MenuItem,
 BtnWrap,
 Link,
 HeaderDecoration,
} from './Header.styled';

const Header = () => {
 return (
  <HeaderWrap id="home">
   <Container>
    <HeaderDecoration>
     <HeaderNav>
      <LogoLink to={'/'}>
       <Logo />
       <LogoText>PrimeChat</LogoText>
      </LogoLink>
      <MenuList>
       <MenuItem>
        <Link smooth to="/#about-us">
         About Us
        </Link>
       </MenuItem>
       <MenuItem>
        <Link smooth to="/#platform">
         Platform
        </Link>
       </MenuItem>
       <MenuItem>
        <Link smooth to="/#resources">
         Resources
        </Link>
       </MenuItem>
       <MenuItem>
        <Link smooth to="/#solution">
         Solution
        </Link>
       </MenuItem>
       <MenuItem>
        <Link smooth to="/#pricing">
         Pricing
        </Link>
       </MenuItem>
      </MenuList>
     </HeaderNav>
     <BtnWrap>
      <Button variant="secondary" text={'Login'} />
     </BtnWrap>
     <BurgerMenu />
    </HeaderDecoration>
   </Container>
  </HeaderWrap>
 );
};

export default Header;
