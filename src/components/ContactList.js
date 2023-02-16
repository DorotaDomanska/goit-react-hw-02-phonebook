import { Component } from 'react';
import { ContactListItem } from './ContactListItem';
import css from './Phonebook.module.css';

export class ContactList extends Component {
  render() {
    const { myFilteredContacts } = this.props;

    return (
      <ul className={css.list}>
        <ContactListItem myFilteredContacts={myFilteredContacts} />
      </ul>
    );
  }
}
