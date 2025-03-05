import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.headerBackgroundColor};
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    display: inline-block;
    transition: 0.5s;

    & + a {
      margin-left: 16px;
    }
  }

  a:hover{
    color: #bff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

`;