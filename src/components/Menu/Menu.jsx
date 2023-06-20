import { useState } from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { RxHamburgerMenu } from 'react-icons/rx';

import {
 MenuLink,
 BurgerMenuStyles,
 BurgerMenuContainer,
 MenuList,
 MenuItem,
 IconCross,
} from './Menu.styled';

const BurgerMenu = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const handleStateChange = state => {
  setMenuOpen(state.isOpen);
 };

 const closeMenu = () => {
  setMenuOpen(false);
 };
 return (
  <BurgerMenuContainer>
   <Menu
    customBurgerIcon={<RxHamburgerMenu />}
    customCrossIcon={<IconCross />}
    right
    isOpen={menuOpen}
    onStateChange={state => handleStateChange(state)}
    styles={BurgerMenuStyles}
   >
    <MenuList>
     <MenuItem>
      <MenuLink onClick={() => closeMenu()} to="https://prime-chat.netlify.app">
       Home
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink
       onClick={() => closeMenu()}
       to="https://prime-chat.netlify.app/blog"
      >
       Blog
      </MenuLink>
     </MenuItem>
    </MenuList>
   </Menu>
  </BurgerMenuContainer>
 );
};

export default BurgerMenu;
