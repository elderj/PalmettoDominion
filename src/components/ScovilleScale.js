import React, { Fragment } from 'react';
import { BarChart } from 'react-easy-chart';

import '../styles/aligner.css';
import '../styles/fonts.css';

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
    if (level > 0) return 'orange';
  }

  function determinePercentage(level) {
    return level / 100;
  }

  console.log(props.scovilleUnits);

  return (
    <Fragment>
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <BarChart
          axisLabels={{ y: 'My y Axis' }}
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
              y: determinePercentage(props.scovilleUnits),
              color: determineColor(props.scovilleUnits),
            },
          ]}
        />
      </div>
    </Fragment>
  );
};

export default ScovilleScale;
