import React from 'react';
import HornedBeasts from './hornedbeasts';
// import BeastData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {

  render() {
    return (
      <div id="main">
        <CardDeck>
          {this.props.dataArray.map((beast, index) => (
            <div key={index}>
              <HornedBeasts
                index={index}
                url={beast.image_url}
                title={beast.title}
                description={beast.description}
                name={beast.keyword}
                horns={beast.horns}
                openBeastModal={this.props.openBeastModal}
              />
            </div>
          ))
          }
        </CardDeck>
      </div>
    );
  }
}

export default Main;
