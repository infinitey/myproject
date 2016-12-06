import React, {Component} from 'react';
import { IndexLink, Link } from "react-router";

export default class Nav extends Component {
  constructor()
  {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const worldClass = location.pathname === "/" ? "active" : "";
    const gameplayClass = location.pathname.match(/^\/gameplay/) ? "active" : "";
    const presskitClass = location.pathname.match(/^\/presskit/) ? "active" : "";
    const newsClass = location.pathname.match(/^\/news/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle"  onClick={this.toggleCollapse.bind(this)}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Monster Chronicles</a>
                </div>
                <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className={worldClass}>
                            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>World</IndexLink>
                        </li>
                        <li  className={gameplayClass}>
                            <Link to="gameplay" onClick={this.toggleCollapse.bind(this)}>Gameplay</Link>
                        </li>
                        <li  className={presskitClass}>
                            <Link to="presskit" onClick={this.toggleCollapse.bind(this)}>Presskit</Link>
                        </li>
                        <li  className={newsClass}>
                            <Link to="news" onClick={this.toggleCollapse.bind(this)}>News</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}
