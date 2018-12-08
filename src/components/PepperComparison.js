import React, { Fragment } from "react";
import { BarChart } from "react-easy-chart";
import { Divider } from "antd";

function mouseOverHandler(d, e) {
  console.log({
    showToolTip: true,
    top: `${e.screenY - 10}px`,
    left: `${e.screenX + 10}px`,
    y: d.y,
    x: d.x
  });
}

export const PepperComparison = props => {
  function calculateRelativeHeatPercentage(heatCeilingForPepper) {
    let highest = Math.max(
      ...props.selectedPepperRows.map(pepper => pepper.scovilleHigh)
    );

    return (heatCeilingForPepper / highest) * 100;
  }

  const colors = Array.from({ length: props.selectedPepperRows.length }, () => [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  ]);

  const data = props.selectedPepperRows.map((pepper, index) => {
    return {
      x: pepper.name.substring(0, 10),
      y: calculateRelativeHeatPercentage(pepper.scovilleHigh),
      color: `rgb(
        ${colors[index][0]}, 
        ${colors[index][1]}, 
        15)`
    };
  });

  // props.selectedPepperRows.forEach(pepper => console.log(pepper));

  return (
    <Fragment>
      <h2>Pepper Comparison</h2>
      <Divider />
      <h4>Scollive Unit Comparison</h4>

      {props.selectedPepperRows && (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <BarChart
                    axes
                    data={data}
                    mouseOverHandler={mouseOverHandler}
                  />
                </td>
                <td>
                  <div
                    className="TableLegend"
                    style={{
                      border: "1px solid black",

                      paddingTop: "12px",
                      width: "175px"
                    }}
                  >
                    {props.selectedPepperRows.map((pepper, index) => {
                      return (
                        <div
                          key={index}
                          className="Aligner"
                          style={{
                            height: "20px"
                          }}
                        >
                          <p>{pepper.name} </p>
                          <div
                            style={{
                              backgroundColor: `rgb(${colors[index][0]}, ${
                                colors[index][1]
                              }, 15)`,
                              border: "1px solid black",
                              height: "10px",
                              marginBottom: "10px",
                              marginLeft: "5px",
                              width: "10px"
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <Divider />
    </Fragment>
  );
};
