import React, { createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {

  constructor(props) {
    super(props);

    let theme = 'dark';
    try {
      if (localStorage.getItem('theme')) {
        theme = JSON.parse(localStorage.getItem('theme'));
      }
    } catch (err) {
      console.log("Erro ao acessar localStorage:", err);
    }

    this.state = {
      theme,
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState
      (prevState => ({
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
} 