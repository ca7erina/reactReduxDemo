import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newRow = function newRow() {
  return {
    firstname: Math.floor(Math.random() * 30),
    lastName: Math.floor(Math.random() * 30),
    age: Math.floor(Math.random() * 30),
    status: Math.floor(Math.random() * 100),
    lastUpdatedTime: Math.floor(Math.random() * 100),
    Location: 100,
  };
};

const makeData = (len = 40) => range(len).map(() => ({
  ...newRow(),
  children: range(30).map(newRow),
}));

const makeColumnName = () => [{
  Header: 'Name',
  columns: [{
    Header: 'First Name',
    accessor: 'firstname',
  },
  {
    Header: 'Last Name',
    id: 'lastName',
    accessor: d => d.lastName,
  },
  ],
},
{
  Header: 'Info',
  columns: [{
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  ],
},
{
  Header: '3',
  columns: [{
    Header: 'Visits',
    accessor: 'lastUpdatedTime',
  }],
},
];

class ReactTableDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      columns: makeColumnName(),
    };
  }
  render() {
    const {
      data,
      columns,
    } = this.state;
    return (
      <div >
        <ReactTable
          data={
            data
          }
          columns={
            columns
          }
          defaultPageSize={
            10
          }
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default ReactTableDemo;
