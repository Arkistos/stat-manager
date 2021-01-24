import React from "react";

import NavigationButton from "./NavigationButton";

import basketballTexture from "./images/basketballTexture.jpg";
import topCorner from "./images/topCorner.png";
import bottomCorner from "./images/bottomCorner.png";

export default class NavigationPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            buttonSelect: 0,
            selectorPosition: '134.9px'
        }
        this.clickOnButton = this.clickOnButton.bind(this);
    }


    /** get wich button is on */
    clickOnButton(data){
        this.setState({
            buttonSelect: data.index,
            selectorPosition: data.position + 10
        });
    }

    render(){

        const buttons = ["Home", "Calendar", "Teams", "Player"];

        var screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        var panelStyle = {
            height: screen.height,
            width: screen.width/5,
            position: "fixed",
            top:"0",
            left: "0",
            backgroundImage: `url(${basketballTexture})`,
            backgroundSize: 400,
            backgroundRepeat: "repeat-y",
            opacity: "0.8",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems:"end"
        }

        var selectorStyle = {
            position: 'absolute',
            top: this.state.selectorPosition,
            left: screen.width/5-screen.width/6,
            backgroundColor: '#ffffff',
            borderRadius: "50px 0px 0px 50px",
            width: screen.width/6,
            height: '80px',
            zIndex: '-2'
        };

        const topCornerStyle = {
            position: "relative",
            width:"38px",
            height: "38px",
            top: "-38px",
            left:"138px",
        };

        const bottomCornerStyle = {
            position: "relative",
            width:"38px",
            height: "38px",
            top: "80px",
            left:"175px"
        };

        return (
            <div style={panelStyle}>
                {buttons.map((element, index) =>
                    <NavigationButton key={index} clickOnThis={this.clickOnButton} text={element} index={index} on={this.state.buttonSelect===index?true:false}/>
                )}
                <div style={selectorStyle}>
                    <img style={bottomCornerStyle} src={bottomCorner} alt='round design top'/>
                    <img style={topCornerStyle} src={topCorner} alt='round design bottom'  />
                </div>
            </div>
        );
    }
}
