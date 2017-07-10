import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Row from './Row';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.tableContent,
      reversed: true,
      target: '',
    };
  }
  getArraySorted(target) {
    if (typeof (this.state.content[0][target]) === 'string') {
      if (this.state.reversed) {
        return this.state.content.sort((a, b) => {
          const first = a[target] ? a[target].toLowerCase() : '';
          const next = b[target] ? b[target].toLowerCase() : '';
          return first > next ? 1 : -1;
        });
      }

      return this.state.content.sort((a, b) => {
        const first = a[target] ? a[target].toLowerCase() : '';
        const next = b[target] ? b[target].toLowerCase() : '';
        return first < next ? 1 : -1;
      });
    }
    return this.state.reversed ?
          this.state.content.sort((a, b) => (a[target] > b[target] ? 1 : -1)) :
          this.state.content.sort((a, b) => (a[target] < b[target] ? 1 : -1));
  }

  handleSort(target) {
    this.setState({ reversed: !this.state.reversed, target }, () => {
      const sortedArray = this.getArraySorted(target);
      this.setState({ content: sortedArray });
    });
  }

  renderContent() {
    const { id, ...rest } = this.state.content[0];
    const fields = Object.keys(rest);
    return this.state.content.map(row => <Row key={row.id} content={row} fields={fields} />);
  }
  render() {
    return (
      <table className={`table-sortable ${this.props.className}`}>
        <Header
          target={this.state.target}
          reversed={this.state.reversed}
          headers={this.props.headers}
          handleSort={target => this.handleSort(target)}
        />
        <tbody>
          {this.renderContent()}
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
