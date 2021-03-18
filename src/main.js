import React from 'react';
import HornedBeasts from './hornedbeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';



class Main extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  
  // filter function assign my filter to variable out beasts then map 
  // {this.props.dataArray.filter((beast) => beast.horns === this.props.selectedHornValue)
 

  
  render() {
    return (

      // if statement with my var filter function  if !null .map filtered else null .map all
      <div id="main">



        <CardDeck>
          {filterVariable.map((beast, index) => (
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
