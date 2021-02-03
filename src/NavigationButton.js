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
        this.initPosition = this.initPosition.bind(this)
    }


    /** send to parent index and postition on the element clicked */
    buttonClick(){
        this.props.clickOnThis({
            index : this.props.index,
            position: {
                top: document.getElementById(this.props.index).getBoundingClientRect().top,
                left: document.getElementById(this.props.index).getBoundingClientRect().left
            }
            
        });
    }

    initPosition(){
        if(this.props.on){
            this.props.clickOnThis({
                index : this.props.index,
                position: {
                    top: -10,
                    left: 0
                }
                
            });
            this.buttonClick();
        }
    }


    /** init the selector position */
    componentDidMount(){
        if(this.props.index === 0){
            this.buttonClick();
        }
        window.addEventListener('resize', this.initPosition);
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
            zIndex: '10'    
        };

        const buttonImageStyle = {
            width: "60px",
            height: "60px",
            marginLeft: "10px",
            marginTop: "10px"
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