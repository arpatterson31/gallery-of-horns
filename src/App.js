import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './selectedbeast'
import BeastData from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div id="app">
        <Header />
        <Main dataArray={BeastData}/>
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
