# sorTable 

> 🏓React components to create responsive sortable tables

See the [component storybook](https://volandoboyz.github.io/sorTable/storybook-static/
)

## Steps to use it

1.Install the component
  `yarn add sorTable` 
  or 
  `npm install --save sorTable`

2.Use it 
  ```javascript

  import Table from 'sorTable 

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


const tableContent = [
  { id: 1, name: 'Alex', surname: 'Cejudo', nickname: 'Grana', age: 21, Actions: <Actions id={1} /> },
  { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva', age: 1, Actions: <Actions id={2} /> },
  { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0', age: 26, Actions: <Actions id={3} /> },
  { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito', age: 210, Actions: <Actions id={4} /> },
];

const Actions = props => (
  <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
);

<Table headers={headers} tableContent={tableContent} />
```
* You can pass an Actions props of the table content to render a react component.
  I found it usefull for delete it, go to a landing page... etc
