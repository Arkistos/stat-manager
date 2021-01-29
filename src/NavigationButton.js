import React from "react";


import index from "./index.css";

export default class NavigationButton extends React.Component{

    constructor(props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }


    /** send to parent index and postition on the element clicked */
    buttonClick(){
        this.props.clickOnThis({index : this.props.index, position: document.getElementById(this.props.index).getBoundingClientRect().top });
    }

    /** init the selector position */
    componentDidMount(){
        if(this.props.index === 0){
            this.buttonClick();
        }
    }


    render(){
        
        /** define if the button is on set the visibility */
        //var displayButton = this.props.on ? {opacity:"ff", visibility:"visible"} : {opacity:"00", visibility:"hidden"}; 

        /** style */
        //const textStyle={
        //};

        const divStyle = {
            display: "flex",
            width: window.innerWidth/5,
            height: "100px",
            fontFamily: "'Oswald', sans-serif",
            alignItems: "center",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "36px",
            cursor: "pointer",
            justifyContent: 'center',
            zIndex: '2'    
        };



        return (
            <div onClick={this.buttonClick}>
                <div id={this.props.index} style={divStyle}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}