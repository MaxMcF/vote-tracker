import React from 'react';
import './vote_tracker.css';

class VoteTracker extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      vote_limit: 10,
      upvote_count: 0,
      downvote_count: 0
    }
  
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleUp(){
    this.updateState(this.state.upvote_count + 1, "up") 
  }

  handleDown(){
    this.updateState(this.state.downvote_count + 1,  "down") 
  }

  updateState(counter, fromWhom){
    if (this.state.vote_limit < 1) { return alert('You\'re out of votes.') }
    else{
      let vote_limit = this.state.vote_limit - 1
      if (fromWhom === "up") {
        let upvote_count = counter
        this.setState({ upvote_count, vote_limit})
      }
      if (fromWhom === "down") {
        let downvote_count = counter
        this.setState({ downvote_count, vote_limit})
      }
      // if (counter === 0) { polarity = 'neutral' };
    }
  }

  componentDidUpdate(){
    console.log('my counter:', this.state.counter);
  }

  render(){
    return (
      <main>
        <div className="votes">
          <h2 className="down_num">
            {this.state.downvote_count}
          </h2>
          <h2 className="up_num">
            {this.state.upvote_count}
          </h2>
        </div>
        <span className="down" onClick={this.handleDown} onKeyDown={this.handleDown}>-</span>
        <span className="up" onClick={this.handleUp} onKeyUp={this.handleUp}>+</span>
        <span>Remaining Votes: {this.state.vote_limit}</span>
      </main>
    )
  }
}

export default VoteTracker;