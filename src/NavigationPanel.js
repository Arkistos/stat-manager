import React from "react";
import { Transition } from 'react-transition-group';

import NavigationButton from "./NavigationButton";

import basketballTexture from "./images/basketballTexture.jpg";
import topCorner from "./images/topCorner.png";
import bottomCorner from "./images/bottomCorner.png";

export default class NavigationPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            buttonSelect: 0,
            selectorPosition: {
                top: 0,
                left: 0
            }
        };
        this.clickOnButton = this.clickOnButton.bind(this);
    }

    /** get wich button is on */
    clickOnButton(data){
        this.setState((previousState, props)=>({
            buttonSelect: data.index,
            selectorPosition: {
                top: data.position.top + 10,
                left: data.position.left
            }
        }));
    }

 





    render(){
        const BUTTONS = ["Home", "Calendar", "Teams", "Player"];
        const BOTTOMPANELSIZE = 80;

        var screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        var panelStyle = {
            height: screen.width>500?screen.height:BOTTOMPANELSIZE,
            width: screen.width>500?screen.width/5:window.innerWidth,
            position: "fixed",
            top:screen.width>500?"0":screen.height-BOTTOMPANELSIZE,
            left: "0",
            backgroundImage: `url(${basketballTexture})`,
            backgroundSize: screen.width>500?'400px':screen.width,
            backgroundRepeat: "repeat-y",
            opacity: "0.8",
            display: "flex",
            flexDirection: screen.width>500?'column':'row',
            justifyContent: "center",
            alignItems:"end",
            zIndex: '4'
        }

        const selectorStyle = {
            position: 'absolute',
            top: screen.width>500?this.state.selectorPosition.top:0,
            left: screen.width>500?screen.width/5-screen.width/6:this.state.selectorPosition.left+13,
            backgroundColor: '#ffffff',
            borderRadius: "50px 0px 0px 50px",
            width: screen.width>500?screen.width/5:BOTTOMPANELSIZE,
            height: '80px',
            zIndex: '-1',
            transition: `top 300ms ease-in-out, left 300ms ease-in-out`,
            transform: screen.width<500?'rotate(270deg)':'rotate(0deg)'
        };

        const topCornerStyle = {
            position: "absolute",
            width:"38px",
            height: "38px",
            top: "-38px",
            left:screen.width>500?screen.width/6 -38:45,
        };

        const bottomCornerStyle = {
            position: "absolute",
            width:"38px",
            height: "38px",
            top: "80px",
            left:screen.width>500?screen.width/6 -38:45,
        };


        return (
            <div style={panelStyle}>
                {BUTTONS.map((element, index) =>
                    <NavigationButton key={index} clickOnThis={this.clickOnButton} text={element} index={index} on={this.state.buttonSelect==index?true:false}/>
                )}
                { this.state.selectorPosition.top>0 && 
                    <Transition in={true} timeout={25} >
                        {state => (
                            <div style={{...selectorStyle}}>
                                <img style={bottomCornerStyle} src={bottomCorner} alt='round design top'/>
                                <img style={topCornerStyle} src={topCorner} alt='round design bottom'  />
                            </div>
                        )}
                    </Transition>
                }
            </div>
        );
    }
}
