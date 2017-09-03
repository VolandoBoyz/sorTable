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
    } else if (typeof element.value === 'object') {
      if (element.value.type === 'networks') {
        return (
          <td
            key={`${element.value.value}${i}`}
            className={element.value.className}
          >
            {element.value.value.map((network, j) => (
              <div
                className='icon-div-container'
                key={`${j}`}
              >
                {network}
              </div>
        ))}
          </td>
        );
      }
      return (
        <td
          key={`${element.value.value}${i}`}
          className={element.value.className}
        >
          {element.value.label}
        </td>
      );
    }
    return <td key={`${element.value}${i}`} >{element.value}</td>;
  });
  return (
    <tr
      onClick={props.onClick}
      className={props.className}
    >
      {renderCells}
      <td className='action-buttons'>
        {props.children}
      </td>
    </tr>
  );
};

const RowStyled = styled(Row)`
  cursor: pointer;
    ul{
    list-style-type: none;
    padding-left: 0;
    font-size: 11px;
  }
  .icon-div-container{
    display: inline-block;
    margin: 0 8px;
  }
`;

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
};

export default RowStyled;
