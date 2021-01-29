import React, { Component } from 'react';
import PreResult from '../ResultLocation/PreResult/PreResult';
import './Search.css';
import placeIcon from '../../assets/icons/locationIcon.png';
import Day from '../Day/Day';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      items: [],
    };
  };

  fetchItems(searchTerm) {
    fetch(`/api/yahoo/resource/WeatherSearch;text=${searchTerm}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ items: data })
      })
      .catch(console.log)
  }

  inputHandler(e) {
    this.setState({
      inputValue: e.target.value
    });
    this.fetchItems(e.target.value);
  };


  shortingCity = (items) => {
  
    items.sort((a, b) => a.city.localeCompare(b.city, 'es', { sensitivity: 'base' }))
    
    let data = items.reduce((r, e) => {

      // mevcut elemanın adının ilk harfini al
      let alphabet = e.city[0];
      
      // sıralamada özellik yoksa bu harfle oluşturun
      if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }

      // o harf için alt diziye eleman verme
      else r[alphabet].record.push(e);

      return r;
    }, {});

    let result = Object.values(data);
    return result;
  }


  render() {
    const sortedList = this.shortingCity(this.state.items);
    console.log(sortedList);
    return (
      <div className="SearchPanel">
        {/* {this.visiblity}
        {this.state.visiblity && (<Day  />)} */}
        <div className="searchHeader">
          <span>Location</span>
        </div>
        <div className="inputGroup">
          <input value={this.state.inputValue} onChange={(e) => this.inputHandler(e)} className="searchBar" type="text" placeholder="Search" />
          <img className="placeIcon" src={placeIcon} />
        </div>
        <div className="textDiv">
          <div className="searchText">
            <div className="list">
              {this.state.inputValue.length > 2 ? this.state.items.map((item) => {
                return <PreResult content={item} searchTerm={this.state.inputValue} onItemSelected={this.props.onItemSelected} />;
              }) : (
                  <span className="Please">Please enter at least 3 letters to make  a search.</span>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Search;
