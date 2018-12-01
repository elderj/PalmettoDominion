import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Button, Modal, Table } from "antd";

// lazy way of loading data until I build out a backend
import data from "../data/pepperData";
import ScovilleScale from "./ScovilleScale";
import { PepperProfile } from "./PepperProfile";
import { PepperComparison } from "./PepperComparison";

// let selectedPepperRows = [];

class PepperTable extends React.Component {
  state = { visible: false };

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // selectedPepperRows = selectedRows;

      this.setState({ rowsToBeCompared: selectedRows });
    }
  };

  compare() {
    this.setState({
      pepperSelectedForModal: undefined,
      visible: true
    });
  }

  pepperRowClicked(pepper) {
    this.props.history.push("/Peppers");
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
      title: "Heat Range",
      dataIndex: "scovilleUnits",
      key: "scovilleUnits",
      render: scovilleUnits => (
        <p>{scovilleUnits[0] + " to " + scovilleUnits[1]}</p>
      )
    },
    {
      title: (
        <Link to={"/Peppers/Compare"}>
          <Button onClick={() => this.compare()}>Compare</Button>
        </Link>
      )
    }
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
          rowSelection={this.rowSelection}
          size="small"
        />
        <Modal
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          visible={this.state.visible}
        >
          {typeof this.state.pepperSelectedForModal !== "undefined" && (
            <PepperProfile
              pepperSelectedForModal={this.state.pepperSelectedForModal}
            />
          )}
          <Switch>
            <Route
              path="/Peppers/Compare"
              render={() => (
                <PepperComparison
                  selectedPepperRows={this.state.rowsToBeCompared}
                />
              )}
            />
          </Switch>
        </Modal>
      </Fragment>
    );
  }
}
export default withRouter(PepperTable);
