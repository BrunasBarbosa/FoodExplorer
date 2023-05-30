import ChevronDownImg from '../../assets/icons/ChevronDown.svg';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;

  * {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  label {
    font-size: 1.6rem;
  }

  select {
    appearance: none;
    min-height: 4.8rem;
    padding: 1.6rem;
    border: none;
    border-radius: .5rem;
    background: url(${ChevronDownImg}) no-repeat center right;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  option,
  select {
    font-size: 1.4rem;
  }
`;
