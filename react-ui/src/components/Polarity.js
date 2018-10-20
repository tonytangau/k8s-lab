import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './Polarity.css';

const styles = theme => ({
  inputBox: {
    width: 300,
    marginRight: 15,
  },
  sendButton: {
    marginBottom: -15,
  },
  resultPaper: {
    marginTop: 15,
    padding: 15,
  }
});

class Polarity extends Component {
  state = {
    sentence: null,
    polarity: null,
    prevSentence: null,
  };

  handleChange = event => {
    this.setState({
      sentence: event.target.value,
    });
  };

  analyzeSentence = () => {
    const { sentence } = this.state;
    console.log('Processing', sentence);

    fetch(process.env.REACT_APP_SENTIMENT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sentence })
    })
      .then(res => res.json())
      .then(({ polarity }) => this.setState({ polarity, prevSentence: sentence }));
  }

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.analyzeSentence();
    }
  };

  render() {
    const { classes } = this.props;
    const { prevSentence, polarity } = this.state;
    const result = prevSentence != null ? <Paper className={classes.resultPaper}>"{prevSentence}" has polarity of {polarity}</Paper> : null;

    return (
      <div className="polarity">
        <div className="polarity-form">
          <TextField
            id="sentence"
            label="Sentence"
            className={classes.inputBox}
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            placeholder="Enter your sentence here"
            onKeyUp={this.onKeyPress}
          />
          <Button
            className={classes.sendButton}
            size="large"
            variant="contained"
            color="primary"
            onClick={this.analyzeSentence}
          >
            Send
          </Button>
        </div>
        {result}
      </div>
    )
  }
}

Polarity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Polarity);
