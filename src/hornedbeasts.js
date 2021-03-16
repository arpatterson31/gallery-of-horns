import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

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
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={this.clickYourFavorite} src={this.props.url} alt={this.props.description} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>💖 {this.state.numberOfClicks}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;
