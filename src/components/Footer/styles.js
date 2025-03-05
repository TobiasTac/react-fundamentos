import styled from 'styled-components';
import commonStyles from '../../styles/themes/common';

export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${commonStyles.spacing.large}px;
  border-radius: ${commonStyles.borderRadius};
  justify-content: space-between;
  margin-top: ${commonStyles.spacing.large}px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;