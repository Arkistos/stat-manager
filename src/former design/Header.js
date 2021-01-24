import React from 'react';
import Label from './Label';
import Navigation from './Navigation';
import LoginButton from './LoginButton';


export default class Header extends React.Component{

	

	render(){

		var headerDimensions = {
			width: 1240,
			left: 0
		};
		if(window.innerWidth>1240){
			//headerDimensions.width= 1190;
			//headerDimensions.left= ((window.innerWidth-1240)/2);
		}

		var backgroundColor = "#ffffffaa"
		if(window.innerWidth<=500){
			backgroundColor = "#ffffff00";
		}
		const style = {
			//backgroundColor : backgroundColor,
			position: 'fixed',
			width: headerDimensions.width,
			top:'15px',
			left:headerDimensions.left,
			borderRadius: "20px",
			zIndex: "10"
		};	
		
		return (
			<div id='header' style={style}>
				<Label />
				<Navigation />
				<LoginButton />
			</div>
		);
	}
}