import React from 'react';
import HornedBeasts from './hornedbeasts';
import BeastData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <CardGroup>
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
        </CardGroup>
      </div>
    );
  }
}

export default Main;
