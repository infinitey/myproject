import React, {Component} from 'react';

export default class TextPanel extends Component {

  render() {
    var style = {
      maxHeight: 50,
      position: 'absolute',
      right: 40,
      bottom: 30,
    }

    var textStyle = {
      marginLeft:10,
      marginRight:10
    }

    return (
      <div className='text-panel'>
        <p className="lead" style={textStyle} >{this.props.infotext}</p>
        <img className="img-responsive" style={style} src="src\img\gameplay\web_image_battle_02.png"  />
      </div>
    );
  }
}
