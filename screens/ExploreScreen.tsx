import React, {useState, useRef} from 'react'
import { View, StyleSheet, Animated, TextInput, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {markers, mapDarkStyle, mapStandardStyle} from '../model/mapData';
import MapView, {PROVIDER_GOOGLE, Marker} from  'react-native-maps';
import { Feather, Ionicons } from '@expo/vector-icons';
function ExploreScreen() {

  const theme = useTheme();

  const initialMapState = {
    markers,
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const _map = useRef(null);

  const [state, setState] = useState(initialMapState);


  return (
    <View style={styles.container}>
      <MapView 
      ref={_map} 
      initialRegion={state.region} 
      provider={PROVIDER_GOOGLE} 
      style={styles.container}
      customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}>
        {state.markers.map((marker, index) => {
          return (
            <Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={styles.markerWrap}>
                <Animated.Image
                style={styles.marker}
                resizeMode="cover"
                source={require('../assets/images/map_marker.png')}/>
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
        style={{flex: 1, padding:0}}
        placeholderTextColor="#000"
        placeholder="Search Resturents"
        autoCapitalize="characters"/>

        <Feather name="search" size={22} color="black" />
      </View>

    </View>
  )
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 10,
  },
  marker: {
    height: 30,
    width: 30,
  },

  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
