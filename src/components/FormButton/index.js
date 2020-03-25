import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export default function FormButton({ title, onClick }) {
  return (
    <Button onClick={onClick} type="submit">
      {title}
    </Button>
  );
}

FormButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
