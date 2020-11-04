import React from "react";
import { ReactComponent as Tweet } from "../twitter.svg";
import { ReactComponent as Fb } from "../facebook.svg";

export default function Quotebar(props) {
	return (
		<div className="cta">
			<div className="share">
				<div className="fbtn">
					<a
						href={`http://www.facebook.com/sharer/sharer.php?u=https://pauloe.me&t=portfolio_Site`}
						target="_blank"
						rel="noreferrer"
						style={{
							color: "inherit",
							textDecoration: "none",
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Fb
							style={{
								width: 18,
								height: 18,
								fill: "white",
								alignSelf: "center",
							}}
						/>
					</a>
				</div>
				<div className="tbtn">
					<a
						style={{
							color: "inherit",
							textDecoration: "none",
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						href={`https://twitter.com/share?ref_src=twsrc%5Etfw`}
						target="_blank"
						rel="noreferrer">
						<Tweet
							style={{
								width: 18,
								height: 18,
								fill: "white",
								alignSelf: "center",
							}}
						/>
					</a>
				</div>
			</div>
			<button onClick={props.handleClick} className="btn">
				New quote
			</button>
		</div>
	);
}
