import React from 'react';
import PropTypes from 'prop-types';
import { FindContainer, FindInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FindContainer>
      Find contacts by name
      <FindInput type="text" value={value} onChange={onChange} />
    </FindContainer>
  );
};

export default Filter;
