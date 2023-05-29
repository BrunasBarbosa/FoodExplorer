import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  * {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  label {
    font-size: 1.6rem;
  }

  select {
    min-height: 4.8rem;
    padding: 1.6rem;
    font-size: 1.4rem;
    border: none;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`;
