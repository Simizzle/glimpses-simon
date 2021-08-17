import React, { Component, useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,} from "react-places-autocomplete";
import stylesArray from "./mapStyles";
import './GoogleMap.css'
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";



export class FullMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 51.5074,
        lng: 0.1278,
      },
    };
  }
  _mapLoaded(mapProps, map) {
    map.setOptions({
       styles: stylesArray
    })
 }
  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        // this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div id="googleMaps">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="suggestionsDropdown">
              {/* <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              /> */}
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    // ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    // : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map
          setOptions={{styles: stylesArray}}
          google={this.props.google}
          style={{ width: "100%", height: "91%", position: "center" }}
          className={"map"}
          zoom={3}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            // lat: this.state.mapCenter.lat,
            // lng: this.state.mapCenter.lng,
          }}
          onClick={this.onMapClicked}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
        
          {this.props.posts.map((post, index) =>
          {return (<Marker
            key = {index}
            onClick={this.onMarkerClick}
            name={<div>
              <h1>{post.creator}</h1>
              <h2>{post.title}</h2>
              <p>{post.message}</p>
                <CloudinaryContext cloudName="dbonvkpgh">
             <div>
            <Image publicId={post.publicID}>
            <Transformation  width="500" crop="fill" radius="20" />
              </Image>
            </div>
                </CloudinaryContext>     
            </div>}
            position={{ 
              lat: post.location.lat,
              lng: post.location.lng,
            }}
            icon={{
              url: '../../Star.svg',
              scaledSize: new window.google.maps.Size(40, 40)
            }}
          />)})}
          <InfoWindow
            
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(FullMap);