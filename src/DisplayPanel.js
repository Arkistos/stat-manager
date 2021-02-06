import React from 'react';

import Score from './Score.js';

import LogoBackground from './images/logo_background.png';
import Logo from './images/logo.png';
import basketballTexture from "./images/basketballTexture.jpg";

import index from "./index.css";

export default class DisplayPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scores: 3
        }
    }

    render(){
        var screen = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const displayStyle = {
            height: screen.height,
            width: screen.width>500?screen.width*4/5:screen.width,
            position: 'absolute',
            right: '0px',
            top:'0px',
            backgroundImage: `url(${LogoBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachement: 'fixed',
            backgroundPosition: 'center',
        }

        const logoStyle = {
            height: '50px',
            padding:screen.width>500?'20px':'10px',
            
        }

        const titleStyle = {
            fontFamily: "'Oswald', sans-serif",
            fontStyle: 'medium',
            fontSize: '36px',
            color: '#023059'
        }

        const headerStyle = {
            backgroundColor: '#ffffff',
            display:'flex',
            flexDirection: 'row',
            justifyContent: screen.width>500?'flex-start':'center',
            alignItems: 'center',
            backgroundImage: screen.width>500?'':`url(${basketballTexture})`,
            backgroundSize: screen.width>500?'400px':screen.width,
            backgroundRepeat: "repeat-y",
            opacity: "0.8",
        }

        //const panelHeight = window.innerHeight - document.getElementById('website_name').getBoundingClientRect().height
        const listScores = {
            position: 'relative',
            top:'0px',
            right:'0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:this.state.score>5?'flex-start':'space-evenly',
            alignItems:'center',
            //overflow: 'auto',
            //flexWrap: 'wrap',

            overflowY: 'scroll',
            scrollBehavior: 'smooth',

            height: screen.width>500?window.innerHeight-90: window.innerHeight-170,
            
        };
        //console.log(document.getElementById('website_name').getBoundingClientRect().height);
        return(
            
            <div style={displayStyle}>
                <div style={headerStyle} id='website_name'>
                    <img style={logoStyle} src={Logo} />
                    <div style={titleStyle}>NBA SCORES</div>
                </div>
                <scroll-container style={listScores}>
                    <Score/>
                    <Score/>
                    <Score/>
                    
            
                </scroll-container>
            </div>
        );
    }
}