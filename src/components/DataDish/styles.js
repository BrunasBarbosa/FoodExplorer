import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 1.6rem;

  img {
    width: clamp(32rem, 15rem + 30vw, 48rem);
  }

  .tags {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem; 
  }

  .counter {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      font-size: 2.2rem;
      font-weight: 700;
    }

    button {
      border-radius: .3rem;
      line-height: 1.6rem;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 4.8rem;

    text-align: left;

    div {
      h1 {
        line-height: 5.6rem;
      }
    }

    .tags {
      justify-content: left;
      margin-bottom: 2.4rem;
    }

    .counter {
      width: 30rem;
      gap: 3.3rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 4.8rem;

  h1 {
    font-weight: 500;
    font-size: clamp(2.7rem, .8rem + 5vw, 4.2rem);
    line-height: 3.7rem;
  }

  p {
    font-size: clamp(1.6rem, .8rem + 2vw, 2.6rem);
    font-weight: 400;
    line-height: clamp(2.2rem, .8rem + 2vw, 3.6rem);
  }

  > svg {
    width: 1.8rem;
    height: 1.4rem;
  }
`;
