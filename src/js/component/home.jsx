import React from "react";
import NavBar from './nav.jsx';
import Card from './card.jsx'
import Jumbotron from './jumbotron.jsx'
import Footer from './footer.jsx'


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className>
			<div><NavBar/></div>
			<div className="bodyPage">
				<Jumbotron/>
				<div id="cards" className="my-4 text-center">
					<div className="row row-cols-1 row-cols-md-1 g-3">
						<Card/>
						<Card/>
						<Card/>
						<Card/>
					</div>
				</div>
			</div>
			<div><Footer/></div>
		</div>
	);
};

export default Home;

