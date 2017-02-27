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

    return (
      <div>
        <Nav location={location} />
        <div className = "container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <div>
                {this.props.children}
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
