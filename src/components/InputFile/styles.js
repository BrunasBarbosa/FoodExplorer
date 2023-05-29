import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-family: var(--font-secondary);
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    font-size: 1.6rem;
    font-weight: 400;
  }

  label {
    height: 4.8rem;
    padding: 1.2rem 3.2rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    white-space: nowrap;
    
    display: flex;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
    cursor: pointer;
    border-radius: .8rem;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    display: none;
  }
`;