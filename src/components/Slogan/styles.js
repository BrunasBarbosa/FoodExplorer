import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: clamp(12rem, 1rem + 30vw, 40rem);
  display: flex;
  position: relative;
  padding: 0 1.6rem 0 3.2rem;
  margin-bottom: 6.2rem;

  img {
    object-fit: cover;
    object-position: 0 0;
    width: clamp(19.1rem, 2rem + 40vw, 40rem);
    height: 100%;
    position: absolute;
    bottom: 0;
    left: .2rem;
    z-index: 1;
    filter: opacity(.8);
  }

  > div {
    width: 100%;
    height: 82%;
    padding-right: clamp(1rem, 1rem + 3vw, 30rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: end;
    align-items: end;
    border-radius: .2rem;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  }

  h2 {
    white-space: nowrap;
    font-size: clamp(.8rem, .8rem + 2.5vw, 4rem);
    font-weight: 600;
    margin-top: .6rem;
  }

  p {
    font-size: clamp(1.2rem, .1rem + 2.6vw, 1.6rem);
  }

  h2,
  p {
    width: clamp(20rem, 6rem + 30vw, 60rem);
  }

  @media (min-width: 900px) {
    padding-top: 7.6rem;
    padding-inline: clamp(6rem, 1rem + 8vw, 12.4rem);
    
    h2 {
      font-weight: 500;
    }

    > div {
      border-radius: .8rem;
      justify-content: center;
    }

    img {
      width: clamp(20rem, 4rem + 45vw, 63.2rem);
      margin-left: 5.4rem;
    }

    p {
      font-family: var(--font-secondary);
    }
  }
`;