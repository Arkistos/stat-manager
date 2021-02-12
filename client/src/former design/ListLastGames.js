import React from 'react';
import Score from './Score';


export default class ListLastGames extends React.Component{

    render(){

        const imgSize = 1240;
        var blocSize = window.innerWidth;
        var left= 0;
        var colums = "auto";
        var scores = [1,2,"rr", "rr", "", "","", "", "","","", "", "", "", ""];
        var heightRate = scores.length;

        /*************** Gestion de la largeur et des colonne ********************/
        if(blocSize>imgSize){
            left = (blocSize-imgSize)/2;
            blocSize = 1240;
        }

        var widthRate = blocSize;
        if((scores.length>5 && scores.length<11 && window.innerWidth>500) || (window.innerWidth<1100  && window.innerWidth>500 && scores.length>5)){
            colums = "auto auto";
            heightRate = heightRate/2;
            widthRate = blocSize/2;
        } else if(scores.length>10 && window.innerWidth>500){
            colums = "auto auto auto";
            heightRate = heightRate/3;
            widthRate = blocSize/3
        }
        /**************************************************************************/

        const blocStyle = {
            position: "absolute",
            top: "70px",
            left: left,
            width: blocSize,
            height: "650px",
            display: "grid",
            gridTemplateColumns: colums,
            justifyContent: "space-around",
            alignContent: "space-evenly"
        };
        
        return (
            <div style={blocStyle}>
                {
                    scores.map((value, index) => (
                        <Score nbElement={scores.length} heightRate={heightRate} widthRate={widthRate} key={index}/>
                    ))
                }
            </div>
        );
    }
}