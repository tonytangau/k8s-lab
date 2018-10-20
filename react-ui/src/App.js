import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Polarity from './components/Polarity';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="container" container justify="center" alignItems="center">
        <Polarity />
      </Grid>
    );
  }
}

export default App;

