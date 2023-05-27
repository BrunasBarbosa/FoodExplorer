import styled from 'styled-components';

export const Container = styled.div`
  width: 100%

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 1.6rem;
  }
`;
