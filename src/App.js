import React, { Component } from 'react';
import Streetfighter from "./components/streetFighter";
import Fighters from "./fighters.json"
import './App.css';

class App extends Component {
  state = {
    isClicked: [],
    image: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    count: 0,
    message: ""
  }

  componentWillMount() {
    this.setState({message: "Game Start!"});
  }

  //Used Fisher-Yates Shuffle logic
  shuffleImages = () => {
    let i = 0;
    let j = 0;
    let temp = null;
    let array = this.state.image;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      this.setState({image: array});
    }

  }

  handleClickChange = event => {
    if (this.state.isClicked.includes(event.target.getAttribute("dataid"))) {
      this.setState({count: 0, message: "Oops, try again!", isClicked: []});
    }
    else {
      this.state.isClicked.push(event.target.getAttribute("dataid"));
      this.setState({count: this.state.count +1});
      this.shuffleImages();
      
      if(this.state.count === 14){
        this.setState({isClicked: [], count: 0, message: "You Win!"});
      }
      else {
        this.setState({message: "Game Start!"});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header sticky-top">
          <h1>{this.state.message}</h1>
          <h2>Score: {this.state.count}</h2>
        </header>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 title">Street Fighter Click Game</h1>
            <p className="lead">Click on one of the characters to earn a point. Don't click on the same character twice or you will lose your score.</p>
          </div>
        </div>
        <div className="container">
          <div className="form-row">
            {this.state.image.map(image => {
              return(<Streetfighter onClick={this.handleClickChange} id={Fighters[image].id} alt={Fighters[image].name} image={Fighters[image].image} />)
            })}
          </div>
        </div>



      </div>
    );
  }
}

export default App;
