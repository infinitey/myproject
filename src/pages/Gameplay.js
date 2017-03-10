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

        <img className="img-responsive col-xs-12 col-sm-12 col-md-8 col-md-offset-2" src="src/img/gameplay/title/web_title_system.png"/>

        <hr className="featurette-divider" style={{backgroundColor:'transparent'}}/>

        <div className="featurette row " id="services">
          <div className="row hidden-xs hidden-sm">
            <div className="col-md-6 col-md-offset-1">
              <div className="row">
                <img className="img-responsive col-md-10 pull-right " src="src/img/gameplay/title/web_title_battle.png"/>
              </div>
              <div className="row row hidden-xs hidden-sm" style={{marginTop:-40}}>
                <TextPanel infotext={"Gameplay that combines SRPG with Tic Tac Toe; Warp and position your monsters across a 3x3 battlefield to attack enemies"} > </TextPanel>
              </div>
            </div>

            <div className="col-md-4">
              <img className="featurette-image img-responsive pull-right" src="src/img/gameplay/web_image_battle_01.png"/>
            </div>
          </div>

          <div className="row hidden-md hidden-lg" style={{margin:9, marginBottom:-30}}>
            <img className="img-responsive col-sm-offset-1  col-xs-offset-1 col-sm-10  col-xs-10"  style={{zIndex: 999}} src="src/img/gameplay/title/web_title_battle.png"/>
            <img className="img-responsive col-sm-offset-2  col-xs-offset-2 col-sm-8  col-xs-8" style={{marginTop:-50, zIndex: -999}} src="src/img/gameplay/web_image_battle_01.png"/>
          </div>
          <div className="row hidden-md hidden-lg col-sm-12  col-xs-12">
            <TextPanel infotext={"Gameplay that combines SRPG with Tic Tac Toe; Warp and position your monsters across a 3x3 battlefield to attack enemies"}  />
          </div>
        </div>

        <hr className="featurette-divider" style={{backgroundColor:'transparent'}}/>


        <div className="featurette" id="contact">



          <div className="row hidden-xs hidden-sm" style={{position: 'relative'}}>

            <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1">
              <img className="img-responsive" src="src/img/gameplay/web_screenshot_chains_01.png"/>
            </div>

            <div className="col-md-offset-4 col-md-8 row"  style={{bottom:100, right:-100, position:'absolute'}}>

              <div className="">
                <img className="img-responsive col-md-8 pull-left " src="src/img/gameplay/title/web_title_chains.png" style={{bottom:-30}}/>
              </div>

              <div className="row col-md-8">
                <TextPanel infotext={"Plan and execute strings of combos with your allies to unleash massive damage!"}  />
              </div>
            </div>
          </div>

          <div className="row hidden-md hidden-lg" style={{margin:9, marginBottom:-30}}>
            <img className="img-responsive"  style={{zIndex: 999}} src="src/img/gameplay/title/web_title_chains.png"/>
            <img className="img-responsive" style={{marginTop:-50, zIndex: -999}} src="src/img/gameplay/web_screenshot_chains_01.png"/>
          </div>
          <div className="row hidden-md hidden-lg col-sm-12  col-xs-12">
            <TextPanel infotext={"Plan and execute strings of combos with your allies to unleash massive damage!"}  />
          </div>

        </div>



        <div className="featurette" id="services">
          <div className="row hidden-xs hidden-sm" >

            <div className="col-md-6 col-md-offset-1 col-lg-6 col-lg-offset-1"  style={{position:'relative',marginTop:75}}>
              <div className="row" style={{position:'absolute', top:30}}>
                <img className="img-responsive col-md-8 pull-right" src="src/img/gameplay/title/web_title_story.png"/>
              </div>
              <div className="row " style={{marginTop:200}}>
                <TextPanel infotext={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."} />
              </div>
            </div>

            <div className="col-md-5 col-lg-4" style={{marginLeft:-50}}>
              <img className="featurette-image img-responsive pull-right" src="src/img/gameplay/web_screenshot_story_01.png"/>
            </div>
          </div>

          <div className="row hidden-md hidden-lg" style={{margin:9, marginBottom:-30}}>
            <img className="img-responsive col-sm-offset-1  col-xs-offset-1 col-sm-10  col-xs-10"  style={{marginBottom:-35}} src="src/img/gameplay/title/web_title_story.png"/>
            <img className="img-responsive" style={{marginTop:-50, zIndex: -999}} src="src/img/gameplay/web_screenshot_story_01.png"/>
          </div>
          <div className="row hidden-md hidden-lg col-sm-12  col-xs-12">
            <TextPanel infotext={"Experience the mystery behind 3 warring factions and their dark past. Step into the shoes of Indra on his journey of self-discovery and his pursuit of truth and justice as you complete the quests. Immerse yourself in an interactive tale of love and loss."}  />
          </div>

        </div>

        <hr className="featurette-divider" style={{backgroundColor:'transparent'}}/>
        <img className="img-responsive col-md-8 col-md-offset-2" src="src/img/gameplay/title/web_title_monster.png"/>
        <hr className="featurette-divider" style={{backgroundColor:'transparent'}}/>


        <div className="" id="about">
          <div className="row" style={{position: 'relative'}}>
            <img className="img-responsive col-xs-12 col-sm-12 pull-right hidden-md hidden-lg" style={{marginBottom:-30}} src="src/img/gameplay/title/web_title_collect.png"/>
            <img className="img-responsive col-xs-10 col-sm-10 col-md-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 " style={{}}  src="src/img/gameplay/web_image_evolve.png"/>

            <img className="img-responsive row hidden-xs hidden-sm col-md-8 pull-right" style={{position: 'absolute', right: 30, bottom: 0, margin:'auto'}} src="src/img/gameplay/title/web_title_collect.png"/>
          </div>
        </div>



        <div className="featurette" id="services">
          <div className="row hidden-xs hidden-sm">
            <div className="col-md-5 col-md-offset-2">
              <div className="row">
                <img className="img-responsive col-md-8 pull-right " src="src/img/gameplay/title/web_title_feed.png" style={{marginBottom:-40}}/>
              </div>
              <div className="row">
                <TextPanel infotext={"Improve their stats and befriend them to unlock memorable conversations."} />
              </div>
            </div>

            <div className="col-md-4">
              <img className=" img-responsive pull-right" src="src/img/gameplay/web_image_feed_01.png" style={{position:'absolute', left:-100}}/>
            </div>
          </div>

          <div className="row hidden-md hidden-lg" style={{margin:9, marginBottom:-30}}>
            <img className="img-responsive col-xs-offset-1 col-sm-offset-1 col-xs-10 col-sm-10"  style={{zIndex: 999}} src="src/img/gameplay/title/web_title_feed.png"/>
            <img className="img-responsive col-xs-offset-1 col-sm-offset-1 col-xs-10 col-sm-10" style={{marginTop:-50, zIndex: -999}} src="src/img/gameplay/web_image_feed_01.png"/>
          </div>
          <div className="row hidden-md hidden-lg col-sm-12  col-xs-12" style={{marginTop:-10}}>
            <TextPanel infotext={"Improve their stats and befriend them to unlock memorable conversations."}  />
          </div>

        </div>

        <hr className="featurette-divider" style={{backgroundColor:'transparent'}}/>


        <div className="featurette" id="contact" style={{marginBottom:100}}>
          <div className="row row hidden-xs hidden-sm">
            <div className="col-md-5 col-md-offset-1">
              <img className="featurette-image img-circle img-responsive pull-left" src="src/img/gameplay/web_custom_01.png"/>
            </div>
            <div className="col-md-6" style={{marginTop:80}}>
              <div className="row">
                <img className="img-responsive col-md-10 pull-left " src="src/img/gameplay/title/web_title_custom.png" style={{marginBottom:-30}}/>
              </div>
              <div className="row">
                <TextPanel infotext={"Optimise your Monster party with over 250 skills. Equip and summon Puffs to aid you in battles."} />
              </div>
            </div>
          </div>

          <div className="row hidden-md hidden-lg" style={{margin:9, marginBottom:-30}}>
            <img className="img-responsive"  style={{zIndex: 999}} src="src/img/gameplay/title/web_title_custom.png"/>
            <img className="img-responsive" style={{marginTop:-50, zIndex: -999}} src="src/img/gameplay/web_custom_01.png"/>
          </div>
          <div className="row hidden-md hidden-lg col-sm-12  col-xs-12" >
            <TextPanel infotext={"Optimise your Monster party with over 250 skills. Equip and summon Puffs to aid you in battles."}  />
          </div>
        </div>



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
