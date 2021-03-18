import React from 'react';
import HornedBeasts from './hornedbeasts';
// import BeastData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {

  renderModal = () => {
    this.props.openBeastModal();
  }

  render() {
    return (
      <div id="main">
        <CardGroup>
          {this.props.dataArray.map((beast, index) => (
            <div key={index}>
              <HornedBeasts
                index={index}
                url={beast.image_url}
                title={beast.title}
                description={beast.description}
                renderModal={this.renderModal}
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
