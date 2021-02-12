import React from 'react';

import Index from './index.css'



export default class Navigation extends React.Component{


	render(){

		const linkStyle = {
			color: "#0e0ee8",
			textDecoration: "none",
			fontFamily: "'Oswald', sans-serif",
			display: "inline",
			marginLeft: "40px"
		};
		const divStyle = {
			position: "fixed",
			left: window.innerWidth/2,
			top:"30px"
		};

		if(window.innerWidth<750){
			divStyle.left= window.innerWidth/4;
		}

		return (
			
			<div >
				{ window.innerWidth > 500 && 
					<div style={divStyle}>
						<a href="#" style={linkStyle}>Stats par Équipe</a>
						<a href="#" style={linkStyle}>Stats par Joueur</a>
					</div>
				}
			</div> 
		);
	}
}