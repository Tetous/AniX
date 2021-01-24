import styled from "styled-components";
import Skeleton from "./Skeleton";

const PosterSkeleton = styled(Skeleton)`
  width: 160px;
  height: 230px;

  @media screen and (max-width: 1031px) {
    width: 180px;
    height: 250px;
  }

  @media screen and (max-width: 938px) {
    width: 160px;
    height: 230px;
  }

  @media screen and (max-width: 840px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (max-width: 740px) {
    width: 180px;
    height: 260px;
  }

  @media screen and (max-width: 675px) {
    width: 150px;
    height: 200px;
  }

  @media screen and (max-width: 575px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (max-width: 490px) {
    width: 170px;
    height: 240px;
  }

  @media screen and (max-width: 430px) {
    width: 140px;
    height: 200px;
  }
`;

export default PosterSkeleton;
