import React from "react";

export default class Presskit extends React.Component {
  render() {
    return (
      <div>
        <h1>Presskit</h1>
        <p className="lead">
          Thank you for finding interest and taking a look at Monster Chronicles.
          To make things easy, you can download and read more relevant materials
          which include descriptions, screenshots and video by clicking on the link below.
        </p>
        <div id="mc_embed_signup">
        <form action="//deltaduckstudios.us11.list-manage.com/subscribe/post?u=ab74f0be2316e479e918957e1&id=de4059c955" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our mailing list</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
              </label>
              <input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">Name </label>
              <input type="text" defaultValue name="FNAME" className id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE2">Country </label>
              <input type="text" defaultValue name="MMERGE2" className id="mce-MMERGE2" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-MMERGE3">What device do you use? (Android, iOS, Windows) </label>
              <input type="text" defaultValue name="MMERGE3" className id="mce-MMERGE3" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display: 'none'}} />
              <div className="response" id="mce-success-response" style={{display: 'none'}} />
            </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_ab74f0be2316e479e918957e1_de4059c955" tabIndex={-1} defaultValue /></div>
            <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
        <a className="btn btn-default" href="#">Download Presskit</a>
      </div>
    );
  }
}
