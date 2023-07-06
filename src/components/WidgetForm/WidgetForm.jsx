import React from 'react';
import s from '../TeacherForm/TeacherForm.module.css';
import { Button, Paper } from 'components';

class WidgetForm extends React.Component {
  state = {
    name: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event.target[0].value);
    this.setState({name: ""})
  }

  render() {
    const { title = '', label = '' } = this.props;
    return (
      <Paper className={s.paper}>
        <h3 className={s.title}>{title}</h3>
        <form className={s.form} onSubmit={this.handleOnSubmit}>
          <label className={s.label}>
            <input
              className={s.input}
              type="text"
              placeholder={label}
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
            />
          </label>
          <Button
            type="submit"
            disabled = {!this.state.name > 0}
            name={'Запросити'}
            className={s.submitBtn}            
          />
        </form>
      </Paper>
    );
  }
}

export default WidgetForm;
