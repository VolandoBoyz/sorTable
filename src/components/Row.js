import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = (props) => {
  const { content, fields } = props;
  const cells = fields.map(field => ({ value: content[field] }));
  const renderCells = cells.map((element, i) => {
    if (Array.isArray(element.value)) {
      return (
        <td key={`${element.value}${i}`}>
          <ul className='list-in-table'>
            {element.value.map(item => <li key={item}>{item}</li>)}
          </ul>
        </td>

      );
    }
    return <td key={`${element.value}${i}`} >{element.value}</td>;
  });
  return (
    <tr className={props.className}>
      {renderCells}
      <td className='action-buttons'>
        {props.children}
      </td>
    </tr>
  );
};

const RowStyled = styled(Row)`
    ul{
    list-style-type: none;
    padding-left: 0;
    font-size: 11px;
  }
`;

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
};

export default RowStyled;
