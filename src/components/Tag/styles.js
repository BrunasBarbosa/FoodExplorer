import styled from 'styled-components';

export const Container = styled.div`
  padding: .4rem .8rem;

  font-size: 1.4rem;
  text-align: center;
  line-height: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .5rem;

`;