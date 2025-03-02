import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
          <StyledThemeProvider theme={themes[theme] || themes.dark}>
            <GlobalStyle />
            <Layout />
          </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }

};