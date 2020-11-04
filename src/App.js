import React from "react";
import Quote from "./components/quote";
import Quotebar from "./components/quoteBar";
import { ReactComponent as Logo } from "./quote.svg";

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: {},
			current: 3,
			color: [
				"black",
				"#16a085",
				"#27ae60",
				"#2c3e50",
				"#f39c12",
				"#e74c3c",
				"#9b59b6",
				"#FB6964",
				"#342224",
				"#472E32",
				"#BDBB99",
				"#77B1A9",
				"#73A857",
			],
			bgColor: 0,
		};
	}

	fetchQuotes = async () => {
		let quotes = await fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		);
		let data = await quotes.json();
		this.setState({
			quotes: data.quotes,
		});
	};

	componentDidMount() {
		this.fetchQuotes();
	}

	handleClick = () => {
		let num = Math.floor(Math.random() * 100);
		let color = this.state.bgColor + 1;
		if (color > this.state.color.length - 1) {
			color = 0;
		}
		document.body.style.backgroundColor = `${this.state.color[color]}`;
		document.body.style.color = `${this.state.color[color]}`;
		document.querySelector(
			".tbtn"
		).style.backgroundColor = `${this.state.color[color]}`;
		document.querySelector(
			".fbtn"
		).style.backgroundColor = `${this.state.color[color]}`;
		document.querySelector(
			".btn"
		).style.backgroundColor = `${this.state.color[color]}`;
		this.setState({
			current: num,
			bgColor: color,
		});
	};

	render() {
		if (this.state.quotes.length > 1) {
			let displayQuote = this.state.quotes[this.state.current];
			return (
				<div className="main-div">
					<Quote
						quote={displayQuote}
						color={this.state.color[this.state.bgColor]}
					/>
					<Quotebar
						handleClick={this.handleClick}
						color={this.state.color[this.state.bgColor]}
					/>
				</div>
			);
		} else {
			return (
				<div className="main-div">
					<Logo
						style={{
							width: 30,
							height: 30,
						}}
					/>
					<Quotebar
						handleClick={this.handleClick}
						color={this.state.color[this.state.bgColor]}
					/>
				</div>
			);
		}
	}
}

export default App;
