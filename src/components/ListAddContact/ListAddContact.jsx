import React from 'react';

const ContactsSection = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsSection;
