import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './selectedbeast'

class App extends React.Component {
  render() {
    return(
      <div id="app">
        <Header />
        <Main />
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}

export default App;
