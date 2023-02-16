import { Component } from 'react';

export class ContactListItem extends Component {
  render() {
    const { myFilteredContacts } = this.props;

    return (
      <div>
        {myFilteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </div>
    );
  }
}
