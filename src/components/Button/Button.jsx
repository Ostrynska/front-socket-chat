import {
 PrimaryButton,
 SecondaryButton,
 SecondaryButtonIcon,
} from './Button.styled';
export const Button = ({ text, variant = 'secondary' }) => {
 return <SecondaryButton>{text}</SecondaryButton>;
};
