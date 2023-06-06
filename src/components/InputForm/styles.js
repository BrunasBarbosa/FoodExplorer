import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  * {
    font-family: var(--font-secondary);
  }

  display: flex;
  flex-direction: column;
  gap: .8rem;

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 1.6rem;
  }
`;