import React from 'react';
import Index from './index.css';
import logoHeat from './images/logo heat.png';
import logoRaptors from "./images/logo raptors.png";


export default class Score extends React.Component{


    render(){

        //console.log(window.innerWidth);

        var height = 75;//140/(this.props.heightRate/2.5);
        var width = 300;//(this.props.widthRate - 60);
        var fontSize= 25
        //width = width<250 ? 250 : width ;
        /*if(this.props.nbElement>5){
            height = 50;//140/(this.props.heightRate/2.5);
            width = 200;
        }

        if(this.props.nbElement>10){
            height = 50;//140/(this.props.heightRate/2.5);
            width = 200;
        }*/

        if(window.innerWidth<500){
            height= 35;
            width= 240;
            fontSize= 14;
        } else if(window.innerWidth<1100){
            height= 50;
            width= 200;
            fontSize= 15;
        }


        var radius = 50/(this.props.heightRate);

        const blocStyle = {
            fontFamily: "'Oswald', sans-serif",
            fontSize: fontSize,
            backgroundColor: "#ffffffaa",
            height: height,
            width: width,
            borderRadius: radius,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: "0"
        };

        const logoStyle = {
            //backgroundColor: "green",
            height: height-10,
        };

        return (
            <div style={blocStyle}>
                <img style={logoStyle} src={logoHeat} />
                <div>110</div>
                <div>-</div>
                <div>100</div>
                <img style={logoStyle} src={logoRaptors} />
            </div>
        );
    }
}