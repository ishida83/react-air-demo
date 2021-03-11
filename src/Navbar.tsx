import { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";
import './Navbar.scss';

const links = [
	{
		link: "/",
		text: "Home"
	},
	{
		link: "/faq",
		text: "FAQ"
	},
	{
		link: "/contact",
		text: "Contact"
	}
]

export default function Navbar() {

	// const [toggled, setToggled] = useState(false);
	const [width, setWidth] = useState(0);

	const isDesktop = () => {
		return width > 700;
	}

	useEffect(() => {
		// function defined to update our width
		function updateWidth() {
			setWidth(window.innerWidth);
		}

		// bind it to the resize event
		window.addEventListener("resize", updateWidth);
		// our state has a 0 at beginning, so we need to run update once.
		updateWidth();
		return () => window.removeEventListener("resize", updateWidth);
	});

	return (
		<div className="Navbar">
			<div className="LogoSection">
				<h1>Broccoli &amp; Co.</h1>
			</div>
			{(isDesktop()) && <div className="LinksWrapper">
				{links.map(entry => <div className="LinkWrapper" key={entry.text}>
					<ActiveLink href={entry.link}>
						{entry.text}
					</ActiveLink>
				</div>)
				}
			</div>}
		</div>
	)
}
