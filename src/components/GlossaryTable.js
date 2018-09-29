import React from 'react';
import { Table } from 'antd';

// lazy way of loading data until I build out a backend
import data from '../data/pepperData';
import ScovilleScale from './ScovilleScale';

class GlossaryTable extends React.Component {
  componentDidMount() {}

  columns = [
    {
      title: 'Pepper Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Scientific Name',
      dataIndex: 'scientificName',
      key: 'scientificName',
      render: scientificName => <i>{scientificName}</i>,
    },

    {
      title: 'Heat Level',
      dataIndex: 'scovilleUnits',
      key: 'scovilleUnits',
      render: scovilleUnits => (
        <ScovilleScale
          minScovilleUnits={scovilleUnits[0]}
          maxScovilleUnits={scovilleUnits[1]}
        />
      ),
    },
  ];

  render() {
    return <Table dataSource={data.dataSource} columns={this.columns} />;
  }
}
export default GlossaryTable;
