import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 3.2rem;

  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.RED_400};

  border-radius: .5rem;
  border: none;
`;