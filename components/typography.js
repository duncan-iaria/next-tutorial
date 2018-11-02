import styled, { css } from 'styled-components';

export const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Arial';

  /* example on how to use props, this is not actually in play */
  ${props =>
    props.h === '1' &&
    css`
      font-size: 32px;
      text-transform: uppercase;
    `};
`;
