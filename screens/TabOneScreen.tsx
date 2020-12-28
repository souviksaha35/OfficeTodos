import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button} from 'react-native-elements';
import { Auth } from 'aws-amplify';

export default function TabOneScreen() {

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />

      <Button
        title="Signout"
        onPress={signOut}
        buttonStyle={{
                    // backgroundColor: Colors.light.tint,
       borderRadius: 20,
        width: 150,
        margin: 10,
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
