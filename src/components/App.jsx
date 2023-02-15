import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
// import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    this.setState(state => ({
      contacts: state.contacts.concat({ name, number, id }),
    }));
  };

  handleChange = evt => {
    const { name } = evt.target;
    this.setState({ [name]: evt.target.value });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          padding: '0px 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name" className={css.label}>
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
          <label htmlFor="number" className={css.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul className={css.list}>
          {contacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
        {/* <ContactForm />
        <ContactList /> */}
      </div>
    );
  }
}
