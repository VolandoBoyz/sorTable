import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowUp, ArrowDown } from './Icons';

const Header = (props) => {
  const headers = props.headers.map((header, i) => (
    <th
      className={`${header.className} ${props.target === header.target ? 'active-header' : 'hidden-header'}`}

      onClick={() => header.target && props.handleSort(header.target)}
      key={`${header.message}${i}`}
    >
      {header.message}
      <div className='arrow-container'>
        {props.reversed ? <ArrowDown /> : <ArrowUp />}
      </div>
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
    message: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.null,
    ]).isRequired,
    target: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.null,
    ]).isRequired,
  })).isRequired,
};

const HeaderStyled = styled(Header)`
  &&.sortable-header {
    cursor: pointer;
    .arrow-container{
      padding: 0 4px;
      display: inline-block;
      visibility: hidden;
    }
    .active-header {
      color: #EE0D61;
      .arrow-container{
        display: inline-block;
        visibility: visible;
      }
    }
    .hidden-header{
      .header-icon{
        border: transparent;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 5px;
        margin-left: 2px;
      }
    }
  }
`;
export default HeaderStyled;
