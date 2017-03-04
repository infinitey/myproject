import React from "react";
import TextPanel from '../components/TextPanel';

export default class World extends React.Component {
  render() {
    const containerStyle = {
      backgroundImage: "src/img/gameplay/web_system_bg.jpg",
    };
    return (
      <div style={containerStyle}>
        <div>
          <img className="img-responsive center-block" src="../../css/img/mc_web_gamelogo.png"/>
          <p className="lead text-center" style={{fontSize:16, paddingTop:10}}>A Monster Collection Strategy RPG with a Tic-Tac-Toe Twist.</p>
        </div>
        <div style={{paddingBottom:10}}>
          <TextPanel infotext={"Monster Chronicles is a Strategy RPG with an unique battle system that combines the best of hardcore games like Fire Emblem with the simplicity of Tic-Tac-Toe.  Collect, train and customise your own party of cute and cool monsters, battle through an expansive story in Ometia and become the best monster trainer."} />
        </div>
        <hr className="featurette-divider" style={{marginBottom: 10}}/>
        <img className="img-responsive center-block" src="../../css/img/mc_web_icon_world.png"/>
      </div>
    );
  }
}

//
