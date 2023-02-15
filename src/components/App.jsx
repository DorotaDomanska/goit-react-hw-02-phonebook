import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
// import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = this.state;
    const id = nanoid();
    this.setState(state => ({
      contacts: state.contacts.concat({ name, id }),
    }));
  };

  handleChange = evt => {
    this.setState({ name: evt.target.value });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button className={css.button} type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        {/* <ContactForm />
        <ContactList /> */}
      </div>
    );
  }
}
