# sort-table-react 

> 🏓React components to create responsive sortable tables

See the [component storybook](https://volandoboyz.github.io/sorTable/storybook-static/
)

## Install

1.Install the component
  `yarn add sort-table-react ` 
  or 
  `npm install --save sort-table-react`

2. Import and use the component
```javascript

  import Table from 'sort-table-react'; 

 const DummyWrapper = props => (
  <Table
  // add some props here as follows....
  />
 .);
```

## Props

```javascript

<Table
  headers={headers}
  tableContent={tableContent}
  initialSort={'surname'}
/>
```

### Headers

Headers should be an array of objects where:
  * **message** is the headers label
  * **target** is the name of the table content field that it will sort by clicking that header. if you dont whant a specific header to not sort any column just set target to `null`

```javascript

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

```
### Content

The content prop is an array of objects that should have an id and any other number of key value pairs.
The key is the one that the `Header` `target` should match and sort.

```javascript

const tableContent = [
  { id: 1, name: 'Alex', surname: 'Cejudo', nickname: 'Grana', age: 21 },
  { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva', age: 1 },
  { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0', age: 26 },
  { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito', age: 210 },
];

```

* You can also specify a `Action` key with a component to do some actions
  I found it usefull to add delete, edit & overview actions...etc

```javascript

  const Actions = props => (
    <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
  );
  
  const tableContent = [
    { id: 1, name: 'Alex', surname: 'Cejudo', nickname: 'Grana', age: 21, Actions: <Actions id={1} /> },
    { id: 2, name: 'Alberto', surname: 'Villar', nickname: 'Vilva', age: 1, Actions: <Actions id={2} /> },
    { id: 3, name: 'Carlos', surname: 'Perez', nickname: 'Jimeno0', age: 26, Actions: <Actions id={3} /> },
    { id: 4, name: 'Alfonso', surname: 'Huescar', nickname: 'Sito', age: 210, Actions: <Actions id={4} /> },
  ];
```
### initialSort 

Just a string to specify what field should be the sort target field on the component first rendering
```javascript

  initialSort={'surname'}
  
```


