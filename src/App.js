import React, { Component } from 'react';
import './App.css';
import Header from './componets/header/header';
import Nav from './componets/navbar/navbar';
import ImageCard from './componets/images/imageCard';
import cards from "./cards.json";
import Container from "./componets/Container"

let isClicked = [];

class App extends Component {

  state = {
    cards,
    score: 0,
    highScore: 0
  }

  cardShuffle = id => {
    const cardShuffle = this.state.cards.sort(() => Math.random() - 0.5);
    this.setState({
      cards: cardShuffle
    });
    if (isClicked.includes(id)) {
      if (this.state.highScore < this.state.score) {
        this.setState({
          highScore: this.state.score
        });
      }
      this.setState({
        score: 0
      });
      isClicked = [];
    } else {
      isClicked.push(id);
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  //callback function that will shuffle images on click

  render() {
    console.log(this.state);
    return (
      <Container>
      <Nav score={this.state.score} highScore={this.state.highScore} />
      <div className = "container"  justify-content= "center">
        <Header/>
        </div>
        <div className = "container">

        {this.state.cards.map(card => (
          <ImageCard
            cardShuffle={this.cardShuffle}
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}

          />
        ))}
        </div>
      </Container>
    )
  }
}

export default App;
