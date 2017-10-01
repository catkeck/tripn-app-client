import React, {Component} from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {connect} from 'react-redux'
import UserAdapter from '../../adapters/UserAdapter'
import { bindActionCreators } from 'redux'
import * as ProfileActions from '../../actions/profile'

const DATA = [
  {label: 'Amusement Parks',value: 'amusementparks'},
  {label: 'Aquariums',value: 'aquariums'},
  {label: 'Archery',value: 'archery'},
  {label: 'Badminton',value: 'badminton'},
  {label: 'Bathing Area',value: 'bathing_area'},
  {label: 'Batting Cages',value: 'battingcages'},
  {label: 'Beach Volleyball',value: 'beachvolleyball'},
  {label: 'Beaches',value: 'beaches'},
  {label: 'Boating',value: 'boating'},
  {label: 'Bobsledding',value: 'bobsledding'},
  {label: 'Bocce Ball',value: 'bocceball'},
  {label: 'Bowling',value: 'bowling'},
  {label: 'Bubble Soccer',value: 'bubblesoccer'},
  {label: 'Bungee Jumping',value: 'bungeejumping'},
  {label: 'Carousels',value: 'carousels'},
  {label: 'Challenge Courses',value: 'challengecourses'},
  {label: 'Climbing',value: 'climbing'},
  {label: 'Cycling Classes',value: 'cyclingclasses'},
  {label: 'Disc Golf',value: 'discgolf'},
  {label: 'Diving',value: 'diving'},
  {label: 'Free Diving',value: 'freediving'},
  {label: 'Scuba Diving',value: 'scuba'},
  {label: 'Escape Games',value: 'escapegames'},
  {label: 'Experiences',value: 'experiences'},
  {label: 'Fencing Clubs',value: 'fencing'},
  {label: 'Fishing',value: 'fishing'},
  {label: 'Fitness & Instruction',value: 'fitness'},
  {label: 'Aerial Fitness',value: 'aerialfitness'},
  {label: 'Barre Classes',value: 'barreclasses'},
  {label: 'Boot Camps',value: 'bootcamps'},
  {label: 'Boxing',value: 'boxing'},
  {label: 'Golf Lessons',value: 'golflessons'},
  {label: 'Flyboarding',value: 'flyboarding'},
  {label: 'Gliding',value: 'gliding'},
  {label: 'Go Karts',value: 'gokarts'},
  {label: 'Golf',value: 'golf'},
  {label: 'Gun/Rifle Ranges',value: 'gun_ranges'},
  {label: 'Gymnastics',value: 'gymnastics'},
  {label: 'Handball',value: 'handball'},
  {label: 'Hang Gliding',value: 'hanggliding'},
  {label: 'Hiking',value: 'hiking'},
  {label: 'Horse Racing',value: 'horseracing'},
  {label: 'Horseback Riding',value: 'horsebackriding'},
  {label: 'Hot Air Balloons',value: 'hot_air_balloons'},
  {label: 'Indoor Playcentre',value: 'indoor_playcenter'},
  {label: 'Jet Skis',value: 'jetskis'},
  {label: 'Kids Activities',value: 'kids_activities'},
  {label: 'Kiteboarding',value: 'kiteboarding'},
  {label: 'Lakes',value: 'lakes'},
  {label: 'Laser Tag',value: 'lasertag'},
  {label: 'Lawn Bowling',value: 'lawn_bowling'},
  {label: 'Mini Golf',value: 'mini_golf'},
  {label: 'Mountain Biking',value: 'mountainbiking'},
  {label: 'Paddleboarding',value: 'paddleboarding'},
  {label: 'Paintball',value: 'paintball'},
  {label: 'Parasailing',value: 'parasailing'},
  {label: 'Parks',value: 'parks'},
  {label: 'Dog Parks',value: 'dog_parks'},
  {label: 'Skate Parks',value: 'skate_parks'},
  {label: 'Public Plazas',value: 'publicplazas'},
  {label: 'Races & Competitions',value: 'races'},
  {label: 'Racing Experience',value: 'racingexperience'},
  {label: 'Rafting/Kayaking',value: 'rafting'},
  {label: 'Rock Climbing',value: 'rock_climbing'},
  {label: 'Sailing',value: 'sailing'},
  {label: 'Scavenger Hunts',value: 'scavengerhunts'},
  {label: 'Scooter Rentals',value: 'scooterrentals'},
  {label: 'Senior Centers',value: 'seniorcenters'},
  {label: 'Skating Rinks',value: 'skatingrinks'},
  {label: 'Skiing',value: 'skiing'},
  {label: 'Skydiving',value: 'skydiving'},
  {label: 'Sledding',value: 'sledding'},
  {label: 'Snorkeling',value: 'snorkeling'},
  {label: 'Soccer',value: 'football'},
  {label: 'Sports Clubs',value: 'sports_clubs'},
  {label: 'Squash',value: 'squash'},
  {label: 'Surfing',value: 'surfing'},
  {label: 'Swimming Pools',value: 'swimmingpools'},
  {label: 'Tennis',value: 'tennis'},
  {label: 'Trampoline Parks',value: 'trampoline'},
  {label: 'Tubing',value: 'tubing'},
  {label: 'Volleyball',value: 'volleyball'},
  {label: 'Water Parks',value: 'waterparks'},
  {label: 'Wildlife Hunting Ranges',value: 'wildlifehunting'},
  {label: 'Ziplining',value: 'zipline'},
  {label: 'Zoos',value: 'zoos'},
  {label: 'Petting Zoos',value: 'pettingzoos'},
  {label: 'Arcades',value: 'arcades'},
  {label: 'Art Galleries',value: 'galleries'},
  {label: 'Betting Centers',value: 'bettingcenters'},
  {label: 'Bingo Halls',value: 'bingo'},
  {label: 'Botanical Gardens',value: 'gardens'},
  {label: 'Cabaret',value: 'cabaret'},
  {label: 'Casinos',value: 'casinos'},
  {label: 'Castles',value: 'castles'},
  {label: 'Choirs',value: 'choirs'},
  {label: 'Cinema',value: 'movietheaters'},
  {label: 'Drive-In Theater',value: 'driveintheater'},
  {label: 'Outdoor Movies',value: 'outdoormovies'},
  {label: 'Country Clubs',value: 'countryclubs'},
  {label: 'Cultural Center',value: 'culturalcenter'},
  {label: 'Eatertainment',value: 'eatertainment'},
  {label: 'Farms',value: 'farms'},
  {label: 'Attraction Farms',value: 'attractionfarms'},
  {label: 'Ranches',value: 'ranches'},
  {label: 'Festivals',value: 'festivals'},
  {label: 'Christmas Markets',value: 'xmasmarkets'},
  {label: 'Fun Fair',value: 'funfair'},
  {label: 'General Festivals',value: 'generalfestivals'},
  {label: 'Trade Fairs',value: 'tradefairs'},
  {label: 'Haunted Houses',value: 'hauntedhouses'},
  {label: 'Jazz & Blues',value: 'jazzandblues'},
  {label: 'LAN Centers',value: 'lancenters'},
  {label: 'Mah Jong Halls',value: 'mahjong'},
  {label: 'Makerspaces',value: 'makerspaces'},
  {label: 'Marching Bands',value: 'marchingbands'},
  {label: 'Museums',value: 'museums'},
  {label: 'Art Museums',value: 'artmuseums'},
  {label: 'Children\'s Museums',value: 'childrensmuseums'},
  {label: 'Music Venues',value: 'musicvenues'},
  {label: 'Observatories',value: 'observatories'},
  {label: 'Opera & Ballet',value: 'opera'},
  {label: 'Pachinko',value: 'pachinko'},
  {label: 'Paint & Sip',value: 'paintandsip'},
  {label: 'Performing Arts',value: 'theater'},
  {label: 'Planetarium',value: 'planetarium'},
  {label: 'Professional Sports Teams',value: 'sportsteams'},
  {label: 'Race Tracks',value: 'racetracks'},
  {label: 'Rodeo',value: 'rodeo'},
  {label: 'Social Clubs',value: 'social_clubs'},
  {label: 'Stadiums & Arenas',value: 'stadiumsarenas'},
  {label: 'Street Art',value: 'streetart'},
  {label: 'Studio Taping',value: 'studiotaping'},
  {label: 'Tablao Flamenco',value: 'tablaoflamenco'},
  {label: 'Ticket Sales',value: 'ticketsales'},
  {label: 'Virtual Reality Centers',value: 'virtualrealitycenters'},
  {label: 'Wineries',value: 'wineries'},
  {label: 'Wine Tasting Room',value: 'winetastingroom'},
  {label: 'Art Classes',value: 'artclasses'},
  {label: 'Glass Blowing',value: 'glassblowing'},
  {label: 'Ski Schools',value: 'skischools'},
  {label: 'Surf Schools',value: 'surfschools'},
  {label: 'Swimming Lessons/Schools',value: 'swimminglessons'},
  {label: 'Tasting Classes',value: 'tastingclasses'},
  {label: 'Cheese Tasting Classes',value: 'cheesetastingclasses'},
  {label: 'Wine Tasting Classes',value: 'winetasteclasses'},
  {label: 'Campgrounds',value: 'campgrounds'},
  {label: 'Resorts',value: 'resorts'},
  {label: 'Ski Resorts',value: 'skiresorts'},
  {label: 'Tours',value: 'tours'},
  {label: 'Aerial Tours',value: 'aerialtours'},
  {label: 'Architectural Tours',value: 'architecturaltours'},
  {label: 'Art Tours',value: 'arttours'},
  {label: 'Beer Tours',value: 'beertours'},
  {label: 'Bike tours',value: 'biketours'},
  {label: 'Boat Tours',value: 'boattours'},
  {label: 'Bus Tours',value: 'bustours'},
  {label: 'Food Tours',value: 'foodtours'},
  {label: 'Historical Tours',value: 'historicaltours'},
  {label: 'Scooter Tours',value: 'scootertours'},
  {label: 'Walking Tours',value: 'walkingtours'},
  {label: 'Whale Watching Tours',value: 'whalewatchingtours'},
  {label: 'Wine Tours',value: 'winetours'},
  {label: 'Local Flavor',value: 'localflavor'},
  {label: 'Parklets',value: 'parklets'},
  {label: 'Public Art',value: 'publicart'},
  {label: 'Unofficial Yelp Events',value: 'unofficialyelpevents'},
  {label: 'Yelp Events',value: 'yelpevents'},
  {label: 'Radio Stations',value: 'radiostations'},
  {label: 'Television Stations',value: 'televisionstations'},
  {label: 'Nightlife',value: 'nightlife'},
  {label: 'Bar Crawl',value: 'barcrawl'},
  {label: 'Beer Gardens',value: 'beergardens'},
  {label: 'Coffeeshops',value: 'coffeeshops'},
  {label: 'Comedy Clubs',value: 'comedyclubs'},
  {label: 'Country Dance Halls',value: 'countrydancehalls'},
  {label: 'Dance Clubs',value: 'danceclubs'},
  {label: 'Fasil Music',value: 'fasil'},
  {label: 'Jazz & Blues',value: 'jazzandblues'},
  {label: 'Karaoke',value: 'karaoke'},
  {label: 'Music Venues',value: 'musicvenues'},
  {label: 'Piano Bars',value: 'pianobars'},
  {label: 'Pool Halls',value: 'poolhalls'},
  {label: 'Afro-Brazilian',value: 'afrobrazilian'},
  {label: 'Buddhist Temples',value: 'buddhist_temples'},
  {label: 'Churches',value: 'churches'},
  {label: 'Hindu Temples',value: 'hindu_temples'},
  {label: 'Mosques',value: 'mosques'},
  {label: 'Shrines',value: 'shrines'},
  {label: 'Spiritism',value: 'spiritism'},
  {label: 'Synagogues',value: 'synagogues'},
  {label: 'Taoist Temples',value: 'taoisttemples'},
  {label: 'Antiques',value: 'antiques'},
  {label: 'Art Galleries',value: 'galleries'},
  {label: 'Cards & Stationery',value: 'stationery'},
  {label: 'Cooking Classes',value: 'cookingclasses'},
  {label: 'Paint-Your-Own Pottery',value: 'paintyourownpottery'},
  {label: 'Bookstores',value: 'bookstores'},
  {label: 'Comic Books',value: 'comicbooks'}
];


class InterestsForm extends React.Component {

  constructor() {
    super()
    this.state = {
      disabled: false,
      crazy: false,
      stayOpen: false,
      value:[]
    }
  }

  handleSelectChange = (value) => {
    this.setState({value});
  }

  toggleCheckbox = (element) => {
    this.setState({
      [element.target.name]: element.target.checked,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.searchTerm.replace(',','')}`)
  }

  handleClick = () => {
    UserAdapter.saveUserInterests(this.state.value).then(data => this.props.updateUserData(data))
  }


  render() {
    const {crazy, disabled, stayOpen, value} = this.state;
    const options = DATA;
    return (
      <div className="section">
        <h3>Choose Interests</h3>
        <Select
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your interest(s)"
          simpleValue
          value={value}
        />
        <button className="interests-button" onClick={this.handleClick}>Save Interests</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    interests: state.profile.interests
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProfileActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(InterestsForm)