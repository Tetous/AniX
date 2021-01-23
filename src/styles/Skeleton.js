import styled, { keyframes } from "styled-components";

// thanks to tailwindcss
export const pulse = keyframes`
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: .5;
	}
`;

const Skeleton = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  margin: ${(props) => props.margin};
  background-color: var(--skeleton-bg);
  animation: ${pulse} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  border-radius: 4px;
`;

export default Skeleton;
