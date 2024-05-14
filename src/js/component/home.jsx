import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [glowColor, setGlowColor] = useState("red")
	return (
		<React.Fragment>
		<div className="traffic-top"></div>
		<div className="traffic-light">
			<div onClick={() => setGlowColor("red")} className={"red" + (glowColor === "red" ? " glow" : "")}></div>
			<div onClick={() => setGlowColor("yellow")} className={"yellow" + (glowColor === "yellow" ? " glow" : "")}></div>
			<div onClick={() => setGlowColor("green")} className={"green" + (glowColor === "green" ? " glow" : "")}></div>
		</div>
		</React.Fragment>
	);
};

export default Home;
