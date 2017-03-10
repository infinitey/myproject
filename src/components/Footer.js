import React, {Component} from 'react';
import { IndexLink, Link } from "react-router";

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

    const { location } = this.props;
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const contactUsClass = location.pathname.match(/^\/contactus/) ? "active" : "";
    const privatePolicyClass = location.pathname.match(/^\/privatepolicy/) ? "active" : "";
    const termsClass = location.pathname.match(/^\/terms/) ? "active" : "";

    return (
      <div className="row" style={{padding:15}}>

        <div className="col-xs-3 col-sm-1 col-md-3">

        </div>

        <div className="hidden-xs hidden-sm col-md-1">
          <img className="img-responsive"  src="src\img\footer\web_footer_ddslogo.png"  />
        </div>

        <div className="hidden-xs col-sm-8 col-md-4" style={{}}>
          <table style={{margin:'auto', marginTop:12}} >
            <td><a href="http://deltaduckstudios.com/"><p style={footerText}>Developer Website</p></a></td>
            <td><p style={footerText}>|</p></td>
            <td><Link to="about"><p style={footerText}>About</p></Link></td>
            <td><p style={footerText}>|</p></td>
            <td><Link to="terms"><p style={footerText}>Term of Service</p></Link></td>
            <td><p style={footerText}>|</p></td>
            <td><Link to="privatepolicy"><p style={footerText}>Private Policy</p></Link></td>
            <td><p style={footerText}>|</p></td>
            <td><Link to="contactus"><p style={footerText}>Contact Us</p></Link></td>
          </table>
        </div>

        <div className="col-xs-6 col-sm-3 col-md-1" style={centerB}>
          <table style={{margin:'auto'}} >
            <td><a href="https://www.facebook.com/deltaduckstudios/"><img className="img-responsive" style={socialIcons}  src="src\img\footer\web_footer_btn_facbook.png"  /></a></td>
            <td><a href="https://twitter.com/delta_duck"><img className="img-responsive" style={socialIcons} src="src\img\footer\web_footer_btn_twitter.png"  /></a></td>
            <td><a href="https://www.youtube.com/channel/UCgYe3kg9Yaqk-dfr2UAbM3g"><img className="img-responsive" style={socialIcons} src="src\img\footer\web_footer_btn_youtube.png"  /></a></td>
          </table>
        </div>

        <div className="col-xs-3 col-sm-0 col-md-3">

        </div>

      </div>
    );
  }
}
