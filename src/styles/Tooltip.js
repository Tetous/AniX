import styled from "styled-components";

const Tooltip = styled.div`
  position: absolute;
  top: 4px;
  left: ${(props) => !props.flip && "170px"};
  right: ${(props) => props.flip && "205px"};
  width: 280px;
  background-color: var(--bg-nemesis);
  padding: 1rem;
  z-index: 1;
  border-radius: 4px;
  box-shadow: var(--bs1);

  .format-episodes {
    padding: 0.8rem 0;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 1093px) {
    display: none;
  }
`;

export default Tooltip;
