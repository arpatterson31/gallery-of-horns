import React from 'react';
import HornedBeasts from './hornedbeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import HornDropdown from './hornDropdown';


class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHornValue: ""
    }
  }

  updateHornValue = (e) => this.setState({selectedHornValue: e.target.value});

// notes 
// {this.props.dataArray.filter((beast) => beast.horns === {this.state.selectedHornValue})} -- this needs to go somewhere.. not sure where

  render() {
    return (
      <div id="main">

        <HornDropdown 
          updateHornValue={this.updateHornValue}
          selectedHornValue={this.state.selectedHornValue}

        />

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
