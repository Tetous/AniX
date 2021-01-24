import styled from "styled-components";

const Player = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  color: var(--white);

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
    background-color: var(--plyr-overlay);
    padding: 0.5rem 1rem;
    width: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    transform: ${(props) =>
      !props.moveUp ? "translateY(-10px)" : "translateY(0)"};
    transition: opacity 0.4s ease-in-out;
    opacity: 0;
  }

  .plyr-controls:hover {
    opacity: 1;
  }

  .progress-bar {
    width: 80%;
    height: 6px;
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
    margin: 0 4rem;
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

  @media screen and (max-width: 750px) {
    .progress-bar {
      width: 70%;
      margin-right: 2rem;
    }

    .volume {
      display: none;
    }
  }

  @media screen and (max-width: 750px) {
    .progress-bar {
      width: 50%;
    }
  }
`;

export default Player;
