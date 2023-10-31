import React from "react";
import NavBar from './nav.jsx';
import Card from './card.jsx'
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div><NavBar/></div>
			<div className="bodyPage">
				<div></div>
				<div id="cards" className="my-4 ">
					<div className="row row-cols-1 row-cols-md-1 g-3">
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
						<Card/>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Home;

