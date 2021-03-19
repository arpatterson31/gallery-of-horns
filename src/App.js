import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './selectedbeast';
import BeastData from './data.json';
import HornDropdown from './hornDropdown';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      dataArray: BeastData,
      filteredHorns: BeastData,
      selectedBeast: {},
      selectedHornValue: "All"
    }
  }

  openBeastModal = (name) => {
    const selectedBeast = BeastData.find(beast => beast.title === name);
    this.setState({selectedBeast, show:true});
  }

  // function for hide modal 
  closeModal = () => {
    this.setState({show:false});
  }

  // function for updating state of selected horns for dropdown
  updateHornValue = (e) => {
    e.preventDefault();
    this.setState({selectedHornValue: e.target.value});
    
    const filteredHorns = this.state.dataArray.filter((beast) => {
      if (e.target.value === "All") {
        return beast;
      } else {
        return beast.horns === +e.target.value;
      }
    });
    this.setState({filteredHorns});
  }

  render() {
    return(
      <div id="app">
        <Header />

        <HornDropdown 
          updateHornValue={this.updateHornValue}
          // horns={this.state.dataArray.horns}
        />

        <Main 
          dataArray={this.state.dataArray}
          filteredHorns={this.state.filteredHorns}
          openBeastModal={this.openBeastModal}
          selectedHornValue={this.state.selectedHornValue}
        />
        <SelectedBeast
                show={this.state.show}
                closeModal={this.closeModal}
                selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
