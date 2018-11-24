import React from 'react';
import Login from './login';
import Password from './password';
import '../styles/auth.scss';

const questions = [
  "What's Jovan favourite food",
  'How many times was Jovan expelled from kindergarten',
  'How many times have he been in jail'
];

export default class Auth extends React.Component {
  state = {
    username: '',
    password: '',
    step: 0,
    component: Login
  };

  handleSubmit = data => {
    if (this.state.step === 0) {
      this.setState({
        username: data,
        component: Password,
        step: this.state.step + 1
      });
    } else if (this.state.step <= questions.length) {
      this.setState(
        {
          password: this.state.password + data,
          step: this.state.step + 1
        },
        () => {
          if (this.state.step > questions.length) {
            this.validate(this.state.username, this.state.password);
            this.props.history.push('/');
          }
        }
      );
    }
  };

  validate(username, password) {
    console.log('user validated with', username, password);
  }

  render() {
    const ComponentType = this.state.component;
    const props = {
      handleSubmit: this.handleSubmit,
      key: this.state.step
    };
    if (ComponentType === Password) {
      props.question = questions[this.state.step - 1];
    }
    return (
      <div className="auth">
        <ComponentType {...props} />
      </div>
    );
  }
}
