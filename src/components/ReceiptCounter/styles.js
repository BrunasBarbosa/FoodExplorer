import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  
  @media (min-width: 900px) {
    padding: 1.6rem 4.6rem;
    display: flex;
    gap: .8rem;

    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.RED_400};
    
    > div {
      width: 8.3rem;
      position: sticky;
      display: flex;
      background-color: transparent;
      gap: 0;
      
      span {
        display: flex;
        font-size: 1.4rem;
      }
    }

  }
`;

export const Counter = styled.div`
  align-items: center;
  text-align: center;
  height: 90%;
  width: 75%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.RED_400};
  
  position: absolute;
  right: -.8rem;
  top: -.8rem;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2.4rem;

  span {
    display: none;
  }
`;