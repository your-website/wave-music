import React, { Component } from "react";
import { connect } from "react-redux";
import { setAudioRef } from "../../store/actions/songs";

class Audio extends Component {
  state = {
    audioRef: React.createRef(),
  };

  componentDidMount() {
    console.log(this.props);

    const { setAudioRef } = this.props;
    setAudioRef(this.audioRef);
  }

  timeUpdateHandler = (e) => {
    const { songInfo, setSongInfo } = this.props;
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    const rounderCurrent = Math.round(current);
    const rounderDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (rounderCurrent / rounderDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  songEndHandler = async () => {
    const { songs, isPlaying, setCurrentSong, currentSong } = this.props;
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) this.audioRef.play();
  };
  render() {
    const { currentSong } = this.props;
    return (
      <audio
        onTimeUpdate={this.timeUpdateHandler}
        onLoadedMetadata={this.timeUpdateHandler}
        ref={(el) => (this.audioRef = el)}
        src={currentSong.audio}
        onEnded={this.songEndHandler}
      ></audio>
    );
  }
}

const mapStateToProps = ({ songsData, isPlaying }) => {
  return { songs: songsData, isPlaying };
};

export default connect(mapStateToProps, { setAudioRef })(Audio);
