import React from "react";
import DropDown from "./DropDown";

import loginImage from "./images/login.png";
import menuImage from "./images/menu.png";


export default class LoginButton extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			showMenu: false
		};
		this.Click = this.Click.bind(this);
	}


	Click(){
		this.setState((value)=>{
			return {showMenu : !value.showMenu};
		});
	}
	

	render(){

		var deltaSize = window.innerWidth - 1240;
		var paddingLabel = "30px";
		if (deltaSize>0) {
			paddingLabel = (deltaSize/2)+30;
		}

		const style = {
			width: "40px",
			position: "fixed",
			right: paddingLabel,
			top: "20px",
			cursor: 'pointer'
		};

		var tabs = ["Login", "Register"];
		var smallerWindowTabs = ["Stat par Équipe", "Stats par Joueur", "Login", "Register"];

		return (
			<div>
				{ window.innerWidth > 500 ?
					<div>
						<img onClick={this.Click} style={style} src={loginImage} alt="login logo"/>
						<DropDown activate={this.state.showMenu} tabs={tabs} position={paddingLabel}/>
					</div>
				:
					<div>
						<img onClick={this.Click} style={style} src={menuImage} alt="login logo"/>
						<DropDown activate={this.state.showMenu} tabs={smallerWindowTabs} position={paddingLabel}/>
					</div>
				}
			</div>
			);
	}
}