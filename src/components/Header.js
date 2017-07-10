import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = (props) => {
  const headers = props.headers.map(header => <th key={header.message}>{header.message}</th>);
  return (
    <thead className={`sortable-header ${props.className}`}>
      <tr>
        {headers}
      </tr>
    </thead>
  );
};


Header.propTypes = {
  className: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  })).isRequired,
};

const HeaderStyled = styled(Header)`
  &&.sortable-header {
  }
`;
export default HeaderStyled;
