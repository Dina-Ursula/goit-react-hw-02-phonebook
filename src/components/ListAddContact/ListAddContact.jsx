import React from 'react';
import PropTypes from 'prop-types';

const ContactsSection = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsSection.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
export default ContactsSection;
