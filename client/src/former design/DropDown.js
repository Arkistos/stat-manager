import React from "react";
import index from "./index.css";



export default class DropDown extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			show : false,
			click : false,
			block : false,
		};
		this.ShowModal = this.ShowModal.bind(this);
		this.CloseModal = this.CloseModal.bind(this);
		//this.dropdownMenu = this.dropdownMenu.bind(this);
	}

	Enter(e){
		e.target.style.backgroundColor="#00000044";
	}
	
	Leave(e){
		e.target.style.backgroundColor="#ffffff00";
	}

	ShowModal(){
		this.setState((value)=>{
			document.addEventListener('click', this.CloseModal);
			return {show: !value.show, block: false};
		});
	}

	CloseModal(e){
		if(!this.dropdownMenu.contains(e.target) && this.state.block){
			this.setState({show: false}, ()=>{
				document.removeEventListener('click', this.CloseModal);
			});
		}
		this.setState({block: true});
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.activate != this.props.activate){
			this.ShowModal();
		}
	}

	render(){

	 	const modalStyle = {
	 		backgroundColor: "#ffffff",
	 		position: "fixed",
			right: this.props.position,
			zIndex: "10",
	 		borderRadius: "15px",
	 		fontFamily: "'Jost', sans-serif",
			width: "200px",
	 		paddingTop: "10px",
	 		paddingBottom: "10px",
			boxShadow: "2px 4px #00000033",
			
	 	};
	 	const tabStyle = {
	 		backgroundColor: "#ffffff00",
	 		width:"190px",
	 		paddingLeft: "10px",
	 		paddingTop: "5px",
	 		paddingBottom: "5px",
	 		cursor: "pointer"
	 	};
		const textStyle = {
	 		marginLeft:'15px'
	 	}

	 	return (
	 		<div ref={(element) => {this.dropdownMenu = element;}}>
	 			{ this.state.show &&
	 				<div style={modalStyle}>
	 					{this.props.tabs.map((name, key) =>(
	 						<div key={key} onMouseLeave={this.Leave} onMouseEnter={this.Enter} style={tabStyle}>{name}</div>
	 					))}
	 				</div>
	 			}
	 		</div>
	 	);
	}
}

