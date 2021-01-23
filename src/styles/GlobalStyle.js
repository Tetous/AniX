import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--bg: #0B1622;
		--skeleton-bg: #1A2533;
		--font: 'Overpass';
		--primary-color: #C9E7D3;
		--secondary-color: #8BA0B2;
		--bg-nemesis: #151F2E;
		--pink: #E34F85;
		--blue: #3DB4F2;
		--white: #FFF;
		--green: #16A34A;
		--plyr-overlay: rgba(21, 31, 46, 0.9);
		--bs1: 0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1);
	}

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
		font-family: var(--font);
		background-color: var(--bg);
		color: var(--primary-color);
		overflow-x: hidden;
		line-height: 1.8;
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
`;

export default GlobalStyle;
