import React from 'react';
import { storiesOf } from '@kadira/storybook';// eslint-disable-line
// import Table from '../build/sort-table-react';
import Table from '../src/components/Table';


const headers = [
  {
    message: 'Name',
    target: 'name',
  }, {
    message: 'surname',
    target: 'surname',
  }, {
    message: 'nickname',
    target: 'nickname',
  }, {
    message: 'age',
    target: 'age',
  }, {
    message: 'tags',
    target: 'tags',
  }, {
    message: '',
    target: null,
  },
];


const Actions = props => (
  <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
);

const tableContent = [
  { id: 1, name: null, surname: null, nickname: 'Grana', age: 21, tags: ['bla', 'bla'], Actions: <Actions id={1} /> },
  { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva', age: 1, tags: ['bla', 'bla'], Actions: <Actions id={2} /> },
  { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0', age: 26, tags: ['bla', 'bla'], Actions: <Actions id={3} /> },
  { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito', age: 210, tags: ['bla', 'bla'], Actions: <Actions id={4} /> },
];


storiesOf('Table', module)
  .add('with headers and tableContent arrays', () => (
    <div>
      <Table headers={headers} tableContent={tableContent} />
    </div>
 ));
