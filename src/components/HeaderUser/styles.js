import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: space-between;

  padding: 5.6rem 2.8rem 2.4rem;
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  div {
    display: flex;
    gap: .8rem;
    justify-content: center;

    p {
      font-size: 2.1rem;
      line-height: 2.4rem;
    }
    
    img {
      height: 2.4rem;
    }
  }
`;