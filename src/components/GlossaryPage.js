import React, { Fragment } from "react";
import { Divider } from "antd";
import "../styles/aligner.css";
import "../styles/fonts.css";

const GlossaryPage = () => (
  <Fragment>
    <br />
    <div className="Aligner">
      <div className="Aligner-item">
        <h1 className="font-actionj">Glossary</h1>
      </div>
      <br />
    </div>

    <div className="Aligner">
      <div
        className="Aligner-item"
        style={{
          backgroundColor: "#F0F0F0",
          width: "400vw",
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
          <h2>Terminology:</h2>
          <Divider />
        </div>
      </div>
    </div>
    <br />
  </Fragment>
);

export default GlossaryPage;
