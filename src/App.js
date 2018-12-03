// @flow
import React, { Component } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styledComponents/globalStyles';
import UserContext from './contexts/userContext';
import Auth from './components/auth';
import NewPost from './components/newPost';
import NavBar from './components/navBar';
import Demo from './components/demo';
import GroupChooser from './components/groupChooser';
import Landing from './components/landing';
import Feed from './components/feed';
import { lightTheme, darkTheme } from './themes/themes';
import type { AppState } from './flow/types';

class App extends Component<null, AppState> {
  state = {
    theme: true,
    user: {}
  };

  componentDidMount() {
    const lsUser = localStorage.getItem('user') || '';
    this.setState({
      user: JSON.parse(lsUser) || {
        id: '',
        name: 'Guest',
        profilePicture: '',
        activeGroup: '',
        groups: []
      }
    });
  }

  toggleTheme = () => {
    this.setState({ theme: !this.state.theme });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          updateUser: user =>
            this.setState({ user: { ...this.state.user, ...user } }, () =>
              localStorage.setItem('user', JSON.stringify(this.state.user))
            )
        }}
      >
        <ThemeProvider theme={this.state.theme ? lightTheme : darkTheme}>
          <React.Fragment>
            <GlobalStyle />
            <NavBar
              theme={this.state.theme ? 'light' : 'dark'}
              toggleTheme={this.toggleTheme}
            />
            <Router>
              <Landing path="/" />
              <Feed path="/feed" />
              <Auth path="/login" />
              <GroupChooser path="/group-chooser" />
              <Demo path="/demo" />
              <NewPost path="/new-post" />
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </UserContext.Provider>
    );
  }
}

export default App;
