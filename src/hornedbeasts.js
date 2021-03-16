import React from 'react';
import Data from '../data.json';

class HornedBeasts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numberOfClicks: 0
    }
  }

  clickYourFavorite = () => {
    this.setState({numberOfClicks: this.state.numberOfClicks + 1});
  }

  render() {

    return (
      <>
        <h2>{this.props.title}</h2>
        <div>💖 {this.state.numberOfClicks}</div>
        <img onClick={this.clickYourFavorite} src={this.props.url} alt={this.props.description} title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeasts;
