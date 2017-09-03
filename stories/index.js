import React from 'react';
import { storiesOf } from '@kadira/storybook';// eslint-disable-line
import { withInfo } from '@storybook/addon-info';// eslint-disable-line
// import Table from '../build/sort-table-react';
import Table from '../src/components/Table';


storiesOf('Table', module)
  .add('Full Example',
      withInfo(
  `

    Mixing all the following props
    `)(
      () => {
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Favourite Icons',
            target: 'icons',
            className: 'center',
          }, {
            message: 'Name',
            target: 'name',
          }, {
            message: 'age',
            target: 'age',
            className: 'right',
          }, {
            message: 'Networks',
            target: 'networks',
          }, {
            message: '',
            target: null,
          },

        ];

        const Actions = props => (
          <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
        );
        const tableContent = [
          {
            id: 1,
            socialUsername: 'jimeno0',
            icons: {
              value: [<span>🏯</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
            },
            name: {
              value: 'carlos',
              label: <h3>Carlos ✈</h3>,
            },
            age: {
              value: 28,
              label: 28,
              className: 'number right',
            },
            networks: ['twitter', 'instagram'],
            Actions: <Actions id={1} />,
          },
          {
            id: 2,
            socialUsername: 'vilva',
            icons: {
              value: [<span>🚀</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
            },
            name: {
              value: 'vilva',
              label: <h1>Alberto</h1>,
            },
            age: {
              value: 25,
              label: 25,
              className: 'number right',
            },
            networks: ['twitter'],
            Actions: <Actions id={2} />,
          },
          {
            id: 3,
            socialUsername: 'castillosa_',
            icons: {
              value: [<span>💸</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
            },
            name: {
              value: 'Paco',
              label: <pre>Paco</pre>,
            },
            age: {
              value: 28,
              label: 28,
              className: 'number right',
            },
            networks: ['twitter', 'instagram'],
            Actions: <Actions id={3} />,
          },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Basic usage',
      withInfo(
  `
      Pass a _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      Pass a _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * any other pair of key value:(I.E: name:"Charlie") where the key is the field name to sort and the value the result that will appear in the table

      _initialSort_: Is an optional prop that set the content field that will set the initial sort

      ~~~js
      const headers = [
        {
          message: 'Username',
          target: 'socialUsername',
        }, {
          message: 'Name',
          target: 'name',
        }, {
          message: '',
          target: null,
        },
      ];
      
      const tableContent = [
        { id: 1, socialUsername: 'jimeno0', name: 'Carlos' },
        { id: 2, socialUsername: 'vilva_', name: 'Alberto'},
        { id: 3, socialUsername: 'castillosa', name: 'Paco'},
      ];

      ~~~
    `)(
      () => {
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          },
        ];

        const tableContent = [
          { id: 1, socialUsername: 'jimeno0', name: 'Carlos' },
          { id: 2, socialUsername: 'vilva_', name: 'Alberto' },
          { id: 3, socialUsername: 'castillosa', name: 'Paco' },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Styling headers',
      withInfo(
  `
      Pass a _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*
      * className: quick align: _left_ by default you can pass a tring as _right_,_center_
        to autoalign or pass any className to style by yourself
      Pass a _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * any other pair of key value:(I.E: name:"Charlie") where the key is the field name to sort and the value the result that will appear in the table

      _initialSort_: Is an optional prop that set the content field that will set the initial sort

      ~~~js
      const headers = [
        {
          message: 'Username',
          target: 'socialUsername',
          className: 'center',
        }, {
          message: 'Name',
          target: 'name',
          className: 'right',
        }, {
          message: '',
          target: null,
        },
      ];
      
      const tableContent = [
        { id: 1, socialUsername: 'jimeno0', name: 'Carlos' },
        { id: 2, socialUsername: 'vilva_', name: 'Alberto'},
        { id: 3, socialUsername: 'castillosa', name: 'Paco'},
      ];

      ~~~
    `)(
      () => {
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
            className: 'center',
          }, {
            message: 'Name',
            target: 'name',
            className: 'right',
          },
        ];

        const tableContent = [
          { id: 1, socialUsername: 'jimeno0', name: 'Carlos' },
          { id: 2, socialUsername: 'vilva_', name: 'Alberto' },
          { id: 3, socialUsername: 'castillosa', name: 'Paco' },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Styling numbers',
      withInfo(
  `
      Pass a _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * Key-value pair can be an object like:   
      
      ~~~js
      age: {
        value: 2342,
        label: 2342,
        className: 'number center'
      },
      ~~~
      that way can pass:
      _label_ propertie to render a component, jsx or whatever
      _value_ for sorting porpouses
      _className_ for custom column styles (align and number have basic styles)
      ~~~js
        

        const tableContent = [
          { id: 1,
            name: 'Carlos',
            age: {
              value: 234,
              label: 234,
              className: 'number',
            },
          },
          { id: 2,
            name: 'Alberto',
            age: {
              value: 2345,
              label: 2345,
              className: 'number center',
            },
          },
          { id: 3,
            name: 'Paco',
            age: {
              value: 23,
              label: 23,
              className: 'number',
            },
          },
        ];

      ~~~
    `)(
      () => {
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          },
        ];

        const tableContent = [
          { id: 1,
            name: 'Carlos',
            age: {
              value: 234,
              label: 234,
              className: 'number',
            },
          },
          { id: 2,
            name: 'Alberto',
            age: {
              value: 2345,
              label: 2345,
              className: 'number center',
            },
          },
          { id: 3,
            name: 'Paco',
            age: {
              value: 23,
              label: 23,
              className: 'number',
            },
          },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Whit actions',
      withInfo(
  `
      Pass a _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      Pass a _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * any other pair of key value:(I.E: name:"Charlie") where the key is the field name to sort and the value the result that will appear in the table
      * _Actions_: at the end whit some component, buy you can pass an a component on other prop

      _initialSort_: Is an optional prop that set the content field that will set the initial sort

      ~~~js
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          }, {
            message: '',
            target: null,
          },
        ];
      
        const tableContent = [
          { id: 1, socialUsername: 'jimeno0', name: 'Carlos', Actions: <Actions id='1' /> },
          { id: 2, socialUsername: 'vilva_', name: 'Alberto', Actions: <Actions id='2' /> },
          { id: 3, socialUsername: 'castillosa', name: 'Paco', Actions: <Actions id='3' /> },
        ];

      ~~~
    `)(
      () => {
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          }, {
            message: '',
            target: null,
          },
        ];

        const Actions = props => (
          <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
        );
        const tableContent = [
          { id: 1, socialUsername: 'jimeno0', name: 'Carlos', Actions: <Actions id='1' /> },
          { id: 2, socialUsername: 'vilva_', name: 'Alberto', Actions: <Actions id='2' /> },
          { id: 3, socialUsername: 'castillosa', name: 'Paco', Actions: <Actions id='3' /> },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Whit row click',
      withInfo(
  `
      _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * any other pair of key value:(I.E: name:"Charlie") where the key is the field name to sort and the value the result that will appear in the table
      * _Actions_: at the end whit some component, buy you can pass an a component on other prop

      _initialSort_: Is an optional prop that set the content field that will set the initial sort
    
     _handleRowClick_: a function that receives the row id as a parameter, usefull to find clicked, go to a route related... etc 
      

      ~~~js
        
        const handleRowClick = (id) => alert("you clicked " + id + " row")
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          }, {
            message: '',
            target: null,
          },
        ];
      
        const tableContent = [
          { id: 1, socialUsername: 'jimeno0', name: 'Carlos', Actions: <Actions id='1' /> },
          { id: 2, socialUsername: 'vilva_', name: 'Alberto', Actions: <Actions id='2' /> },
          { id: 3, socialUsername: 'castillosa', name: 'Paco', Actions: <Actions id='3' /> },
        ];

      ~~~
    `)(
      () => {
        const handleRowClick = (id) => {
          const clicked = tableContent.find(row => row.id === id);
          return alert(`you clicked ${clicked.name} row`);
        };

        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          }, {
            message: '',
            target: null,
          },
        ];

        const Actions = props => (
          <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
        );
        const tableContent = [
          { id: 1, socialUsername: 'jimeno0', name: 'Carlos', Actions: <Actions id='1' /> },
          { id: 2, socialUsername: 'vilva_', name: 'Alberto', Actions: <Actions id='2' /> },
          { id: 3, socialUsername: 'castillosa', name: 'Paco', Actions: <Actions id='3' /> },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
              handleRowClick={handleRowClick}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('With complex data (value,label and className)',
      withInfo(
  `
      _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * Key-value pair can be an object like:   
      
      ~~~js
      socialUsername: {
        value: "jimeno0",
        label: <span>"🔥jimeno0"</span>
        className: 'number center'
      },
      ~~~
      that way can pass:
      _label_ propertie to render a component, jsx or whatever
      _value_ for sorting porpouses
      _className_ for custom column styles
      ~~~js
        
        const handleRowClick = (id) => alert("you clicked " + id + " row")
        const headers = [
          {
            message: 'Username',
            target: 'socialUsername',
          }, {
            message: 'Name',
            target: 'name',
          }
        ];
      
        const tableContent = [
          { id: 1,
            name: 'Carlos',
            socialUsername: {
              value: 'jimeno0',
              label: <h3>jimeno0 🔥</h3>,
              className: 'dummy-class',
            },
          },
          { id: 2,
            name: 'Alberto',
            socialUsername: {
              value: 'vilva_',
              label: <h1>vilva🚀 </h1>,
              className: 'dummy-class',
            },
          },
          { id: 3,
            name: 'Paco',
            socialUsername: {
              value: 'Castillosa',
              label: <pre>castillosa🏯 </pre>,
              className: 'dummy-class',
            },
          },
        ];

      ~~~
    `)(
      () => {
        const handleRowClick = (id) => {
          const clicked = tableContent.find(row => row.id === id);
          return alert(`you clicked ${clicked.name} row`);
        };

        const headers = [
          {
            message: 'Name',
            target: 'name',
          }, {
            message: 'Username',
            target: 'socialUsername',
          }];

        const Actions = props => (
          <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
        );
        const tableContent = [
          { id: 1,
            name: 'Carlos',
            socialUsername: {
              value: 'jimeno0',
              label: <h3>jimeno0 🔥</h3>,
              className: 'dummy-class',
            },
          },
          { id: 2,
            name: 'Alberto',
            socialUsername: {
              value: 'vilva_',
              label: <h1>vilva🚀 </h1>,
              className: 'dummy-class',
            },
          },
          { id: 3,
            name: 'Paco',
            socialUsername: {
              value: 'Castillosa',
              label: <pre>castillosa🏯 </pre>,
              className: 'dummy-class',
            },
          },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
              handleRowClick={handleRowClick}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Using arrays',
      withInfo(
  `
      _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * Key-value pair where value is an array :
      * for custom arrays use the _whit complex data_ way

    `)(
      () => {
        const handleRowClick = (id) => {
          const clicked = tableContent.find(row => row.id === id);
          return alert(`you clicked ${clicked.name} row`);
        };

        const headers = [
          {
            message: 'Name',
            target: 'name',
          }, {
            message: 'Username',
            target: 'socialUsername',
          }];

        const Actions = props => (
          <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
        );
        const tableContent = [
          { id: 1,
            name: 'Carlos',
            socialUsername: ['jimeno0', 'jimeno0_'],
          },
          { id: 2,
            name: 'Alberto',
            socialUsername: ['vilva', 'vilva_'],
          },
          { id: 3,
            name: 'Paco',
            socialUsername: ['castillosa', 'castillosa_'],
          },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
              handleRowClick={handleRowClick}
            />
          </div>
        );
      }));

storiesOf('Table', module)
  .add('Using icons Arrays',
      withInfo(
  `
      I.E: Usefull when render social network icons

      _headers_ prop that is an Array of objects where:
      * message: the header content
      * target: the field that it should short if dont want to sort any field pass *null*

      _tableContent_ prop that is an Array of objects where:
      * id: needs an id to be able to map throught the component, manage sort...
      * Key-value pair where:
       ~~~js
      networks: {
              value: [<span>🏯</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
      },
      ~~~
      that way can pass:
      _label_ propertie to render a component, jsx or whatever
      _value_ for sorting porpouses
      _className_ for custom column styles


    `)(
      () => {
        const handleRowClick = (id) => {
          const clicked = tableContent.find(row => row.id === id);
          return alert(`you clicked ${clicked.name} row`);
        };

        const headers = [
          {
            message: 'Name',
            target: 'name',
          }, {
            message: 'Networks',
            target: 'networks',
          }];

        const Actions = props => (
          <button onClick={() => console.log({ id: props.id })} >Print {props.id}</button>
        );
        const tableContent = [
          { id: 1,
            name: 'Carlos',
            networks: {
              value: [<span>🏯</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
            },
          },
          { id: 2,
            name: 'Alberto',
            networks: {
              value: [<span>🏯</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
            },
          },
          { id: 3,
            name: 'Paco',
            networks: {
              value: [<span>🏯</span>, <span>🔥</span>],
              type: 'networks',
              className: 'networks',
            },

          },
        ];
        return (
          <div>
            <Table
              initialSort={'socialUsername'}
              headers={headers}
              tableContent={tableContent}
              handleRowClick={handleRowClick}
            />
          </div>
        );
      }));

