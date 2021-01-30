import React from "react";

import NavigationPanel from "./NavigationPanel";

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
      </div>
    );
  }
}
