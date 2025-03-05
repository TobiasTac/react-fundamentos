import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { Container } from './styles';

class Header extends Component {
  static contextType = ThemeContext;

  handleNavigate = () => {
    this.props.history.push('/posts');
  }

  render() {
    const { handleToggleTheme, theme } = this.context;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button
          type="button"
          onClick={handleToggleTheme}
        >
          {theme === 'dark' ? '🌞' : '🌚'}
        </button>
        <button onClick={this.handleNavigate} style={{ color: theme === 'dark' ? '#fff' : '#000' }} > Navegar </button>
      </Container>
    );
  }
}

export default withRouter(Header);

// export default function Header() {

//   const { onToggleTheme, theme } = useContext(ThemeContext);

//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button 
//         type="button" 
//         onClick={onToggleTheme} 
//       >
//         {theme === 'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }