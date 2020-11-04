import React from "react";
import { ReactComponent as Logo } from "../quote.svg";

export default function Quote(props) {
	return (
		<div>
			<div className="quote">
				<Logo
					style={{
						width: 30,
						height: 30,
						margin: 0,
						padding: 0,
						paddingRight: 10,
						display: "inline",
						fill: `${props.color}`,
						transition: ".3s",
					}}
				/>
				{props.quote.quote}
			</div>
			<div className="author">- {props.quote.author}</div>
		</div>
	);
}
