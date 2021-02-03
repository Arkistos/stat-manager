import React from "react";

import NavigationPanel from "./NavigationPanel";
import DisplayPanel from "./DisplayPanel";

export default class App extends React.Component{

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
     this.setState({});
  };
  
  render(){
    return (
      <div className="App">
        <NavigationPanel/>
        <DisplayPanel/>
      </div>
    );
  }
}

