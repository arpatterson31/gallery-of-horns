import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './selectedbeast';
import BeastData from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      dataArray: BeastData,
      selectedBeast: {}
    }
  }

  selectTheBeast = (index) => {
    this.setState({selectedBeast: this.state.dataArray[index], show:true});
  }

  // function for hide modal 

  
  render() {
    return(
      <div id="app">
        <Header />
        <Main 
          dataArray={this.state.dataArray}
          selectTheBeast={this.selectTheBeast}
        />

        {{BeastData}.map((beast, index) => (
            <div key={index}>
              <SelectedBeast
                url={beast.image_url}
                title={beast.title}
                description={beast.description}
              />
            </div>
          ))
          }
        <Footer />
      </div>
    );
  }
}

export default App;
