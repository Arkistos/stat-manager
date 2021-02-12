import React from 'react';
import Index from './index.css'

import logo from './images/logo.png';



export default class Label extends React.Component{


	render(){

		var deltaSize = window.innerWidth - 1240;
		var paddingLabel = 0;
		if (deltaSize>0) {
			paddingLabel = deltaSize/2;
		}
		const divStyle = {
			marginLeft: paddingLabel,
			display: "inline",
			cursor: 'pointer'
		};
		const logoStyle = {
			width : 80, 
			display: "inline",
			verticalAlign: "middle",
		};
		const textStyle = {
			color : "#0e0ee8",
			display: "inline",
			verticalAlign: "middle",
			fontFamily: "'Oswald', sans-serif",
			fontStyle: "italic",
			fontSize: "1.3em"
		};

		return (
			<div style={divStyle}>
				<img style={logoStyle} src={logo} alt="logo"/>
				{window.innerWidth>750 && 
					<div style={textStyle}>STATS MANAGER</div>
				}
			</div>
		);
	}
}