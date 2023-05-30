import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .6rem 1.6rem;

  border-radius: .8rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : 'none' };
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.GRAY_600};
  
  > button {
    width: 1.6rem;
    height: 1.6rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > input {
    border: none;
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    
    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;