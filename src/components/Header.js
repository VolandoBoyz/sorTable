import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = (props) => {
  const headers = props.headers.map(header => (
    <th
      className={props.target === header.target ? 'active-header' : ''}

      onClick={() => props.handleSort(header.target)}
      key={header.message}
    >
      {header.message}
      <i
        className={props.reversed ? 'arrow-down' : 'arrow-up'}
      />
    </th>
  ));
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
    cursor: pointer;
    .active-header {
      color: #22BAD9;
      i{
        border: solid #22BAD9;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 5px;
        &.arrow-down{
          transform: rotate(45deg) translate(8px);
          -webkit-transform: rotate(45deg) translate(8px, -8px);
        }
        &.arrow-up{
           transform: rotate(-135deg) translate(-8px);
          -webkit-transform: rotate(-135deg) translate(-12px, 4px);
        }
      }
  }
  }
`;
export default HeaderStyled;
