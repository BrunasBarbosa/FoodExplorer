import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0.1em;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  .gradient {
    position: absolute;
    width: 22.3rem;
    top: 5rem;
    bottom: 0;
  }

  .right {
    right: 0;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.2725) 0%,  #000A0F 100%);
  }

  .left {
    z-index: 1;
    width: 24rem;
    left: 0;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.2725) 0%,  #000A0F 100%);
  }

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

  .card {
    min-width: 21rem;
    min-height: 30rem;
  }

  @media (min-width: 1200px) {
    .card {
      flex-shrink: 0;
    }
  }
`;