import React from "react";
import Timer from "./Timer";

class App extends React.Component {
  audioPlayer = React.createRef();

  state = {
    key: 1
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <Timer onComplete={this.handleComplete} key={key} />
        <audio
          src="https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/bell_ring.ogg"
          ref={this.audioPlayer}
        />
      </div>
    );
  }

  handleComplete = () => {
    // Play a sound.
    this.audioPlayer.current.play().catch(error => {
      console.log("Error:", error);
      alert("Time's up! (Audio isn't supported by your browser.)");
    });

    // Increment the key forces a re-render, which will
    // start the timer up again for the next interval.
    this.setState({ key: this.state.key + 1 });
  };
}

export default App;
