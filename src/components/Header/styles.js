import styled from 'styled-components';
import commonStyles from '../../styles/themes/common';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${commonStyles.spacing.large}px;
  border-radius: ${commonStyles.borderRadius};
  justify-content: space-between;

  button {
    font-size: ${commonStyles.spacing.medium}px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;