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
      target: this.props.initialSort,
    };
  }
  componentDidMount() {
    this.handleSort(this.state.target, true);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ content: nextProps.tableContent });
    this.handleSort(this.state.target, this.state.reversed);
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
    } else if (typeof (this.state.content[0][target]) === 'object') {
      return this.state.reversed ?
        this.state.content.sort((a, b) => (a[target].value > b[target].value ? 1 : -1)) :
        this.state.content.sort((a, b) => (a[target].value < b[target].value ? 1 : -1));
    }
    return this.state.reversed ?
          this.state.content.sort((a, b) => (a[target] > b[target] ? 1 : -1)) :
          this.state.content.sort((a, b) => (a[target] < b[target] ? 1 : -1));
  }

  handleSort(target, reversed) {
    const reversedIfSameHeader = target !== this.state.target ? true : reversed;
    this.setState({ reversed: reversedIfSameHeader, target }, () => {
      const sortedArray = this.getArraySorted(target);
      this.setState({ content: sortedArray });
    });
  }

  renderContent() {
    const { id, Actions, ...rest } = this.state.content[0];
    const fields = Object.keys(rest);
    return this.state.content.map(row => (
      <Row
        onClick={() => this.props.handleRowClick(row.id)}
        key={row.id}
        content={row}
        fields={fields}
      >
        {row.Actions}
      </Row>));
  }
  render() {
    return (
      <table className={`table-sortable ${this.props.className}`}>
        <Header
          target={this.state.target}
          reversed={this.state.reversed}
          headers={this.props.headers}
          handleSort={target => this.handleSort(target, !this.state.reversed)}
        />
        <tbody>
          {this.renderContent()}
        </tbody>
      </table>
    );
  }
}


Table.propTypes = {
  initialSort: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  tableContent: PropTypes.array.isRequired,
  handleRowClick: PropTypes.func,
};

const TableStyled = styled(Table)`
  &&.table-sortable{
    width: 100%;
    border-spacing: 0;
    font-family: "Raleway", "微软雅黑", "STXihei";
    thead{
    }
    th{
      text-transform: uppercase;
      text-align: start;
      border-bottom: 1px solid rgba(34,36,38,.15);
    }
    tbody tr:nth-child(even) {
      background-color: #F6F6FB;
    }
    tbody tr:hover {
    background-color: #EAEAF2;
    }
    td, th {
      font-weight: 400;
      font-size: 13px;
      padding: 4px 4px;
      max-width: 160px;
    }
    td{
      height: 56px;
      &.number{
        font-family: "Roboto","sans-serif";
      }
      &.right{
        text-align: end;
        padding-right: 24px;
      }
      &.networks{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 24px;
      }
      &.center{
        Padding-right: 24px;
        Text-align: center;
      }
      div.number, div.number span { 
        font-family: "Roboto","sans-serif";
      }
      &.avatar{
        img{
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
      }
    }
    th {
      &.right{
        text-align: end;
      }
      &.center{
        text-align: center;
      }
    }
    .action-buttons{
        text-align: end;
    }
  }
`;
export default TableStyled;
