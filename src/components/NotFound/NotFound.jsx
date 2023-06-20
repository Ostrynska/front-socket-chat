import { Section, Wrapper, Text, Image } from './NotFound.styled';
import { Container } from '../Container/Conteiner';

import notFoundImage from '../../images/not-found/404@1x.png';
import notFoundImageRetina from '../../images/not-found/404@2x.png';

const Permission = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section>
   <Container>
    <Wrapper>
     <Image
      src={isRetina ? notFoundImageRetina : notFoundImage}
      alt="Not Found"
     />
     <Text>This Page Doesn't or was removed! We suggest you back to home</Text>
    </Wrapper>
   </Container>
  </Section>
 );
};

export default Permission;
