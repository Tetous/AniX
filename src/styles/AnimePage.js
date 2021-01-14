import styled from "styled-components";

const AnimePage = styled.div`
  .banner {
    width: 100%;
    height: 280px;
    display: block;
  }

  .banner-shell {
    background-color: var(--bg-nemesis);
  }

  .banner-content {
    width: 80%;
    margin: auto;
    padding: 2rem 0;
  }

  .banner-content img {
    width: 190px;
    height: 290px;
    border-radius: 5px;
    margin-right: 2rem;
    margin-top: -8rem;
  }

  .info {
    width: 200px;
    background-color: var(--bg-nemesis);
    padding: 1rem;
    border-radius: 4px;
  }

  .center {
    display: grid;
    grid-template-columns: 210px 1fr;
    grid-gap: 2rem;
    width: 80%;
    margin: 2rem auto;
  }

  .episodes {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
  }

  .episode {
    text-align: center;
    padding: 0.3rem 0.8rem;
    border-radius: 3px;
    background-color: var(--bg-nemesis);
  }

  .selected {
    background-color: var(--green);
    color: var(--white);
  }
`;

export default AnimePage;
