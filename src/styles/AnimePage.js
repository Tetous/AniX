import styled from "styled-components";

const AnimePage = styled.div`
  .banner,
  .banner-skl {
    width: 100%;
    height: 280px;
    display: block;
    filter: brightness(0.6);
  }

  .banner-shell {
    background-color: var(--bg-nemesis);
  }

  .banner-content {
    width: 80%;
    margin: auto;
    padding: 2rem 0;
  }

  .banner-content img,
  .poster {
    width: 190px;
    height: 290px;
    border-radius: 5px;
    margin-right: 2rem;
    margin-top: -8rem;
    z-index: 10;
  }

  .banner-info h2 {
    margin-bottom: 0.8rem;
  }

  .banner-info i {
    position: relative;
    top: -15px;
  }

  .info {
    width: 200px;
    background-color: var(--bg-nemesis);
    padding: 1rem;
    border-radius: 4px;
  }

  .center {
    display: grid;
    grid-template-columns: 200px 1fr;
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
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    background-color: var(--bg-nemesis);
  }

  .selected {
    background-color: var(--green);
    color: var(--white);
  }

  .pagination {
    margin: auto;
    margin-top: 2rem;
    max-width: 200px;
    background-color: var(--bg-nemesis);
    border-radius: 40px;
    padding: 0.2rem 0;
  }

  .pagination p span:nth-child(2) {
    padding: 0 0.4rem;
  }

  @media screen and (max-width: 1093px) {
    .banner-content {
      width: 90%;
    }

    .center {
      width: 90%;
    }
  }

  @media screen and (max-width: 1000px) {
    .pagination {
    }

    .center {
      grid-template-columns: 1fr;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }

    .info div {
      flex-basis: 200px;
    }
  }

  @media screen and (max-width: 750px) {
    .banner,
    .banner-skl {
      height: 200px;
    }

    .banner-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .banner-content img,
    .poster {
      width: 150px;
      height: 220px;
    }

    .banner-info {
      margin-top: 1.5rem;
    }

    .episodes {
      grid-template-columns: repeat(10, 1fr);
    }
  }

  @media screen and (max-width: 620px) {
    .episodes {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  @media screen and (max-width: 560px) {
    .banner-info-skl div:last-child {
      width: 450px;
    }
  }

  @media screen and (max-width: 500px) {
    .episodes {
      grid-template-columns: repeat(6, 1fr);
    }

    .banner-info-skl div:last-child {
      width: 400px;
    }
  }

  @media screen and (max-width: 440px) {
    .banner-info-skl div:first-child {
      width: 250px;
    }

    .banner-info-skl div:last-child {
      width: 340px;
    }
  }
`;

export default AnimePage;
