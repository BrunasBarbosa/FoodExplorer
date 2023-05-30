import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  textarea {
    width: 100%;
    min-height: 17.2rem;
    padding: 1.4rem;
    
    border: none;
    resize: none;
    font-family: var(--font-secondary);
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: .8rem;
  }
`;