# sort-table-react 

> 🏓React components to create responsive sortable tables

See the [component storybook](https://volandoboyz.github.io/sorTable/storybook-static/
)

## Steps to use it

1.Install the component
  `yarn add sort-table-react ` 
  or 
  `npm install --save sort-table-react`

2.Use it 
  ```javascript

  import Table from 'sort-table-react'; 

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
    message: '',
    target: null,
  },
];

const Actions = props => (
  <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
);

const tableContent = [
  { id: 1, name: 'Alex', surname: 'Cejudo', nickname: 'Grana', age: 21, Actions: <Actions id={1} /> },
  { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva', age: 1, Actions: <Actions id={2} /> },
  { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0', age: 26, Actions: <Actions id={3} /> },
  { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito', age: 210, Actions: <Actions id={4} /> },
];


<Table headers={headers} tableContent={tableContent} />
```
* You can pass an Actions props of the table content to render a react component.
  I found it usefull for delete it, go to a landing page... etc
