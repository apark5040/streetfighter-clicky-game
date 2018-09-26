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
      this.setState({count: 0});
      this.setState({message: "Oops, try again!"});
      this.setState({isClicked: []});
    }
    else {
      this.state.isClicked.push(event.target.getAttribute("dataid"));
      this.setState({count: this.state.count +1});
      this.shuffleImages();
      
      if(this.state.count === 15){
        this.setState({message: "You Win!"});
        this.setState({isClicked: []});
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
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[0]].id} alt={Fighters[this.state.image[0]].name} image={Fighters[this.state.image[0]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[1]].id} alt={Fighters[this.state.image[1]].name} image={Fighters[this.state.image[1]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[2]].id} alt={Fighters[this.state.image[2]].name} image={Fighters[this.state.image[2]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[3]].id} alt={Fighters[this.state.image[3]].name} image={Fighters[this.state.image[3]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[4]].id} alt={Fighters[this.state.image[4]].name} image={Fighters[this.state.image[4]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[5]].id} alt={Fighters[this.state.image[5]].name} image={Fighters[this.state.image[5]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[6]].id} alt={Fighters[this.state.image[6]].name} image={Fighters[this.state.image[6]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[7]].id} alt={Fighters[this.state.image[7]].name} image={Fighters[this.state.image[7]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[8]].id} alt={Fighters[this.state.image[8]].name} image={Fighters[this.state.image[8]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[9]].id} alt={Fighters[this.state.image[9]].name} image={Fighters[this.state.image[9]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[10]].id} alt={Fighters[this.state.image[10]].name} image={Fighters[this.state.image[10]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[11]].id} alt={Fighters[this.state.image[11]].name} image={Fighters[this.state.image[11]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[12]].id} alt={Fighters[this.state.image[12]].name} image={Fighters[this.state.image[12]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[13]].id} alt={Fighters[this.state.image[13]].name} image={Fighters[this.state.image[13]].image} />
            <Streetfighter onClick={this.handleClickChange} id={Fighters[this.state.image[14]].id} alt={Fighters[this.state.image[14]].name} image={Fighters[this.state.image[14]].image} />
          </div>
        </div>



      </div>
    );
  }
}

export default App;
