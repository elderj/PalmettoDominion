import React, { Fragment } from "react";
import { Col } from "antd";
import { BarChart } from "react-easy-chart";

import "../styles/aligner.css";
import "../styles/fonts.css";

//For Reference
//
// 800,000 to 3,200,000 	Pepper X, Carolina Reaper, Dragon's Breath, Naga Morich[14]
// 350,000 to 800,000 	Red Savina pepper, Chocolate habanero
// 100,000 to 350,000 	Habanero, Scotch Bonnet
// 10,000 to 100,000 	Malagueta pepper, Cayenne pepper
// 1,000 to 10,000 	Guajillo pepper, Jalapeño
// 100 to 1,000 	Banana pepper, Cubanelle
// 0 to 100 	Bell pepper, Pimento
//

const ScovilleScale = props => {
  function determineColor(level) {
    if (level > 0 && level <= 5000) {
      return "green";
    } else if (level > 5000 && level <= 8000) {
      return "orange";
    } else if (level > 8000) {
      return "red";
    } else {
      console.error("Scoville Value Given is negative");
      return "white";
    }
  }

  function determinePercentage(level) {
    // /console.log(level / 32000 + "%");
    return level / 32000;
  }

  return (
    <Fragment>
      <div style={{ height: "100px" }}>
        <Col span={12}>
          <div style={{ backgroundColor: "#fff" }}>
            <BarChart
              axisLabels={{ y: "My y Axis" }}
              axes
              colorBars
              height={150}
              width={75}
              barWidth={20}
              xDomainRange={[1, 100]}
              yDomainRange={[1, 100]}
              data={[
                {
                  x: 0,
                  y: determinePercentage(props.maxScovilleUnits),
                  color: determineColor(
                    (props.maxScovilleUnits - props.minScovilleUnits) / 2
                  )
                },
                {
                  x: 0,
                  y: determinePercentage(props.minScovilleUnits),
                  color: "white"
                }
              ]}
            />
          </div>
        </Col>

        <Col
          style={{
            height: "100px",
            display: "flex",
            alignItems: "center"
          }}
          span={12}
        >
          {props.minScovilleUnits} to {props.maxScovilleUnits}
        </Col>
      </div>
    </Fragment>
  );
};

export default ScovilleScale;
