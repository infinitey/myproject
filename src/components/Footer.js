import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    var footerContainer = {
      backgroundColor: '#000',
      marginLeft:-8,
      marginRight:-8,
      marginBottom:-5
    }

    var footerText = {
      color: '#FFF'
    }

    return (
      <footer style={footerContainer}>
          <div className="container">
                <img className="img-responsive"  src="src\img\footer\web_footer_ddslogo.png"  />
                <p style={footerText}>Developer Website</p>
                <p style={footerText}>|</p>
                <p style={footerText}>About</p>
                <p style={footerText}>|</p>
                <p style={footerText}>Term of Service</p>
                <p style={footerText}>|</p>
                <p style={footerText}>Private Policy</p>
                <p style={footerText}>|</p>
                <p style={footerText}>Contact Us</p>
                <img className="img-responsive"  src="src\img\footer\web_footer_btn_facbook.png"  />
                <img className="img-responsive"  src="src\img\footer\web_footer_btn_twitter.png"  />
                <img className="img-responsive"  src="src\img\footer\web_footer_btn_youtube.png"  />
          </div>
      </footer>
    );
  }
}
