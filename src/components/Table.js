import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Row from './Row';

class Table extends Component {
  render() {
    const { id, ...rest } = this.props.tableContent[0];
    const fields = Object.keys(rest);
    const rowIterator = this.props.tableContent.map(row => <Row key={row.id} content={row} fields={fields} />);
    return (
      <table className={`table-sortable ${this.props.className}`}>
        <Header headers={this.props.headers} />
        <tbody>
          {rowIterator}
        </tbody>
      </table>
    );
  }
}


Table.propTypes = {
  headers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  tableContent: PropTypes.array.isRequired,
};

const TableStyled = styled(Table)`
  &&.table-sortable{
    width: 100%;
  }
`;

export default TableStyled;
