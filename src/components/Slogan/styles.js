import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 6rem;
  height: 16.4rem;
  display: flex;
  position: relative;

  img {
    margin-left: .6rem;
    z-index: 1;
    position: absolute;
    bottom: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-self: end;
    justify-content: center;
    align-items: end;

    margin: 3.8rem 1.6rem 0 3.6rem;
    width: 100%;
    height: 12rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  }

  h2 {
    margin-top: .6rem;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
  }

  h2,
  p {
    width: 20rem;
    margin-right: 2.1rem;
  }
`;