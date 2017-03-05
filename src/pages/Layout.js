import React, {Component} from 'react';
import Paragraph from '../components/Paragraph';
import NewsArticle from '../components/NewsArticle';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import {Link} from "react-router";

export default class Layout extends Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const { location } = this.props;
    //react inline styles
    const containerStyle = {
      marginTop:"60px",

    };

    var footerContainer = {
      backgroundColor: '#222',
      marginLeft:-8,
      marginRight:-8,
      marginBottom:-5,
      position:'fixed',
      bottom:0,
      width:'100%',
    }

    return (
      <div>
        <Nav location={location} />
        <div className = "container" style={containerStyle}>
          <div className="row">
            <div className="col-xs-0 col-sm-0 col-md-2">
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div>
                {this.props.children}
              </div>
            </div>
            <div className="col-xs-0 col-sm-0 col-md-2">
            </div>
          </div>

        </div>
        <div className="container-fluid" style={footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}
