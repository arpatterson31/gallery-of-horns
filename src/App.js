import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './selectedbeast'
import BeastData from './data.json';

class App extends React.Component {
  render() {
    return(
      <div id="app">
        <Header />
        <Main dataArray={BeastData}/>
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}

export default App;
