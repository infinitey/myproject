import React, {Component} from 'react';

export default class Footer extends Component {

  render() {


    var footerText = {
      color: '#FFF',
      marginRight:5,
      marginLeft:5,
    }

    var socialIcons = {
      padding:5,
    }

    var centerB = {
      margin: 'auto',
      textAlign: 'center'
    }

    return (
      <div className="row" style={{padding:15}}>

        <div className="col-xs-3 col-sm-1 col-md-3">

        </div>

        <div className="hidden-xs hidden-sm col-md-1">
          <img className="img-responsive"  src="src\img\footer\web_footer_ddslogo.png"  />
        </div>

        <div className="hidden-xs col-sm-8 col-md-4" style={{}}>
          <table style={{margin:'auto', marginTop:12}} >
            <td><p style={footerText}>Developer Website</p></td>
            <td><p style={footerText}>|</p></td>
            <td><p style={footerText}>About</p></td>
            <td><p style={footerText}>|</p></td>
            <td><p style={footerText}>Term of Service</p></td>
            <td><p style={footerText}>|</p></td>
            <td><p style={footerText}>Private Policy</p></td>
            <td><p style={footerText}>|</p></td>
            <td><p style={footerText}>Contact Us</p></td>
          </table>
        </div>

        <div className="col-xs-6 col-sm-3 col-md-1" style={centerB}>
          <table style={{margin:'auto'}} >
            <td><img className="img-responsive" style={socialIcons}  src="src\img\footer\web_footer_btn_facbook.png"  /></td>
            <td><img className="img-responsive" style={socialIcons} src="src\img\footer\web_footer_btn_twitter.png"  /></td>
            <td><img className="img-responsive" style={socialIcons} src="src\img\footer\web_footer_btn_youtube.png"  /></td>
          </table>
        </div>

        <div className="col-xs-3 col-sm-0 col-md-3">

        </div>

      </div>
    );
  }
}
