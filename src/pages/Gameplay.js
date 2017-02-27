import React from "react";
import TextPanel from '../components/TextPanel';

//System
//Unique Battle System
//Gameplay that combines SRPG with Tic Tac Toe;
//Warp and position your monsters across a 3x3 battlefield to attack enemies
//Unleash Devastating Chains
//Plan and execute strings of combos with your allies to unleash massive damage!
//Intriguing Storyline
//Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss.
//Collect, Level Up and Evolve Your Monsters!
//
//Feed your Monster
//Improve their stats and befriend them to unlock memorable conversations.
//Endless Customisation
//Optimise your Monster party with over 250 skills. Equip and summon Puffs to aid you in battles.

export default class Gameplay extends React.Component {
  render() {
    return (

      <div className="container" style={{marginTop: 20}}>
        <img className="img-responsive col-md-8 col-md-offset-2" src="src/img/gameplay/title/web_title_system.png"/>

        <hr className="featurette-divider"/>

        <div className="featurette row" id="services">
          <div className="row">
            <div className="col-md-6 col-md-offset-1">
              <div className="row">
                <img className="img-responsive col-md-10 pull-right " src="src/img/gameplay/title/web_title_battle.png"/>
              </div>
              <div className="row">
                <TextPanel infotext={"Gameplay that combines SRPG with Tic Tac Toe; Warp and position your monsters across a 3x3 battlefield to attack enemies"} > </TextPanel>
              </div>
            </div>

            <div className="col-md-4">
              <img className="featurette-image img-responsive pull-right" src="src/img/gameplay/web_image_battle_01.png"/>
            </div>
          </div>

        </div>

        <hr className="featurette-divider"/>


        <div className="featurette" id="contact">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <img className="featurette-image  img-responsive pull-left" src="src/img/gameplay/web_screenshot_chains_01.png"/>
            </div>
            <div className="col-md-6">
              <div className="row">
                <img className="img-responsive col-md-8 pull-left " src="src/img/gameplay/title/web_title_chains.png"/>
              </div>
              <div className="row">
                <TextPanel infotext={"Plan and execute strings of combos with your allies to unleash massive damage!"} />
              </div>
            </div>
          </div>
        </div>

        <hr className="featurette-divider"/>


        <div className="featurette" id="services">
          <div className="row">
            <div className="col-md-5 col-md-offset-2">
              <div className="row">
                <img className="img-responsive col-md-8 pull-right " src="src/img/gameplay/title/web_title_feed.png"/>
              </div>
              <div className="row">
                <TextPanel infotext={"Improve their stats and befriend them to unlock memorable conversations."} />
              </div>
            </div>

            <div className="col-md-4">
              <img className="featurette-image img-responsive pull-right" src="src/img/gameplay/web_image_feed_01.png"/>
            </div>
          </div>


        </div>


        <img className="img-responsive col-md-8 col-md-offset-2" src="src/img/gameplay/title/web_title_monster.png"/>

        <div className="" id="about">
          <div className="row">
            <img className="img-responsive col-xs-6 col-sm-4" src="src/img/gameplay/web_image_collect_01.png"/>
            <img className="img-responsive col-xs-6 col-sm-4" src="src/img/gameplay/web_image_collect_02.png"/>
            <img className="img-responsive col-xs-6 col-sm-4" src="src/img/gameplay/web_image_collect_03.png"/>
            <img className="img-responsive col-md-6 pull-right" src="src/img/gameplay/title/web_title_collect.png"/>
          </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="featurette" id="services">
          <div className="row">
            <div className="col-md-5 col-md-offset-2">
              <div className="row">
                <img className="img-responsive col-md-8 pull-right " src="src/img/gameplay/title/web_title_feed.png"/>
              </div>
              <div className="row">
                <TextPanel infotext={"Improve their stats and befriend them to unlock memorable conversations."} />
              </div>
            </div>

            <div className="col-md-4">
              <img className="featurette-image img-responsive pull-right" src="src/img/gameplay/web_image_feed_01.png"/>
            </div>
          </div>


        </div>

        <hr className="featurette-divider"/>


        <div className="featurette" id="contact">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <img className="featurette-image img-circle img-responsive pull-left" src="src/img/gameplay/web_custom_01.png"/>
            </div>
            <div className="col-md-6">
              <div className="row">
                <img className="img-responsive col-md-10 pull-left " src="src/img/gameplay/title/web_title_custom.png"/>
              </div>
              <div className="row">
                <TextPanel infotext={"Optimise your Monster party with over 250 skills. Equip and summon Puffs to aid you in battles."} />
              </div>
            </div>
          </div>
        </div>

        <hr className="featurette-divider"/>

      </div>
    );
  }
}

//<span className="text-muted">Is Pretty Cool Too.</span>

/*
<hr className="featurette-divider">

//<!-- First Featurette -->
<div className="featurette" id="about">
    <img className="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500">
    <h2 className="featurette-heading">This First Heading
        <span className="text-muted">Will Catch Your Eye</span>
    </h2>
    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
</div>

<hr className="featurette-divider">

//<!-- Second Featurette -->
<div className="featurette" id="services">
    <img className="featurette-image img-circle img-responsive pull-left" src="http://placehold.it/500x500">
    <h2 className="featurette-heading">The Second Heading
        <span className="text-muted">Is Pretty Cool Too.</span>
    </h2>
    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
</div>

<hr className="featurette-divider">

//<!-- Third Featurette -->
<div className="featurette" id="contact">
    <img className="featurette-image img-circle img-responsive pull-right" src="http://placehold.it/500x500">
    <h2 className="featurette-heading">The Third Heading
        <span className="text-muted">Will Seal the Deal.</span>
    </h2>
    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
</div>

<hr className="featurette-divider">
*/
