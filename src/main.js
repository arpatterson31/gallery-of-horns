import React from 'react';
import HornedBeasts from './hornedbeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';



class Main extends React.Component {

  // filter function assign my filter to variable out beasts then map 
  // if statement with my var filter function  if all map hornedbeasts else .filter

  render() {

    const dataArray = this.props.dataArray;
    const filteredHorns = dataArray.filter((beast) => {
      if (this.props.selectedHornValue === "All") {
        return beast;
      } else {
        return beast.horns === +this.props.selectedHornValue;
      }
    });

    return (
      <div>
        <CardDeck>
          {filteredHorns.map((beast, index) => (
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
          ))}
        </CardDeck>
      </div>  
    );
  }

}
export default Main;
