import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';

const {height, width } = Dimensions.get('window');
export default function TabTwoScreen() {

  const navigation  = useNavigation();

  const onPress = () => {
    navigation.navigate('createTaskScreen');
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={{ fontWeight: 'bold', fontSize: 20,}}>
          Your Tasks
        </Text>
      </View>


      <Divider style={{ backgroundColor: 'grey', height: 1, }} />

      <View style={styles.middleContainer}>

      </View>
      <Button
        onPress={onPress}
        icon={
        <AntDesign name="plus" size={28} color="white"/> } buttonStyle={{
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
