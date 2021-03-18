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
    this.props.openBeastModal(this.props.index);
  }

  render() {

    return (
      <>
        <Card style={{ width: '18rem' }} text='dark' border='info' onClick={this.clickYourFavorite}>
          <Card.Img variant="top"  src={this.props.url} alt={this.props.description} title={this.props.title} />
          <Card.Body>
            <Card.Title >{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text><p>A {this.props.name} has {this.props.horns} horn(s)</p></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text >💖 {this.state.numberOfClicks}</Card.Text>
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;
