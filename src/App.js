import React from "react";
import Timer from "./Timer";
import buzz from "buzz";

class App extends React.Component {
  chime = new buzz.sound(
    "http://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3"
  );

  state = {
    count: 0,
    isMuted: true
  };

  componentDidMount() {
    this.state.isMuted && this.chime.mute();
  }

  render() {
    const { count, isMuted } = this.state;

    return (
      <div className="App">
        <Timer onComplete={this.handleComplete} key={count} />
        <button onClick={this.toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      </div>
    );
  }

  toggleMute = () => {
    this.chime.toggleMute();
    this.setState({
      isMuted: !this.state.isMuted
    });
  };

  handleComplete = () => {
    if (!this.state.isMuted) {
      this.chime.play();
    }

    // Increment the timer's key so that it starts the next countdown.
    this.setState({ count: this.state.count + 1 });
  };
}

export default App;
