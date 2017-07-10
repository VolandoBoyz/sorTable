import React from 'react';
import { storiesOf } from '@kadira/storybook';// eslint-disable-line
// import Table from '../build/sorTable';
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
  },

];

const tableContent = [
  { id: 1, name: 'Alex', surname: 'Cejudo', nickname: 'Grana', age: 21 },
  { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva', age: 1 },
  { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0', age: 26 },
  { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito', age: 210 },
];


storiesOf('Table', module)
  .add('Empty', () => (
    <Table headers={headers} tableContent={tableContent} />
  ));
