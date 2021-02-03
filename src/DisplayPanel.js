import React from 'react';

import LogoBackground from './images/logo_background.png';
import Logo from './images/logo.png';
import basketballTexture from "./images/basketballTexture.jpg";

import index from "./index.css";

export default class DisplayPanel extends React.Component{

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

        const divStyle = {
            display:'flex',
            flexDirection: 'row',
            justifyContent: screen.width>500?'flex-start':'center',
            alignItems: 'center',
            backgroundImage: screen.width>500?'':`url(${basketballTexture})`,
            backgroundSize: screen.width>500?'400px':screen.width,
            backgroundRepeat: "repeat-y",
            opacity: "0.8",
        }

        return(
            <div style={displayStyle}>
                <div style={divStyle} id='website_name'>
                    <img style={logoStyle} src={Logo} />
                    <div style={titleStyle}>NBA SCORES</div>
                </div>
            </div>
        );
    }
}