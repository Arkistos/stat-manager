import React from 'react';

import BullsLogo from './images/team_logo/Bulls Logo.png';
import ClippersLogo from './images/team_logo/Clippers Logo.png';
import GoldenstateLogo from './images/team_logo/Goldenstate Logo.jpeg';
import GrizzliesLogo from './images/team_logo/Grizzlies Logo.png';
import JazzLogo from './images/team_logo/Jazz Logo.png';
import LakersLogo from './images/team_logo/Lakers Logo.png';
import NetsLogo from './images/team_logo/Nets Logo.png';
import NuggetsLogo from './images/team_logo/Nuggets Logo.png';
import SpursLogo from './images/team_logo/Spurs Logo.png';
import TimberwolvesLogo from './images/team_logo/Timberwolves Logo.png';
import TrailBlazersLogo from './images/team_logo/Trail Blazers Logo.png';

export default class Score extends React.Component{

    

    render(){

        const boxStyle = {
            width: '400px',
            height: '97px',
            backgroundColor: '#ffffff',
            boxShadow: '26px 26px 48px rgba(13, 39, 80, 0.16), -31px -31px 43px rgba(255, 255, 255, 0.64)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontFamily: "'Oswald', sans-serif",
            fontStyle: 'normal',
            fontSize: '36px',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '50px'
        }

        const logoStyle = {
            width: '65px',
            height: '70px'
        }


        return(
            <div style={boxStyle}>
                <img style={logoStyle} src={JazzLogo}/>
                <div>96 - 130</div>
                <img style={logoStyle} src={NetsLogo}/>
            </div>
        );
    }
}