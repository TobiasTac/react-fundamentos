import React, { useContext, Component } from 'react';
import { Container } from './styles';
import { ThemeContext }  from '../../ThemeContext'

export default class Header extends Component{

  static contextType = ThemeContext;
  
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
      </Container>
    );
  }
}

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