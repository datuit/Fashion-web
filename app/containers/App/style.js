import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';
const MainWrapper = styled.main`
  margin-top: 130px;
  ${respondBelow(
    'sm',
    `
  margin-top: 70px;
  `,
  )}
`;

export default MainWrapper;
