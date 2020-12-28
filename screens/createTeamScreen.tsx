import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text , StyleSheet, Dimensions, ActivityIndicator, TextInput} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {createTeam, createTeamUser} from '../graphql/mutations';
import {Auth, API, graphqlOperation} from 'aws-amplify';

const  {height, width} = Dimensions.get('window');


export default function createTeamScreen() {

          const [teamDesc,  setTeamDesc]  = useState('');
          const [teamName, setTeamName] = useState('');

          const [disabled, setDisabled]  = useState(false);
          const [loading, setLoading] = useState(false);

          const navigation = useNavigation();

          const createTeams = async  () => {
                    setDisabled(true);
                    setLoading(true);

                    const handleChange = (e: any) => {
                              e.persist();

                              setTimeout(() => {
                                        console.log(e.target.value); 
                              }, 100);
                    }
                    try {
                              const  userdata = await Auth.currentAuthenticatedUser({ bypassCache: true });

                              const teaminfo = await API.graphql(graphqlOperation(createTeam, { input: {name: teamName, description: teamDesc } }));
                             console.log(teaminfo);

                            const temuserdata =  await API.graphql(graphqlOperation(createTeamUser, { input: { teamID: teaminfo.data.createTeam.id, userID: userdata.attributes.sub}}));

                            console.log(temuserdata);

                             setLoading(false);

                             navigation.goBack();
                    } catch (e) {
                              console.log(e);
                    }
          }

          return (
                    <View style={styles.container}>
                              <View style={styles.upperContainer}>
                             <Button
                             onPress={() => navigation.goBack()}
                              icon={
                                         <MaterialCommunityIcons   name="keyboard-backspace" size={35} color="#0384fc" />
                             }
                             buttonStyle={{ width: 50, height: 50, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginHorizontal: 15, marginTop: 10, }}
                        />
                    </View>
        
                    <View style={styles.lowerContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25,}}>
                            Create your Team
                        </Text>
                        <Input
                        autoFocus={true}
                        containerStyle={{
                            marginHorizontal: 10,
        
                        }}
                        placeholder='Name of your Team'
                        value={teamName}
                        onChange={(text: any) => setTeamName(text)}
                        errorStyle={{ color: '#fc0303', fontWeight: 'bold', fontSize: 14 }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        />
        
                        <Input
                        autoFocus={true}
                        containerStyle={{
                            marginHorizontal: 10,
        
                        }}
                        value={teamDesc}
                        onChange={(text: any) => setTeamDesc(text)}
                        placeholder='Describe your Team'
                        errorStyle={{ color: '#fc0303', fontWeight: 'bold', fontSize: 14 }}
                        errorMessage='ENTER A VALID ERROR HERE'
                        />

                        <ActivityIndicator
                        animating={loading}
                        size={'large'}
                        color={'#0373fc'}/>


                        <Button
                            title="Create Your Team"
                            onPress={createTeams}
                            buttonStyle={{
                            // backgroundColor: Colors.light.tint,
                            borderRadius: 20,
                            width: 180,
                            margin: 10,
                            }}
                            disabled={disabled}
                        />
                    </View>
                </View>
          )
}

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    width: width,
                    height: height,
                    backgroundColor: 'white',
                },
            
                upperContainer: {
                    width: width,
                    height: 100,
                    justifyContent: 'center',
                },
            
                lowerContainer: {
                    width: width -10,
                    height: height -80,
                    marginHorizontal: 10,
                    alignItems: 'center',
                },
            
})