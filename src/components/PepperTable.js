import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Button, Modal, Table } from "antd";

// lazy way of loading data until I build out a backend
import data from "../data/pepperData";

import { PepperProfile } from "./PepperProfile";
import { PepperComparison } from "./PepperComparison";
class PepperTable extends React.Component {
  state = { visible: false };

  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.setState({
        rowsToBeCompared: selectedRows,
      });
    },
  };

  compare() {
    this.setState({
      individualPepper: undefined,
      visible: true,
      width: 800,
    });
  }

  pepperRowClicked(pepper) {
    this.props.history.push("/Peppers");
    this.setState({
      visible: true,
      individualPepper: pepper,
      width: 400,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
      individualPepper: {},
    });
  };
  columns = [
    {
      title: "Pepper Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Scientific Name",
      dataIndex: "scientificName",
      key: "scientificName",
      render: (scientificName) => <i>{scientificName}</i>,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => <p>tags</p>,
    },
    {
      title: "Heat Range",
      dataIndex: "scovilleUnits",
      key: "scovilleUnits",
      render: (scovilleUnits) => (
        <p>{scovilleUnits[0] + " to " + scovilleUnits[1]}</p>
      ),
    },
    {
      title: (
        <Link to={"/Peppers/Compare"}>
          <Button onClick={() => this.compare()}>Compare</Button>
        </Link>
      ),
    },
  ];

  render() {
    return (
      <Fragment>
        <p>testing</p>
        <Table
          dataSource={data.pepperInfo}
          columns={this.columns}
          onRow={(pepper, index) => ({
            index,
            onClick: () => this.pepperRowClicked(pepper),
          })}
          pagination={false}
          rowSelection={this.rowSelection}
          size="small"
        />
        <Modal
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={this.state.width}
          visible={this.state.visible}
        >
          {typeof this.state.individualPepper !== "undefined" && (
            <PepperProfile individualPepper={this.state.individualPepper} />
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
