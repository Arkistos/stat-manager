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
            selectorPosition: 0,
            previousSelectorPosition : 0,
            animationOn: false
        };
        this.clickOnButton = this.clickOnButton.bind(this);
    }


    /** get wich button is on */
    clickOnButton(data){
        this.setState((previousState, props)=>({
            buttonSelect: data.index,
            selectorPosition: data.position + 10,
            previousSelectorPosition: previousState.selectorPosition,
        }));
    }


    render(){

        const buttons = ["Home", "Calendar", "Teams", "Player"];

        const bottomPanelSize = 100

        var screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        var panelStyle = {
            height: screen.width>500?screen.height:bottomPanelSize,
            width: screen.width>500?screen.width/5:window.innerWidth,
            position: "fixed",
            top:screen.width>500?"0":screen.height-bottomPanelSize,
            left: "0",
            backgroundImage: `url(${basketballTexture})`,
            backgroundSize: screen.width>500?'400px':screen.width,
            backgroundRepeat: "repeat-y",
            opacity: "0.8",
            display: "flex",
            flexDirection: screen.width>500?'column':'row',
            justifyContent: "center",
            alignItems:"end"
        }

        const selectorStyle = {
            position: 'absolute',
            top: this.state.selectorPosition,
            left: screen.width/5-screen.width/6,
            backgroundColor: '#ffffff',
            borderRadius: "50px 0px 0px 50px",
            width: screen.width/6,
            height: '80px',
            zIndex: '-2',
            transition: `top 300ms ease-in-out`,
        };

        const topCornerStyle = {
            position: "absolute",
            width:"38px",
            height: "38px",
            top: "-38px",
            left:screen.width/6 -38,
        };

        const bottomCornerStyle = {
            position: "absolute",
            width:"38px",
            height: "38px",
            top: "80px",
            left:screen.width/6 -38
        };


        return (
            <div style={panelStyle}>
                {buttons.map((element, index) =>
                    <NavigationButton key={index} clickOnThis={this.clickOnButton} text={element} index={index} on={this.state.buttonSelect===index?true:false}/>
                )}
                { this.state.selectorPosition>0 && 
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
