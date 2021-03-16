import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

class App extends React.Component {
  render() {
    return(
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
