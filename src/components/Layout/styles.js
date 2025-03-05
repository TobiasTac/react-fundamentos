import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
  
  a {
    color: #fff;
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