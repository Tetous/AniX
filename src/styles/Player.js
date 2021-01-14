import styled from "styled-components";

const Player = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 4px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .plyr-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--plyr-overlay);
    padding: 0.5rem 1rem;
    opacity: 0;
  }

  .plyr-controls:hover {
    opacity: 1;
  }

  .progress-bar {
    height: 6px;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    margin: 0 0.8rem;
  }

  .progress-filled {
    width: 0;
    height: 6px;
    background-color: var(--green);
    border-radius: 4px;
  }

  .volume {
    margin-left: 4rem;
  }

  .volume i {
    font-size: 1.2rem;
    margin-right: 0.8rem;
  }

  .volume input {
    -webkit-appearance: none;
    background-color: rgba(255, 255, 255, 0.2);
    height: 6px;
    border-radius: 4px;
  }

  .volume input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 7px;
    background-color: var(--green);
  }
`;

export default Player;
