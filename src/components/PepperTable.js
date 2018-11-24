import React, { Fragment } from "react";
import { Button, Divider, Modal, Table } from "antd";

// lazy way of loading data until I build out a backend
import data from "../data/pepperData";
import ScovilleScale from "./ScovilleScale";
import { PepperProfile } from "./PepperProfile";

let selectedPepperRows = [];

// function compare() {
//   console.log(selectedPepperRows);
// }

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     selectedPepperRows = selectedRows;

//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   }
// };

class PepperTable extends React.Component {
  state = { visible: false };

  pepperRowClicked(pepper) {
    this.setState({
      visible: true,
      pepperSelectedForModal: pepper
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      pepperSelectedForModal: {}
    });
  };
  columns = [
    {
      title: "Pepper Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Scientific Name",
      dataIndex: "scientificName",
      key: "scientificName",
      render: scientificName => <i>{scientificName}</i>
    },

    {
      title: "Heat Level",
      dataIndex: "scovilleUnits",
      key: "scovilleUnits",
      render: scovilleUnits => (
        <ScovilleScale
          minScovilleUnits={scovilleUnits[0]}
          maxScovilleUnits={scovilleUnits[1]}
        />
      )
    }
    // {
    //   // title: <Button onClick={compare}>Compare</Button>
    //   title: (
    //     <Button
    //       onClick={console.log(
    //         "This can be used to initiate a compare between multiple types of peppers"
    //       )}
    //     >
    //       Compare
    //     </Button>
    //   )
    // }
  ];

  render() {
    return (
      <Fragment>
        <Table
          dataSource={data.dataSource}
          columns={this.columns}
          onRow={(pepper, index) => ({
            index,
            onClick: () => this.pepperRowClicked(pepper)
          })}
          pagination={false}
          // rowSelection={rowSelection}
        />
        <Modal
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          visible={this.state.visible}
        >
          {this.state.pepperSelectedForModal && (
            <PepperProfile
              pepperSelectedForModal={this.state.pepperSelectedForModal}
            />
          )}
        </Modal>
      </Fragment>
    );
  }
}
export default PepperTable;
