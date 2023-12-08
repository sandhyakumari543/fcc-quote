import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';

import { Grid, withStyles } from '@material-ui/core';
import QuoteMachine from './com/QuoteMachine';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%',
    margin: '0 auto',
    fontFamily: "'Raleway', sans-serif",
    padding: 10,
    '@media (max-width: 600px)': {
      padding: 5,
    },
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      backgroundColor: '#282c34',
      quoteColor: '#ffffff',
      tumblrIconColor: '#ffffff',

    }

    this.generateRandomColor = this.generateRandomColor.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this)
    this.generatedNewQuoteIndex = this.generatedNewQuoteIndex.bind(this);

  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));


  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generatedNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generatedNewQuoteIndex() })
  }



  generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      backgroundColor: randomColor,
      quoteColor: randomColor,
      buttonColor: randomColor,
      buttonTextcolor: '#ffffff',
      twitterIconColor: randomColor,
      tumblrIconColor: randomColor,
      paragraphColor: randomColor,

    });
  }

  render() {
    return (
      <Grid
        className={this.props.classes.container}
        id='quote-box'
        justify="center"
        container
        style={{
          textAlign: 'center',
          backgroundColor: this.state.backgroundColor,
          color: this.state.quoteColor,
          fontFamily: "'Raleway', sans-serif",
          padding: 30,
        }}
      >
        <Grid xs={12} lg={6} item>
          {this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              assignNewQuoteIndex={this.assignNewQuoteIndex}
              generateRandomColor={this.generateRandomColor}
              buttonColor={this.state.buttonColor}
              buttonTextcolor={this.state.buttonTextcolor}
              twitterIconColor={this.state.twitterIconColor}
              tumblrIconColor={this.state.tumblrIconColor}
              paragraphColor={this.state.paragraphColor}
            />
          ) : null}
          <p>
            <a style={{
              color: '#000033',
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: '12px',
             
            }}
              href="https://www.linkedin.com/in/sandhya-singh-17639b224/">Sandhya Kumari</a>
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);