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

  openBeastModal = (index) => {
    this.setState({selectedBeast: this.state.dataArray[index], show:true});
  }

  // function for hide modal 
  closeModal = () => {
    this.setState({show:false});
  }

  render() {
    return(
      <div id="app">
        <Header />
        <Main 
          dataArray={this.state.dataArray}
          openBeastModal={this.openBeastModal}
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
