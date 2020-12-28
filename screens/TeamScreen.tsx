import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import { getUser } from '../graphql/queries';

const { height, width } = Dimensions.get('window');
export default function TeamScreen() {

  useEffect(() => {
    const fetchTeam = async  () => {
      const userinfo = await  Auth.currentAuthenticatedUser();

      const getuser = await API.graphql(graphqlOperation(getUser,  {id: userinfo.attributes.sub}));

      console.log(getuser);
    }

    fetchTeam();
  }, []);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 20,}}>
              Your Teams
            </Text>
          </View>
    
    
          <Divider style={{ backgroundColor: 'grey', height: 1, }} />
    
          <View style={styles.middleContainer}>


          </View>
          <Button
          onPress={() => navigation.navigate('createTeamScreen')}
            icon={
                <AntDesign name="addusergroup" size={28} color="white" /> } buttonStyle={{
              borderRadius: 50,
              height: 70,
              width: 70,
              margin: 20,
            }}/>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: 'white'
    },
  
    upperContainer: {
      width: width,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  
    middleContainer: {
      width: width,
      height: 450,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });