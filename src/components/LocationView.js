// import React from 'react';
// import PropTypes from 'prop-types';
// import { View, StyleSheet, Animated, Platform, UIManager, TouchableOpacity, Text, ViewPropTypes } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import axios from 'axios';
// import Events from 'react-native-simple-events';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// import AutoCompleteInput from './AutoCompleteInput'

// const PLACE_DETAIL_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
// const DEFAULT_DELTA = { latitudeDelta: 0.015 * 1.5, longitudeDelta: 0.0121 * 1.5 };

// export default class LocationView extends React.Component {
//   static propTypes = {
//     apiKey: PropTypes.string.isRequired,
//     initialLocation: PropTypes.shape({
//       latitude: PropTypes.number || 0,
//       longitude: PropTypes.number || 0,
//     //   latitudeDelta: 0.00922 * 1.5,
//     //   longitudeDelta: 0.00421 * 1.5,
//     }).isRequired,
//     markerColor: PropTypes.string,
//     actionButtonStyle: ViewPropTypes.style,
//     actionTextStyle: Text.propTypes.style,
//     actionText: PropTypes.string,
//     onLocationSelect: PropTypes.func,
//     debounceDuration: PropTypes.number,
//     components: PropTypes.arrayOf(PropTypes.string),
//   };

//   static defaultProps = {
//     markerColor: 'black',
//     actionText: 'DONE',
//     onLocationSelect: () => ({}),
//     debounceDuration: 300,
//     components: [],
//   };

//   constructor(props) {
//     super(props);
//     if (Platform.OS === 'android') {
//       UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
//   }

//   componentDidMount() {
//     Events.listen('InputBlur', this.constructor.displayName, this._onTextBlur);
//     Events.listen('InputFocus', this.constructor.displayName, this._onTextFocus);
//     Events.listen('PlaceSelected', this.constructor.displayName, this._onPlaceSelected);
//   }

//   componentWillUnmount() {
//     Events.rm('InputBlur', this.constructor.displayName);
//     Events.rm('InputFocus', this.constructor.displayName);
//     Events.rm('PlaceSelected', this.constructor.displayName);
//   }

//   state = {
//     inputScale: new Animated.Value(1),
//     inFocus: false,
//     region: {
//         ...this.props.initialLocation,
//         ...DEFAULT_DELTA,
//     },
//   };

//   _animateInput = () => {
//     Animated.timing(this.state.inputScale, {
//       toValue: this.state.inFocus ? 1.2 : 1,
//       duration: 300,
//     }).start();
//   };

//   _onMapRegionChange = region => {
//     this._setRegion(region, false);
//     if (this.state.inFocus) {
//       this._input.blur();
//     }
//   };

//   _onMapRegionChangeComplete = region => {
//     this._input.fetchAddressForLocation(region);
//   };

//   _onTextFocus = () => {
//     this.state.inFocus = true;
//     this._animateInput();
//   };

//   _onTextBlur = () => {
//     this.state.inFocus = false;
//     this._animateInput();
//   };

//   _setRegion = (region, animate = true) => {
//     this.state.region = { ...this.state.region, ...region };
//     if (animate) this._map.animateToRegion(this.state.region);
//   };

//   _onPlaceSelected = placeId => {
//     this._input.blur();
//     axios.get(`${PLACE_DETAIL_URL}?key=${this.props.apiKey}&placeid=${placeId}`).then(({ data }) => {
//       let region = (({ lat, lng }) => ({ latitude: lat, longitude: lng }))(data.result.geometry.location);
//       this._setRegion(region);
//     });
//   };

//   _getCurrentLocation = () => {
//     navigator.geolocation.getCurrentPosition(position => {
//       let location = (({ latitude, longitude }) => ({ latitude, longitude }))(position.coords);
//       this._setRegion(location);
//     });
//   };

//   render() {
//     let { inputScale } = this.state;
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           ref={mapView => (this._map = mapView)}
//           style={styles.mapView}
//           region={this.state.region}
//           showsMyLocationButton={true}
//           showsUserLocation={false}
//           onPress={({ nativeEvent }) => this._setRegion(nativeEvent.coordinate)}
//           onRegionChange={this._onMapRegionChange}
//           onRegionChangeComplete={this._onMapRegionChangeComplete}
//         />
//         <Entypo
//           name={'location-pin'}
//           size={30}
//           color={this.props.markerColor}
//           style={{ backgroundColor: 'transparent' }}
//         />
//         <View style={styles.fullWidthContainer}>
//           <AutoCompleteInput
//             ref={input => (this._input = input)}
//             apiKey={this.props.apiKey}
//             style={[styles.input, { transform: [{ scale: inputScale }] }]}
//             debounceDuration={this.props.debounceDuration}
//             components={this.props.components}
//           />
//         </View>
//         <TouchableOpacity
//           style={[styles.currentLocBtn, { backgroundColor: this.props.markerColor }]}
//           onPress={this._getCurrentLocation}
//         >
//           <MaterialIcons name={'my-location'} color={'white'} size={25} />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.actionButton, this.props.actionButtonStyle]}
//           onPress={() => this.props.onLocationSelect({ ...this.state.region, address: this._input.getAddress() })}
//         >
//           <View>
//             <Text style={[styles.actionText, this.props.actionTextStyle]}>{this.props.actionText}</Text>
//           </View>
//         </TouchableOpacity>
//         {this.props.children}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mapView: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   fullWidthContainer: {
//     position: 'absolute',
//     width: '100%',
//     top: 80,
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     padding: 5,
//   },
//   currentLocBtn: {
//     backgroundColor: '#000',
//     padding: 5,
//     borderRadius: 5,
//     position: 'absolute',
//     bottom: 70,
//     right: 10,
//   },
//   actionButton: {
//     backgroundColor: '#000',
//     height: 50,
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     right: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   actionText: {
//     color: 'white',
//     fontSize: 23,
//   },
// });
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      addressQuery: '',
      predictions: []
    };
  }

  onShowInputPress = () => {
    console.log('show input');
    this.setState({showInput: true});
  }


  onOpenAutocompletePress = () => {
    RNGooglePlaces.openAutocompleteModal({
      initialQuery: 'vestar', 
      locationRestriction: {
        latitudeSW: 6.3670553, 
        longitudeSW: 2.7062895, 
        latitudeNE: 6.6967964, 
        longitudeNE: 4.351055
      }
      }, ['placeID', 'location', 'name', 'address', 'types', 'openingHours', 'plusCode', 'rating', 'userRatingsTotal', 'viewport', 'addressComponents'])
    .then((place) => {
		  console.log(place);
    })
    .catch(error => console.log(error.message));
  }

  onQueryChange = (text) => {
    this.setState({addressQuery: text});
    RNGooglePlaces.getAutocompletePredictions(this.state.addressQuery, {
      country: 'NG'
    })
    .then((places) => {
      console.log(places);
      this.setState({predictions: places});
    })
    .catch(error => console.log(error.message));
  }

  onSelectSuggestion(placeID) {
    console.log(placeID);
    // getPlaceByID call here
    RNGooglePlaces.lookUpPlaceByID(placeID)
    .then((results) => console.log(results))
    .catch((error) => console.log(error.message));

    this.setState({
      showInput: false,
      predictions: []
    });
  }

  onGetCurrentPlacePress = () => {
    RNGooglePlaces.getCurrentPlace()
    .then((results) => console.log(results))
    .catch((error) => console.log(error.message));
  }

  onGetPlaceByIDPress = () => {
    RNGooglePlaces.lookUpPlaceByID('ChIJhRTXUeeROxARmk_Rp3PtIvI')
    .then((results) => console.log(results))
    .catch((error) => console.log(error.message));
  }

  keyExtractor = item => item.placeID;

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItemWrapper}>
          <TouchableOpacity style={styles.listItem}
              onPress={() => this.onSelectSuggestion(item.placeID)}>
              <View style={styles.avatar}>
                <Image style={styles.listIcon} />
              </View>
              <View style={styles.placeMeta}>
                  <Text style={styles.primaryText}>{item.primaryText}</Text>
                  <Text style={styles.secondaryText}>{item.secondaryText}</Text>
              </View>
          </TouchableOpacity>
          <View style={styles.divider} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showInput && <View>
          <View style={styles.inputWrapper}>
            <TextInput
              ref={input => this.pickUpInput = input}
              style={styles.input}
              value={this.props.addressQuery}
              onChangeText={this.onQueryChange}
              placeholder={'Current Location'}
              placeholderTextColor='#9BABB4'
              underlineColorAndroid={'transparent'}
              autoFocus
            />
          </View>

          <View style={styles.list}>
            <FlatList
              data={this.state.predictions}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
            />
          </View>
        </View>}
        
        {!this.state.showInput && <View>
          <TouchableOpacity style={styles.inputLauncher} onPress={this.onShowInputPress}>
            <Text style={{color: '#70818A'}}>Where to?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.onOpenAutocompletePress}>
            <Text style={styles.buttonText}>Open Autocomplete Modal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.onGetCurrentPlacePress}>
            <Text style={styles.buttonText}>Get Current Place</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.onGetPlaceByIDPress}>
            <Text style={styles.buttonText}>Get Place By ID</Text>
          </TouchableOpacity>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    paddingTop: 45
  },
  button: {
    backgroundColor: '#263238',
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white'
  },
  inputLauncher: {
    backgroundColor: '#F3F7F9',
    width: '100%',
    borderRadius: 4,
    height: 35,
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 16
  },
  inputWrapper: {
    backgroundColor: '#F3F7F9',
    width: '100%',
    borderRadius: 2,
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  input: {
    color: '#222B2F',
    height: 35,
    fontSize: 15,
    paddingVertical: 4
  },
  list: {
    marginTop: 16,
    height: Dimensions.get('window').height - 70
  },
  listItemWrapper: {
    backgroundColor: 'transparent',
    height: 56
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: '100%'
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DAE4E9',
    width: '92%',
    marginHorizontal: 16,
    opacity: 0.6
  },
  primaryText: {
    color: '#222B2F',
    fontSize: 15,
    marginBottom: 3
  },
  placeMeta: {
    flex: 1,
    marginLeft: 15
  },
  secondaryText: {
    color: '#9BABB4',
    fontSize: 13,
  },
  listIcon: {
    width: 25,
    height: 25
  }
});