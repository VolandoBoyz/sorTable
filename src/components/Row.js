import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = (props) => {
  const { content, fields } = props;
  const cells = fields.map(field => ({ value: content[field] }));
  const renderCells = cells.map(element => <td key={element.value} >{element.value}</td>);
  return (
    <tr>
      {renderCells}
      <td>
        {props.children}
      </td>
    </tr>
  );
};

Row.propTypes = {
  fields: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
};

export default Row;
