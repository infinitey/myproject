import React, {Component} from 'react';

export default class NewsArticle extends Component {

  render() {
    const title = this.props.title;
    const textContent = this.props.textContent;

    return (
      <div className="col-md-6 container-fluid">
        <h1>{ title }</h1>
        <img className="featurette-image img-circle img-responsive pull-left" src="http://placehold.it/500x500"/>
        <p className="lead">{ textContent }</p>
        <a className="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
