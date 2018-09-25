import React from 'react';
import { Table } from 'antd';

// lazy way of loading data until I build out a backend
import data from '../data/pepperData';

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
    },
    {
      title: 'Heat Level',
      dataIndex: 'scovilleUnits',
      key: 'scovilleUnits',
    },
  ];

  render() {
    return <Table dataSource={data.dataSource} columns={this.columns} />;
  }
}
export default GlossaryTable;
