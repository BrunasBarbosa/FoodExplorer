import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: .8rem;

  color: ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;
    background: transparent;
    border: none;
    border-radius: .8rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  > input:focus {
    outline: none;
  }

  > svg {
    margin-left: 1.6rem;
  }
`;