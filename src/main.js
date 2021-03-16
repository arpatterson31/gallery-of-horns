import React from 'react';
import HornedBeasts from './hornedbeasts';
import BeastData from './data.json';

class Main extends React.Component{
  render () {
    return (
      <div id="main">
        <ul>
          {BeastData.map((beast) => {
            return <HornedBeasts url={beast.image_url} title={beast.title} description={beast.description} />
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
