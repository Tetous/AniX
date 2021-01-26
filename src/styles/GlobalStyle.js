import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {}

	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:after, *:before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		font-size: 1rem;
		font-family: var(--font), sans-serif;
		background-color: var(--bg);
		color: var(--primary-color);
		overflow-x: hidden;
		line-height: 1.8;
		transition: background 0.3s ease-out;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input, button {
		font-family: var(--font);
		font-size: 1rem;
	}

	input:focus, button:focus {
		outline: none;
	}

	img {
		object-fit: cover;
	}

	.disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

export default GlobalStyle;
