# sort-table-react 

> 🏓React components to create responsive sortable tables

See the [component storybook](https://volandoboyz.github.io/sorTable/storybook-static/) to know all about to use the component

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
  handleRowClick={handleRowClick}
/>
```


