import React from 'react';
import HornedBeasts from './hornedbeasts';
import BeastData from './data.json';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        {BeastData.map((beast, index) => (
          <div key={index}>
            <HornedBeasts
              url={beast.image_url}
              title={beast.title}
              description={beast.description}
            />
          </div>
        ))
        }

      </div>
    );
  }
}

export default Main;
