import React from 'react';

import index from './index.css';
import twitter from './images/twitter.png';
import insta from './images/instagram.png';



export default class Footer extends React.Component{


    render(){

        var left = 8;
        var width= window.innerWidth-32;
        if(window.innerWidth>1240){
            left = (window.innerWidth-1250)/2;
            width= 1235;
        }

        const blocStyle = {
            fontFamily: "Jost, sans-serif",
            position: "absolute",
            height: "226px",
            width: width,
            top: "708px",
            left: left,
            backgroundColor: "#f5f5f5",
            border: "solid 0.5px",
            display: 'grid',
            gridTemplateColumns: "400px 400px",
            justifyContent: "center"
            //borderRadius: '10px'
        };
        const item1 = {
            //backgroundColor:"red",
            gridColumn: "1",
            display: "flex",
            flexDirection: "column",
            //justifyContent: "center",
            alignItems: "center",
            //alignContent: "center"
            paddingTop: "30px",
        }
        const item2={
            //backgroundColor:"green",
            gridColumn: "2",
            display: "flex",
            flexDirection: "column",
            //justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "30px"
            //alignContent: "center"
        }
        const titleStyle = {
            marginBottom: "30px"
        }
        const basicStyle = {
            marginTop: "0px",
            cursor:'pointer'
        }

        const logoStyle = {
            width: '40px',
            height: '40px',
            marginTop:'35px',
            cursor:"pointer"
        }

        return (
            <div style={blocStyle}>
                <div style={item1}>
                    <strong style={titleStyle}>A propos</strong>
                    <p style={basicStyle}>Mentions légal</p>
                    <p style={basicStyle}>Informations relative aux données</p>
                    <p style={basicStyle}>Plan du site</p>
                </div>
                <div style={item2}>
                    <strong >Contactez-nous</strong>
                    <img style={logoStyle} src={twitter} />
                    <img style={logoStyle} src={insta}/>
                </div>
            </div>
        );
    }
}