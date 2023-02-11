import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm';
// import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  contactInputId = nanoid();

  handleSubmit = (evt, id) => {
    evt.preventDefault();
    const { name } = this.state;
    console.log(name, id);
    this.setState(state => ({
      contacts: state.contacts.concat({ name: name }),
    }));
  };

  handleChange = evt => {
    const { id } = evt.target;
    this.setState({ name: evt.target.value });

    return id;
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.contactInputId}>
            Name
            <input
              type="text"
              name="name"
              id={this.contactInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
        {/* <ContactForm />
        <ContactList /> */}
      </div>
    );
  }
}
