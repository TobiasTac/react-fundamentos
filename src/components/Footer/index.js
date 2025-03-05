import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { Container } from './styles';

export default function Footer() {

  const { handleToggleTheme, theme } = useContext(ThemeContext);

  const history = useHistory();

  function handleNavigate() {
    console.log(history);
    history.push('/posts')
  }

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigate} style={{ color: '#fff' }} > Navegar </button>
    </Container>
  );
}