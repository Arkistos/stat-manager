import React from "react";

import Home from "./images/Home.png";
import Calendar from "./images/Calendar.png";
import Teams from "./images/Teams.png";
import Player from "./images/Player.png";
import index from "./index.css";

export default class NavigationButton extends React.Component{

    constructor(props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = {
            imagesButton : {
                0: Home,
                1: Calendar,
                2: Teams,
                3: Player
            }
        }
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

        const buttonImageStyle = {
            width: "60px",
            height: "60px",
            marginLeft: "10px"
        };



        return (
            <div onClick={this.buttonClick}>
                <div id={this.props.index} style={divStyle}>
                    {window.innerWidth>900 
                        ? this.props.text
                        : <img style={buttonImageStyle} src={this.state.imagesButton[this.props.index]} alt={this.props.text}/>
                    }
                </div>
            </div>
        );
    }
}