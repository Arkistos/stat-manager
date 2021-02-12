import React from "react";

import Header from "./Header";
import ListLastGames from "./ListLastGames";
import Footer from "./Footer";

import court from "./images/court.png";



export default class Homepage extends React.Component{

	componentDidMount() {
    	window.addEventListener('resize', this.updateDimensions);
  	}
  	componentWillUnmount() {
    	window.removeEventListener('resize', this.updateDimensions);
  	}

  	updateDimensions = () => {
   		this.setState({});
  	};

	render(){

		const style = {
			backgroundImage :`url(${court})`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize : 'auto',
			height : '700px',
			zIndex: "0"
		};

		return(
			<div style={style}>
				<Header/>
				<ListLastGames/>
				<Footer />
			</div>
		);
	}
}
