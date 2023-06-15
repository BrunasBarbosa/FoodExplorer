import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
  user-select: none;
  
  h3 {
    line-height: 2.5rem;
    font-size: clamp(1.8rem, .5rem + 2vw, 3.2rem);
    font-weight: 500;
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    gap: 1.6rem;
  }

  .cards {
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: .5rem;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: .8rem;
      background: ${({ theme }) => theme.COLORS.DARK_900};
    }
  
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.DARK_700};
    }
  }

  .gradient {
    display: none;
  }

  .card {
    min-width: 21rem;
    min-height: 30rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1200px) {
    .cards {
      &::-webkit-scrollbar {
        width: .1rem;
      }
  
      &::-webkit-scrollbar-thumb {
        background: transparent;
      }
  
      &::-webkit-scrollbar-track {
        background: transparent;
      }
    }

    .card {
      flex-shrink: 0;
    }

    .gradient {
      display: flex;
      position: absolute;
      align-items: center;
      top: 5rem;
      bottom: 0;
    }
    
    .right {
      width: clamp(3rem, 5rem + 10vw, 22.3rem);
      padding-right: 3rem;
      justify-content: right;
      right: 0;
      background: linear-gradient(90deg, rgba(0, 10, 15, 0.2725) 0%,  #000A0F 100%);
    }

    .left {
      z-index: 1;
      width: clamp(5rem, 5rem + 14vw, 27rem);
      left: 0;
      background: linear-gradient(270deg, rgba(0, 10, 15, 0.2725) 0%,  #000A0F 100%);
    }
  }
`;