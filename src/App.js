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
      selectedBeast: {},
      selectedHornValue: "All"
    }
  }

  openBeastModal = (index) => {
    this.setState({selectedBeast: this.state.dataArray[index], show:true});
  }

  // function for hide modal 
  closeModal = () => {
    this.setState({show:false});
  }

  // function for updating state of selected horns for dropdown
  updateHornValue = (e) => {
    // console.log('hey', this.state.selectedHornValue);
    this.setState({selectedHornValue: e.target.value});
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
