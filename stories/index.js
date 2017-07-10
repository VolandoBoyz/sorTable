import React from 'react';
import { storiesOf } from '@kadira/storybook';// eslint-disable-line
import Table from '../build/sorTable';


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
  },
];

const tableContent = [
  { id: 1, name: 'Alex', surname: 'Cejudo', nickname: 'Grana' },
  { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva' },
  { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0' },
  { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito' },
];


storiesOf('Table', module)
  .add('Empty', () => (
    <Table headers={headers} tableContent={tableContent} />
  ));
