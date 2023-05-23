import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;

  color: ${({ theme }) => theme.COLORS.GRAY_400};

  label {
    font-size: 1.6rem;
  }
  
  > input {
    width: 100%;
    padding: 1.6rem 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border: none;
    border-radius: .8rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;