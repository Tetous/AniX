import styled from "styled-components";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;

  @media screen and (max-width: 1031px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Cards;
