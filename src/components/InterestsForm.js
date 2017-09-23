import React, {Component} from 'react';
import {MultiSelect} from 'react-selectize';

class InterestsForm extends React.Component {
  render() {
    return (
      <div>

        <MultiSelect
            placeholder = "Select Interests"
            options = {['amusementparks','aquariums','archery','badminton','bathing_area','battingcages','beachvolleyball','beaches','boating','bobsledding','bocceball','bowling','bubblesoccer','bungeejumping','carousels','challengecourses','climbing','cyclingclasses','discgolf','diving','freediving','scuba','escapegames','experiences','fencing','fishing','fitness','aerialfitness','barreclasses','bootcamps','boxing','cardioclasses','dancestudio','emstraining','golflessons','flyboarding','gliding','gokarts','golf','gun_ranges','gymnastics','handball','hanggliding','hiking','horseracing','horsebackriding','hot_air_balloons','indoor_playcenter','jetskis','kids_activities','kiteboarding','lakes','lasertag','lawn_bowling','mini_golf','mountainbiking','nudist','paddleboarding','paintball','parasailing','parks','dog_parks','skate_parks','publicplazas','races','racingexperience','rafting','rock_climbing','sailing','scavengerhunts','scooterrentals','seniorcenters','skatingrinks','skiing','skydiving','sledding','snorkeling','football','sports_clubs','squash','surfing','swimmingpools','tennis','trampoline','tubing','volleyball','waterparks','wildlifehunting','zipline','zoos','pettingzoos','arcades','galleries','bettingcenters','bingo','gardens','cabaret','casinos','castles','choirs','movietheaters','driveintheater','outdoormovies','countryclubs','culturalcenter','eatertainment','farms','attractionfarms','ranches','festivals','xmasmarkets','funfair','generalfestivals','tradefairs','hauntedhouses','jazzandblues','lancenters','mahjong','makerspaces','marchingbands','museums','artmuseums','childrensmuseums','musicvenues','observatories','opera','pachinko','paintandsip','theater','planetarium','sportsteams','racetracks','rodeo','stadiumsarenas','streetart','tablaoflamenco','virtualrealitycenters','wineries','winetastingroom','auto','artclasses','glassblowing','artschools','bartendingschools','circusschools','cookingschools','cosmetology_schools','language_schools','massage_schools','skischools','speechtraining','surfschools','swimminglessons','tastingclasses','cheesetastingclasses','winetasteclasses','campgrounds','resorts','skiresorts','tours','aerialtours','architecturaltours','arttours','beertours','biketours','boattours','bustours','foodtours','historicaltours','scootertours','walkingtours','whalewatchingtours','winetours','localflavor','parklets','publicart','yelpevents','radiostations','televisionstations','nightlife','stripclubs','stripteasedancers','barcrawl','beergardens','coffeeshops','comedyclubs','countrydancehalls','danceclubs','jazzandblues','karaoke','musicvenues','pianobars','poolhalls','afrobrazilian','buddhist_temples','churches','hindu_temples','mosques','shrines','spiritism','synagogues','taoisttemples','antiques','galleries','stationery','cookingclasses','paintyourownpottery','bookstores','comicbooks','fashion',].map(
              interest => ({label: interest, value: interest})
            )}
            transitionEnter={true}
            transitionExit={true}
        />
      </div>
    )
  }
}

export default InterestsForm