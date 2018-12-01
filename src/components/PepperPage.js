import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PepperTable from "./PepperTable";

const PepperPage = () => (
  <Fragment>
    <br />
    <div className="Aligner">
      <div className="Aligner-item">
        <h1 className="font-actionj">Peppers</h1>
      </div>
      <br />
    </div>

    <div className="Aligner">
      <div
        className="Aligner-item"
        style={{
          backgroundColor: "#F0F0F0",
          width: "400vw",
          minWidth: "650px",
          borderRadius: "25px",
          padding: "8px"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "8px"
          }}
        >
          <Router>
            <div>
              <Route path="/Peppers" component={PepperTable} />
            </div>
          </Router>
        </div>
      </div>
    </div>
    <br />
  </Fragment>
);

export default PepperPage;
